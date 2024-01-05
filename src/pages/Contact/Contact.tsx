import React, {useRef} from 'react';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import {FaLinkedin} from 'react-icons/fa';
import Social from '../../components/Social/Social.tsx';
import Button from '../../components/Button/Button.tsx';
import ButtonType from '../../common/types/button.type.ts';
import {IoIosSend} from 'react-icons/io';

//TODO: style invalid input, style valid input, add captcha after pressing send, add tests for input, add mail library
const Contact = (): React.JSX.Element => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
          <input
            className="ease border-b-2 bg-transparent p-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue"
            placeholder="Your email address"
            type="text"
          />
          <input
            className="ease border-b-2 bg-transparent p-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue"
            placeholder="Subject"
            type="text"
          />
          <textarea
            ref={textAreaRef}
            className="text-md scrollbar ease resize-none border-b-2 bg-transparent p-1 outline-none transition-colors duration-700 focus:border-b-picton-blue"
            placeholder="Content"
            rows={1}
            onInput={handleAutoExpand}
          />
          <Button
            type={ButtonType.Primary}
            onClick={() => {}}
            className="ml-auto mr-auto w-fit">
            <IoIosSend className="m-auto h-5 w-5 lg:h-6 lg:w-6" />
            <span className="mb-auto mt-auto">Send</span>
          </Button>
        </div>
      </HeaderParagraph>
    </div>
  );
};

export default Contact;
