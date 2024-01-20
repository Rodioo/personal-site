import React, {useEffect, useRef, useState} from 'react';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import {FaLinkedin} from 'react-icons/fa';
import Social from '../../components/Social/Social.tsx';
import Button from '../../components/Button/Button.tsx';
import ButtonType from '../../common/types/button.type.ts';
import {IoIosSend} from 'react-icons/io';
import {useAppDispatch} from '../../store/hooks.ts';
import NotificationType from '../../common/types/notification/notification.type.ts';
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner.tsx';
import axios from 'axios';
import {onShow} from '../../store/notification/notificationSlice.ts';
import AnimatedLayout from '../../layouts/AnimatedLayout/AnimatedLayout.tsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.tsx';

//TODO: refactor input field high priority
// reset fields after sending the mail
// add loading animation and disable button (should be automatically disabled after reseting fields)
// check error for onShow non-serializable
// add debounce for appearance of error input message,
// add loading screen for sending mail, add captcha after pressing send, add tests for input, refactor,
const Contact = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [emailData, setEmailData] = useState({
    email: '',
    subject: '',
    content: '',
  });
  const [isEmailDataValid, setIsEmailDataValid] = useState({
    email: false,
    subject: false,
    content: false,
  });
  const [shouldDisplayError, setShouldDisplayError] = useState({
    email: false,
    subject: false,
    content: false,
  });
  const [canSendMail, setCanSendMail] = useState(false);
  const [hoveringDataName, setHoveringDataName] = useState<string>();

  const handleAutoExpand = () => {
    const MAX_HEIGHT: number = 300;

    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      textArea.style.overflowY = 'hidden';

      textArea.style.height = `${Math.min(
        textArea.scrollHeight,
        MAX_HEIGHT
      )}px`;

      if (textArea.scrollHeight >= MAX_HEIGHT) {
        textArea.style.overflowY = 'scroll';
      }
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = event.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateInput(name, value);
  };

  const validateInput = (name: string, value: string) => {
    let isInputValid: boolean;

    switch (name) {
      case 'email': {
        isInputValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      }
      case 'subject': {
        isInputValid = value.length > 0 && value.length < 78;
        break;
      }
      case 'content': {
        isInputValid = value.length > 0 && value.length < 2000;
        break;
      }
    }

    setIsEmailDataValid((prevData) => ({
      ...prevData,
      [name]: isInputValid,
    }));
  };

  const handleUpdateDisplayError = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: boolean
  ) => {
    const name = event.target.name;

    setShouldDisplayError((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendMail = () => {
    setIsEmailDataValid({
      email: false,
      subject: false,
      content: false,
    });

    const URL = `/email/send`;
    axios
      .post(URL, emailData)
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            onShow({
              type: NotificationType.Success,
              title: 'Mail sent successfully',
            })
          );
        }
      })
      .catch((exception) => {
        console.log(exception);
        dispatch(
          onShow({
            type: NotificationType.Error,
            title: 'An error occurred',
            message: 'Failed to send mail',
          })
        );
      });

    setEmailData({
      email: '',
      subject: '',
      content: '',
    });
  };

  useEffect(() => {
    const allEmailInputsAreValid = Object.values(isEmailDataValid).every(
      (isValid) => isValid
    );
    setCanSendMail(allEmailInputsAreValid);
  }, [isEmailDataValid]);

  return (
    <AnimatedLayout>
      <div
        data-testid="CONTACT"
        className="relative ml-auto mr-auto mt-8 flex w-10/12 flex-1 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
        <HeaderParagraph title={'Reach me on LinkedIn'}>
          <Social
            icon={<FaLinkedin className="h-6 w-6" />}
            link="https://www.linkedin.com/in/antonio-falcescu/"
            text="Antonio Falcescu"
          />
        </HeaderParagraph>
        <HeaderParagraph title={'Send me an email'}>
          <div className="ml-8 flex flex-col gap-6">
            <div className="relative flex flex-row justify-between">
              <input
                className={`
                  ease w-full border-b-2 bg-transparent p-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue 
                  ${
                    ((shouldDisplayError.email && !isEmailDataValid.email) ||
                      hoveringDataName === 'email') &&
                    'border-b-red-500'
                  }  
              `}
                placeholder="Your email address"
                type="email"
                name="email"
                value={emailData.email}
                onChange={handleInputChange}
                onFocus={(event) => handleUpdateDisplayError(event, true)}
                onBlur={(event) =>
                  setTimeout(() => {
                    handleUpdateDisplayError(event, false);
                  }, 2000)
                }
              />
              <ErrorMessage
                showMessage={hoveringDataName === 'email'}
                showError={
                  (shouldDisplayError.email && !isEmailDataValid.email) ||
                  hoveringDataName === 'email'
                }
                message="Please enter a valid email address"
                onMouseOver={() => setHoveringDataName('email')}
                onMouseOut={() => setHoveringDataName(undefined)}
              />
            </div>
            <div className="relative flex flex-row justify-between">
              <input
                className={`
                  ease w-full border-b-2 bg-transparent p-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue
                  ${
                    ((shouldDisplayError.subject &&
                      !isEmailDataValid.subject) ||
                      hoveringDataName === 'subject') &&
                    'border-b-red-500'
                  }  
              `}
                placeholder="Subject"
                type="text"
                name="subject"
                value={emailData.subject}
                onChange={handleInputChange}
                onFocus={(event) => {
                  handleUpdateDisplayError(event, true);
                }}
                onBlur={(event) =>
                  setTimeout(() => {
                    handleUpdateDisplayError(event, false);
                  }, 2000)
                }
              />
              <ErrorMessage
                showMessage={hoveringDataName === 'subject'}
                showError={
                  (shouldDisplayError.subject && !isEmailDataValid.subject) ||
                  hoveringDataName === 'subject'
                }
                message="Please enter a subject for the mail (max. 78 chars)"
                onMouseOver={() => setHoveringDataName('subject')}
                onMouseOut={() => setHoveringDataName(undefined)}
              />
            </div>
            <div className="relative flex flex-row justify-between">
              <textarea
                ref={textAreaRef}
                className={`
                  ease w-full resize-none border-b-2 bg-transparent pl-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue
                  ${
                    ((shouldDisplayError.content &&
                      !isEmailDataValid.content) ||
                      hoveringDataName === 'content') &&
                    'border-b-red-500'
                  }  
              `}
                placeholder="Content"
                name="content"
                value={emailData.content}
                onChange={handleInputChange}
                onInput={handleAutoExpand}
                onFocus={(event) => handleUpdateDisplayError(event, true)}
                onBlur={(event) =>
                  setTimeout(() => {
                    handleUpdateDisplayError(event, false);
                  }, 2000)
                }
                rows={1}
              />
              <ErrorMessage
                showMessage={hoveringDataName === 'content'}
                showError={
                  (shouldDisplayError.content && !isEmailDataValid.content) ||
                  hoveringDataName === 'content'
                }
                message="Please enter a content for the mail (max. 2000 chars)"
                onMouseOver={() => setHoveringDataName('content')}
                onMouseOut={() => setHoveringDataName(undefined)}
              />
            </div>
            <Button
              variant={ButtonType.Primary}
              disabled={!canSendMail}
              onClick={handleSendMail}
              className="ml-auto mr-auto w-fit">
              <IoIosSend className="m-auto h-5 w-5 lg:h-6 lg:w-6" />
              <span className="mb-auto mt-auto">Send</span>
            </Button>
          </div>
        </HeaderParagraph>
        <NotificationBanner />
      </div>
    </AnimatedLayout>
  );
};

export default Contact;
