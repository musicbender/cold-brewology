import React from 'react';
import './shop-item.scss';

export default (props) => {
  const { item, index } = props;
  const { ListPrice, Title } = item.ItemAttributes;
  const image = item.MediumImage;

  return (
     <div className={`shop-item-container ${index}`}>
       <a className="title" href={item.DetailPageURL}>{Title}</a>
       <img src={image.URL} height={image.Height} width={image.Width} />
       <p className="price">{ListPrice.FormattedPrice}</p>
       <a className="buy-btn" href={item.DetailPageUrl}>Buy Now</a>
     </div>
  );
}
