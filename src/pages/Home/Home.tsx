import React from 'react';
import homePhoto from '../../assets/home_photo.png';
import Button from '../../components/Button/Button.tsx';
import ButtonType from '../../common/types/button.type.ts';
import {useNavigate} from 'react-router-dom';
import AnimatedText from '../../components/AnimatedText/AnimatedText.tsx';
import InfiniteAnimatedText from '../../components/AnimatedText/InfiniteAnimatedText.tsx';
import {FaRegFolderOpen} from 'react-icons/fa6';
import {IoMdInformationCircleOutline} from 'react-icons/io';
import AnimatedLayout from '../../layouts/AnimatedLayout/AnimatedLayout.tsx';

const Home = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <AnimatedLayout>
      <div
        data-testid={Home.name}
        className="lg:mt-16 mx-6 flex flex-col font-lato md:mx-20 lg:mx-12 lg:flex-row lg:justify-between xl:mx-32 2xl:mx-40">
        <div className="mb-auto mt-auto flex h-64 flex-col justify-between 2xl:h-72">
          <span className="text-5xl tracking-wider text-white 2xl:text-6xl">
            Hi,
            <p className="mt-2">I'm Antonio Falcescu</p>
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
              variant={ButtonType.Primary}>
              <FaRegFolderOpen className="m-auto h-5 w-5 lg:h-6 lg:w-6" />
              <span className="mb-auto mt-auto">My Work</span>
            </Button>
            <Button
              onClick={() => {
                navigate('/about');
              }}
              variant={ButtonType.Link}>
              <IoMdInformationCircleOutline className="m-auto h-5 w-5 lg:h-6 lg:w-6" />
              <span className="mb-auto mt-auto">Learn More</span>
            </Button>
          </div>
        </div>
        <img
          src={homePhoto}
          alt=""
          className="mt-24 w-full text-center lg:mt-0 lg:w-1/3 md:w-4/5 lg:ml-0 lg:mr-0 ml-auto mr-auto"
        />
      </div>
    </AnimatedLayout>
  );
};

export default Home;
