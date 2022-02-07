import React from 'react';
import PageImageHeader from '../../molecules/PageImageHeader/PageImageHeader';
import news from '../../../mocks/NewsArticles';

function News() {
  return (
    <div>
      <PageImageHeader
        imgSrc={news[news.length - 1].articleImage}
        title="msg_news"
        subTitle="msg_news_page_header"
      />
    </div>
  );
}

export default News;
