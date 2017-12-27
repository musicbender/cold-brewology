import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchShop, fetchShopSuccess, fetchShopFailure, resetShop } from '../../actions/shop';
import { APAC, API } from '../../constants/config';
import ShopItem from '../../components/shop-item';

class Shop extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchShop, shopType } = this.props;
    this.props.fetchShop(shopType, 0);
  }

  componentWillUnmount() {
    this.props.resetShop();
  }

  render() {
    const { shopType, items, loading, error } = this.props;

    const renderShop = (
      <div className="shop-container" key={Math.random()}>
        {
          items &&
          items.map((item, i) => {
            return <ShopItem item={item} index={i} key={Math.random()}/>;
          })
        }
      </div>
    );

    return (
      <div className={`shop-${shopType}`}>
        <h2>{shopType}</h2>
        { loading && <p>Loading...</p> }
        { error && error }
        { renderShop }
      </div>
    );
  }
}

const mapStateToProps = ({ shop }) => {
  const { items, loading, error } = shop.shopList;
  return {
    items,
    loading,
    error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShop: (type, page) => {
      dispatch(fetchShop(type, page))
        .then((result) => {
          const { payload } = result;
          if (payload && payload.status !== 200) {
            dispatch(fetchShopFailure(payload.data.message));
          } else {
            dispatch(fetchShopSuccess(payload.data.data));
          }
        })
    },
    resetShop: () => {
      dispatch(resetShop());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));
