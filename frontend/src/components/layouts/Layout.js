import React from 'react';


function Layout({ children }) {
  return (
    <div className="layout__container">

      <div className="layout__container__nav">
        <h1>nav will be here</h1>
      </div>

      <div className="layout__container__content">
        {children}
      </div>

      <div className="layout__container__sidebar">
        <h1>sidebar here </h1>
      </div>


    </div>
  );
}

export default Layout;
