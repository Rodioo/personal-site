import React from 'react';
import AnimatedLayout from '../../layouts/AnimatedLayout/AnimatedLayout.tsx';

const Loading = (): React.JSX.Element => {
  return (
    <AnimatedLayout key={Loading.name}>
      <div className="flex flex-1 items-center justify-center">
        <div className="animate-spin h-12 w-12 rounded-full border-t-2" />
        <p className="ml-4 text-white animate-pulse">Loading...</p>
      </div>
    </AnimatedLayout>
  );
};

export default Loading;