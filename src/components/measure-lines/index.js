import React from 'react';
import './measure-lines.scss';

export default (props) => {
  const buildMeasureLines = () => {
    const lineAmount = 1000;
    let lineArray = [];

    for(let i = lineAmount; i >= 0; i -= 100) {
      lineArray.push(<li className="line" key={`line${i}`}>{i}mL</li>);
    }

    return lineArray;
  }

  return (
     <div className="measure-lines-container">
       <ul className="measure-lines">
        {buildMeasureLines()}
       </ul>
     </div>
  );
}
