import React from 'react';
import './ShopItemFunc.css';

export default function ShopItemFunc(props) {
  const { item } = props;
  return (
    <div>
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div class="description">
        {item.descriptionFull}  </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{`${item.currency}${item.price}`}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}
