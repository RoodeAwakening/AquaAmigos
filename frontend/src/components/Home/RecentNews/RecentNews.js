import React from 'react';
import ContentBlock from '../../common/ContentBlock/ContentBlock';
import ContentHeader from '../../common/ContentHeader/ContentHeader';
import styles from './RecentNews.module.css';
import NewsArticles from '../../../mocks/NewsArticles';

function RecentNews() {
  const articles = NewsArticles;
  const renderNews = () => {
    return articles.slice(0, 3).map((article) => {
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
        <div>
          <ContentHeader header="msg_news_header" subHeader="msg_news_sub" />
          <div className={styles.recentNews__articles}>
            <div className={styles.about_us__members_alignment}>
              {renderNews()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentNews;
