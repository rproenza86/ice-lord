import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Shop } from '../../../redux/reducers/shops/types';
import ProductGridSingleTwo from '../product/ProductGridSingleTwo';
import { RootState } from '../../../redux/reducers/rootReducer';

type ProductGridTwoProps = {
    products: Shop[];
    sliderClassName: string;
    spaceBottomClass: string;
    colorClass: string;
    titlePriceClass: string;
    wishlistItems: any[];
};

const ProductGridTwo = ({
    products,
    sliderClassName,
    spaceBottomClass,
    colorClass,
    titlePriceClass,
}: ProductGridTwoProps) => {
    return (
        <Fragment>
            {products.map((product) => {
                return (
                    <ProductGridSingleTwo
                        sliderClassName={sliderClassName}
                        spaceBottomClass={spaceBottomClass}
                        colorClass={colorClass}
                        product={product}
                        key={product.id}
                        titlePriceClass={titlePriceClass}
                    />
                );
            })}
        </Fragment>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        products: state.shops,
    };
};

export default connect(mapStateToProps, null)(ProductGridTwo);
