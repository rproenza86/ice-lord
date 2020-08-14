import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ProductGridSingleTwo from '../product/ProductGridSingleTwo';


const ProductGridTwo = ({
    products,
    currency,
    sliderClassName,
    spaceBottomClass,
    colorClass,
    titlePriceClass,
}) => {
    return (
        <Fragment>
            {products.map((product) => {
                return (
                    <ProductGridSingleTwo
                        sliderClassName={sliderClassName}
                        spaceBottomClass={spaceBottomClass}
                        colorClass={colorClass}
                        product={product}
                        currency={currency}
                        key={product.id}
                        titlePriceClass={titlePriceClass}
                    />
                );
            })}
        </Fragment>
    );
};

ProductGridTwo.propTypes = {
    currency: PropTypes.object,
    products: PropTypes.array,
    sliderClassName: PropTypes.string,
    spaceBottomClass: PropTypes.string,
    colorClass: PropTypes.string,
    titlePriceClass: PropTypes.string,
    wishlistItems: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.shops,
        currency: state.currencyData,
        cartItems: state.cartData,
        wishlistItems: state.wishlistData,
        compareItems: state.compareData,
    };
};

export default connect(mapStateToProps, null)(ProductGridTwo);
