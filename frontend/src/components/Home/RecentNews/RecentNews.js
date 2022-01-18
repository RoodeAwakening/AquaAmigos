import React from 'react';
import ContentBlock from '../../common/ContentBlock/ContentBlock';
import styles from './RecentNews.module.css';
import NewsArticles from '../../../mocks/NewsArticles';

function RecentNews() {
  const articles = NewsArticles;
  const renderNews = () => {
    return articles.slice(0, 3).map((article) => {
      console.log(article);
      return (
        <div className={styles.recentNews_article__container} key={article.id}>
          <ContentBlock
            title={article.title}
            description={article.description}
            articleImage={article.articleImage}
            writtenBy={article.writtenBy}
          />
        </div>
      );
    });
  };


  return (
    <div className={styles.recentNews_container}>
      { NewsArticles.length && (
        <>
          {renderNews()}
        </>
      )}
    </div>
  );
}

export default RecentNews;
