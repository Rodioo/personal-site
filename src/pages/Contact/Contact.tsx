import React, {useRef, useState} from 'react';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import {FaLinkedin} from 'react-icons/fa';
import Social from '../../components/Social/Social.tsx';
import Button from '../../components/Button/Button.tsx';
import ButtonType from '../../common/types/button.type.ts';
import {IoIosSend} from 'react-icons/io';
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner.tsx';
import NotificationType from '../../common/types/notification.type.ts';

//TODO: Implement logic for appearance of notifications and closing them,
// add debounce for appearance of error input message,
// rethink logic for appearance of error message (to also appear if the field is empty after the user focused it but not when first loading the page),
// add mail library, add functionality correct for displaying success/error popups after sending mail,
// add loading screen for sending mail, add captcha after pressing send, add tests for input, refactor,
// redesign hover effect popup and add animation
const Contact = (): React.JSX.Element => {
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

    validateInput(name, value)
  };

  const validateInput = (name: string, value: string) => {
    const isInputValid = isEmailDataValid

    switch (name) {
      case "email": {
        isInputValid.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      }
      case "subject": {
        isInputValid.subject = value.length > 0 && value.length < 78
        break;
      }
      case "content": {
        isInputValid.content = value.length > 0 && value.length < 2000
        break;
      }
    }

    setIsEmailDataValid(isInputValid)
  }

  return (
    <div
      data-testid="CONTACT"
      className="ml-auto mr-auto mt-8 flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
      <HeaderParagraph title={'Reach me on LinkedIn'}>
        <Social
          icon={<FaLinkedin className="h-6 w-6" />}
          link="https://www.linkedin.com/in/antonio-falcescu/"
          text="Antonio Fălcescu"
        />
      </HeaderParagraph>
      <HeaderParagraph title={'Send me an email'}>
        <div className="ml-8 flex flex-col gap-6">
          <div className="relative flex flex-row justify-between">
            <input
              className={`
                  ease w-full border-b-2 bg-transparent p-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue 
                  ${
                    emailData.email.length > 0 &&
                    !isEmailDataValid.email &&
                    'border-b-red-500'
                  }  
              `}
              placeholder="Your email address"
              type="email"
              name="email"
              value={emailData.email}
              onChange={handleInputChange}
            />
            {emailData.email.length > 0 && !isEmailDataValid.email && (
              <span
                className="absolute right-0 flex min-h-32"
                onMouseOver={() => setHoveringDataName('email')}
                onMouseOut={() => setHoveringDataName(undefined)}>
                <div
                  className={`z-10 ${
                    hoveringDataName === 'email' ? 'block' : 'hidden'
                  } rounded-sm bg-red-500 px-3 py-2`}>
                  <div className="text-center text-sm">
                    Please enter a valid email address
                  </div>
                </div>
                <span className="absolute right-0 flex h-3 w-3 z-20">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
                </span>
              </span>
            )}
          </div>
          <div className="relative flex flex-row justify-between">
            <input
              className={`
                  ease w-full border-b-2 bg-transparent p-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue
                  ${
                    emailData.subject.length > 0 &&
                    !isEmailDataValid.subject &&
                    'border-b-red-500'
                  }  
              `}
              placeholder="Subject"
              type="text"
              name="subject"
              value={emailData.subject}
              onChange={handleInputChange}
            />
            {emailData.subject.length > 0 && !isEmailDataValid.subject && (
              <span
                className="absolute right-0 flex min-h-32"
                onMouseOver={() => setHoveringDataName('subject')}
                onMouseOut={() => setHoveringDataName(undefined)}>
                <div
                  className={`z-10 ${
                    hoveringDataName === 'subject' ? 'block' : 'hidden'
                  } rounded-sm bg-red-500 px-3 py-2`}>
                  <div className="text-center text-sm">
                    Please enter a subject for the mail (max. 78 chars)
                  </div>
                </div>
                <span className="absolute right-0 flex h-3 w-3 z-20">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
                </span>
              </span>
            )}
          </div>
          <div className="relative flex flex-row justify-between">
            <textarea
              ref={textAreaRef}
              className={`
                  text-lg scrollbar ease w-full resize-none border-b-2 bg-transparent pl-1 outline-none transition-colors duration-700 focus:border-b-picton-blue
                  ${
                    emailData.content.length > 0 &&
                    !isEmailDataValid.content &&
                    'border-b-red-500'
                  }  
              `}
              placeholder="Content"
              name="content"
              value={emailData.content}
              onChange={handleInputChange}
              onInput={handleAutoExpand}
              rows={1}
            />
            {emailData.content.length > 0 && !isEmailDataValid.content && (
              <span
                className="absolute right-0 flex min-h-32"
                onMouseOver={() => setHoveringDataName('content')}
                onMouseOut={() => setHoveringDataName(undefined)}>
                <div
                  className={`z-10 ${
                    hoveringDataName === 'content' ? 'block' : 'hidden'
                  } rounded-sm bg-red-500 px-3 py-2`}>
                  <div className="text-center text-sm">
                    Please enter a content for the mail (max. 2000 chars)
                  </div>
                </div>
                <span className="absolute right-0 flex h-3 w-3 z-20">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
                </span>
              </span>
            )}
          </div>
          <Button
            type={ButtonType.Primary}
            onClick={() => {}}
            className="ml-auto mr-auto w-fit">
            <IoIosSend className="m-auto h-5 w-5 lg:h-6 lg:w-6" />
            <span className="mb-auto mt-auto">Send</span>
          </Button>
        </div>
        <NotificationBanner type={NotificationType.Success} title='Message Sent' message="Your message has been sent. &#10; I'll try to get back to you soon."/>
        <NotificationBanner type={NotificationType.Error} title='Error Occurred' message="Please try again later."/>
        <NotificationBanner type={NotificationType.Warning} message="Make sure to complete all fields before sending the mail."/>
        <NotificationBanner type={NotificationType.Information} message="Thank you for visiting my website."/>
      </HeaderParagraph>
    </div>
  );
};

export default Contact;
