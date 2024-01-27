import React from 'react';
import Article from '../../common/types/article/article.type.ts';

type Props = {
  article: Article;
};

const ArticleCard = ({article}: Props): React.JSX.Element => {
  return (
    <div className="flex flex-row gap-2 rounded-xl border border-taupe-gray shadow-md">
      <img
        src={article.coverImagePath}
        alt={'Article cover'}
        className="w-1/3 rounded-l-xl"
        height={300}
        width={500}
        style={{
          aspectRatio: '500/300',
          objectFit: 'cover',
        }}
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-wider text-baby-blue">
          {article.topic}
        </p>
        <a
          className="font-medium hover:underline"
          href={article.link}
          target={'_blank'}>
          {article.title}
        </a>
        <p className="text-sm font-light opacity-50">{article.description}</p>
        <p className="text-sm font-light opacity-50">
          Published on {article.createdAt.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
