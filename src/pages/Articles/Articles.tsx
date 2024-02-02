import React, {useEffect, useState} from 'react';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import AnimatedLayout from '../../layouts/AnimatedLayout/AnimatedLayout.tsx';
import axios from '../../../axios.config.ts';
import Article from '../../common/types/article/article.type.ts';
import ArticleCard from '../../components/ArticleCard/ArticleCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';

const Articles = (): React.JSX.Element => {
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    const URL = `/articles`;
    axios
      .get<Article[]>(URL)
      .then((response) => {
        if (response.status === 200) {
          const articlesAux: Article[] = [];
          for (const article of response.data) {
            article.coverImagePath =
              import.meta.env.VITE_APP_SERVER_STATIC_BASE_URL +
              '/' +
              article.coverImagePath;
            article.createdAt = new Date(article.createdAt);

            articlesAux.push(article);
          }
          setArticles(articlesAux);
        }
      })
      .catch((exception) => {
        if (exception.response?.status === 404) {
          console.log(exception.response.data);
        } else {
          console.log(exception);
        }
      });
  }, []);

  return articles ? (
    <AnimatedLayout key={Articles.name}>
      <div
        data-testid={Articles.name}
        className="ml-auto mr-auto flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
        <HeaderParagraph title={'Articles'}>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </HeaderParagraph>
      </div>
    </AnimatedLayout>
  ) : (
    <Loading />
  );
};

export default Articles;
