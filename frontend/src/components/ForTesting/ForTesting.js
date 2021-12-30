/* eslint-disable no-unused-vars */
import i18next from 'i18next';
import React from 'react';


function ForTesting() {
  // i18next setup
  //  disable eslint
  //

  return (
    <div>
      <h2> this is great </h2>
      <div>
        <h1>{ i18next.t('order_cancelled_product_type') }</h1>
      </div>
    </div>
  );
}

export default ForTesting;
