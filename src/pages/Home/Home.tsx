import React from 'react';
import homePhoto from '../../assets/home_photo.png';
import {FolderIcon, InformationCircleIcon} from '@heroicons/react/24/outline';
import Button from '../../components/Button/Button.tsx';
import ButtonType from '../../common/types/button.type.ts';
import {useNavigate} from 'react-router-dom';
import AnimatedText from '../../components/AnimatedText/AnimatedText.tsx';
import InfiniteAnimatedText from '../../components/AnimatedText/InfiniteAnimatedText.tsx';

const Home = (): React.JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      data-testid="HOME"
      className="mx-8 mt-20 flex flex-col md:mx-32 lg:mx-12 lg:flex-row lg:justify-between xl:mx-32 2xl:mx-40">
      <div className="mb-auto mt-auto flex h-64 flex-col justify-between font-lato 2xl:h-72">
        <span className="text-5xl tracking-wider text-white 2xl:text-6xl">
          Hi,
          <p className="mt-2">I'm Antonio Fălcescu</p>
        </span>
        <span className="text-taupe-gray">
          <AnimatedText
            className="text-xl font-medium tracking-widest sm:text-2xl 2xl:text-3xl"
            text="Software Developer"
          />
          <InfiniteAnimatedText
            className="text-xl font-medium tracking-wider sm:text-2xl 2xl:text-3xl"
            texts={[
              ' - Full Stack Web',
              ' - Native Android',
              ' - Native iOS',
              ' - Cross Platform Mobile',
            ]}
          />
        </span>
        <div className="mt-12 flex gap-6">
          <Button
            onClick={() => {
              navigate('/projects');
            }}
            type={ButtonType.Primary}
            text="My Work"
            icon={<FolderIcon className="m-auto h-5 w-5 lg:h-6 lg:w-6" />}
          />
          <Button
            onClick={() => {
              navigate('/about');
            }}
            type={ButtonType.Link}
            text="Learn More"
            icon={
              <InformationCircleIcon className="m-auto h-5 w-5 lg:h-6 lg:w-6" />
            }
          />
        </div>
      </div>
      <img
        src={homePhoto}
        alt=""
        className="mt-24 w-full text-center lg:mt-0 lg:w-1/3"
      />
    </div>
  );
};

export default Home;
