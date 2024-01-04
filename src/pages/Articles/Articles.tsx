import React from 'react';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';

const Articles = (): React.JSX.Element => {
  return (
    <div
      data-testid="ARTICLES"
      className="ml-auto mr-auto mt-8 flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
      <HeaderParagraph title={'Articles'}>
        <p className="whitespace-pre-wrap text-justify font-light">
          &emsp;This section is a placeholder for now as I want to start writing
          articles in the near future.
        </p>
      </HeaderParagraph>
    </div>
  );
};

export default Articles;
