import React from 'react';
import './home-cta-bar.scss';

export default (props) => {
  const topBar = (
    <div className="cta-bar-top">
      <div className="cell-1"></div>
      <div className="cell-2"></div>
      <div className="cell-3"></div>
    </div>
  );

  const middle = (
    <div className="cta-middle">
      <div className="cell-1"></div>
      <div className="cell-2"></div>
    </div>
  );

  const bottomBar = (
    <div className="cta-bar-bottom">

    </div>
  );

  return (
     <section className="home-cta-section">
       { topBar }
       { middle }
       { bottomBar }
     </section>
  );
}
