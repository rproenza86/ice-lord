import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { Shop } from '../../../redux/reducers/shops/types';

import ProductModal from './ProductModal';

type ProductGridSingleTwoProps = {
    product: Shop;
    sliderClassName: string;
    spaceBottomClass: string;
    colorClass: string;
    titlePriceClass: string;
};

const ProductGridSingleTwo = ({
    product,
    sliderClassName,
    spaceBottomClass,
    colorClass,
    titlePriceClass,
}: ProductGridSingleTwoProps) => {
    const [modalShow, setModalShow] = useState(false);

    const imgUrl = product.image_url ? product.image_url : '';
    const hoverImgUrl = product.photos && product.photos.length ? product.photos[1] : '';

    return (
        <Fragment>
            <div
                className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${
                    sliderClassName ? sliderClassName : ''
                }`}
            >
                <div
                    className={`product-wrap-2 ${spaceBottomClass ? spaceBottomClass : ''} ${
                        colorClass ? colorClass : ''
                    } `}
                >
                    <div className="product-img">
                        <Link
                            to={process.env.PUBLIC_URL + '/product/' + product.id}
                            onClick={(event) => {
                                setModalShow(true);
                                event.preventDefault();
                            }}
                        >
                            <img className="default-img" src={imgUrl} alt="" />
                            {hoverImgUrl ? (
                                <img className="hover-img" src={hoverImgUrl} alt="" />
                            ) : (
                                ''
                            )}
                        </Link>

                        <div className="product-action-2">
                            <button onClick={() => setModalShow(true)} title="Quick View">
                                <i className="fa fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div className="product-content-2">
                        <div
                            className={`title-price-wrap-2 ${
                                titlePriceClass ? titlePriceClass : ''
                            }`}
                        >
                            <h3>
                                <a href={product.url}>{product.name}</a>
                            </h3>

                            {product.categories && product.categories.length && (
                                <div className="price-2">
                                    <span>Category</span>{' '}
                                    <span className="new">{product.categories[0].title}</span>
                                </div>
                            )}

                            <div className="price-2">
                                {product.rating === 5 ? (
                                    <strong>
                                        {' '}
                                        <span>Rating</span>{' '}
                                        <span className="new">{product.rating}</span>
                                    </strong>
                                ) : (
                                    <>
                                        <span>Rating</span>
                                        <span className="new">{product.rating}</span>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="pro-wishlist-2">
                            <button
                                className={product.name.length % 2 ? 'active' : ''}
                                title={'Add to wishlist'}
                            >
                                <i className="fa fa-heart-o" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* product modal */}
            <ProductModal show={modalShow} onHide={() => setModalShow(false)} product={product} />
        </Fragment>
    );
};

export default ProductGridSingleTwo;
