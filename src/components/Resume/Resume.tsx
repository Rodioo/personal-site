import React from 'react';
import resume from '../../assets/Resume.pdf';

const Resume = (): React.JSX.Element => {
  return (
    <div className='h-screen w-auto'>
      <iframe src={`${resume}#view=fitH`} className='h-full w-full sm:border-red-500 md:w-4/5 lg:w-2/3 xl:w-1/2 2xl:w-2/5 ml-auto mr-auto' />
    </div>
  );
};

export default Resume;
