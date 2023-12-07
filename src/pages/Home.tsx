import React from 'react';
import homePhoto from '../assets/home_photo.png';
import {DocumentIcon, InformationCircleIcon} from '@heroicons/react/24/outline';
import Button from '../components/Button/Button.tsx';
import ButtonType from '../common/types/button.type.ts';

//TODO: add button for primary CTA and useNavigate for redirect
function Home() {
  return (
    <div
      data-testid="HOME"
      className="mx-8 mt-20 flex flex-col md:mx-32 lg:mx-12 lg:flex-row lg:justify-between xl:mx-32 2xl:mx-40">
      <div className="mb-auto mt-auto flex flex-col font-lato">
        <span className="text-5xl tracking-wider text-white 2xl:text-6xl">
          Hi,
        </span>
        <span className="mt-2 text-5xl tracking-wider text-white 2xl:text-6xl">
          I'm Antonio Fălcescu
        </span>
        <span className="mt-4 text-3xl font-medium tracking-widest text-taupe-gray 2xl:text-4xl">
          Software Developer
        </span>
        <div className="mt-12 flex gap-6">
          <Button
            type={ButtonType.Primary}
            text="Learn More"
            icon={<InformationCircleIcon className="m-auto h-5 w-5 lg:h-6 lg:w-6" />}
          />
          <Button
            type={ButtonType.Link}
            text="Resume"
            icon={<DocumentIcon className="m-auto h-5 w-5 lg:h-6 lg:w-6" />}
          />
        </div>
      </div>
      <img
        src={homePhoto}
        alt=""
        className="mt-24 w-full text-center lg:mt-0 lg:w-2/5"
      />
    </div>
  );
};

export default Home;
