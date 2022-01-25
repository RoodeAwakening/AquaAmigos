import React from 'react';
import ContentBlock from '../../common/ContentBlock/ContentBlock';
import ContentHeader from '../../common/ContentHeader/ContentHeader';
import styles from './RecentNews.module.css';
import NewsArticles from '../../../mocks/NewsArticles';
import ResponsiveBlock from '../../common/ResponsiveBlock/ResponsiveBlock';

function RecentNews() {
  const articles = NewsArticles;
  const renderNews = () => {
    return articles.slice(0, 3).map((article) => {
      return (
        <>
          <ContentBlock
            title={article.title}
            description={article.description}
            articleImage={article.articleImage}
            writtenBy={article.writtenBy}
          />
        </>
      );
    });
  };


  return (
    <section className={styles.recentNews_container}>
      { NewsArticles.length && (
        <>
          <ContentHeader header="msg_news_header" subHeader="msg_news_sub" />
          <ResponsiveBlock>
            {renderNews()}
          </ResponsiveBlock>
        </>
      )}
    </section>
  );
}

export default RecentNews;
