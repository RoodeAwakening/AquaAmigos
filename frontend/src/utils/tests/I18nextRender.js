/* eslint-disable no-unused-vars */
import i18next from 'i18next';
import React from 'react';


function I18nextRender() {
  // i18next setup
  //  disable eslint
  //

  return (
    <div>
      <h2> this is great </h2>
      <div>
        <h1>{ i18next.t('this_is_a_test_phrase') }</h1>
      </div>
    </div>
  );
}

export default I18nextRender;
