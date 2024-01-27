import React, {useEffect, useState} from 'react';
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
import Input from '../../components/inputs/Input/Input.tsx';
import TextAreaInput from '../../components/inputs/TextAreaInput/TextAreaInput.tsx';

//TODO: create custom hook with useDispatch for input data merged with isValid and functions (are all valid, reset, handle change, handle is valid)
// add loading animation and disable button (should be automatically disabled after reseting fields)
// check error for onShow non-serializable
// add debounce for appearance of error input message,
// add loading screen for sending mail, add captcha after pressing send, add tests for input, refactor,
const Contact = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
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

  const [canSendMail, setCanSendMail] = useState(false);

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
        data-testid={Contact.name}
        className="relative ml-auto mr-auto mt-8 flex w-10/12 flex-1 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
        <HeaderParagraph title={'Reach me on LinkedIn'}>
          <Social
            className="ml-6"
            icon={<FaLinkedin className="h-6 w-6" />}
            link="https://www.linkedin.com/in/antonio-falcescu/"
            text="Antonio Falcescu"
          />
        </HeaderParagraph>
        <HeaderParagraph title={'Send me an email'}>
          <div className="ml-8 flex flex-col gap-6">
            <Input
              type={'email'}
              name={"email"}
              placeholder={'Your email address'}
              value={emailData.email}
              onChange={handleInputChange}
              isValid={isEmailDataValid.email}
              errorMessage={'Please enter a valid email'}
            />
            <Input
              type={'text'}
              name={"subject"}
              placeholder={'Subject'}
              value={emailData.subject}
              onChange={handleInputChange}
              isValid={isEmailDataValid.subject}
              errorMessage={'Please enter a valid subject (0-78 chars.)'}
            />
            <TextAreaInput
              placeholder={'Content'}
              name={"content"}
              value={emailData.content}
              onChange={handleInputChange}
              isValid={isEmailDataValid.content}
              errorMessage={
                'Please enter a content for the mail (max. 2000 chars)'
              }
              maxHeight={300}
            />
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
