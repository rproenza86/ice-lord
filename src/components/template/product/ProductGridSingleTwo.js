import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ProductModal from './ProductModal';

const ProductGridSingleTwo = ({
    product,
    addToCart,
    addToWishlist,
    addToCompare,
    cartItem,
    wishlistItem,
    compareItem,
    sliderClassName,
    spaceBottomClass,
    colorClass,
    titlePriceClass,
}) => {
    const [modalShow, setModalShow] = useState(false);
    const { addToast } = useToasts();

    const finalProductPrice = 0;
    const finalDiscountedPrice = 0;

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
                        {product.discount || product.new ? (
                            <div className="product-img-badges">
                                {product.discount ? (
                                    <span className="pink">-{product.discount}%</span>
                                ) : (
                                    ''
                                )}
                                {product.new ? <span className="purple">New</span> : ''}
                            </div>
                        ) : (
                            ''
                        )}

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
                                className={wishlistItem !== undefined ? 'active' : ''}
                                disabled={wishlistItem !== undefined}
                                title={
                                    wishlistItem !== undefined
                                        ? 'Added to wishlist'
                                        : 'Add to wishlist'
                                }
                                onClick={() => addToWishlist(product, addToast)}
                            >
                                <i className="fa fa-heart-o" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* product modal */}
            <ProductModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                product={product}
                currency={{}}
                finalproductprice={finalProductPrice}
                finaldiscountedprice={finalDiscountedPrice}
                cartitem={cartItem}
                wishlistitem={wishlistItem}
                compareitem={compareItem}
                addtocart={addToCart}
                addtowishlist={addToWishlist}
                addtocompare={addToCompare}
                addtoast={addToast}
            />
        </Fragment>
    );
};

ProductGridSingleTwo.propTypes = {
    addToCart: PropTypes.func,
    addToCompare: PropTypes.func,
    addToWishlist: PropTypes.func,
    cartItem: PropTypes.object,
    compareItem: PropTypes.object,
    currency: PropTypes.object,
    product: PropTypes.object,
    sliderClassName: PropTypes.string,
    spaceBottomClass: PropTypes.string,
    colorClass: PropTypes.string,
    titlePriceClass: PropTypes.string,
    wishlistItem: PropTypes.object,
};

export default ProductGridSingleTwo;
