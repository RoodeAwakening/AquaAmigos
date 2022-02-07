import React from 'react';
import ContentBlock from '../../molecules/ContentBlock/ContentBlock';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import styles from './RecentNews.module.css';
import NewsArticles from '../../../mocks/NewsArticles';
import ResponsiveBlock from '../../atoms/ResponsiveBlock/ResponsiveBlock';

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
            link={`news/${article.id}`}
          />
        </>
      );
    });
  };


  return (
    <section className={styles.recentNews_container}>
      { NewsArticles.length && (
        <>
          <SectionTitle header="msg_news_header" subHeader="msg_news_sub" />
          <ResponsiveBlock>
            {renderNews()}
          </ResponsiveBlock>
        </>
      )}
    </section>
  );
}

export default RecentNews;
