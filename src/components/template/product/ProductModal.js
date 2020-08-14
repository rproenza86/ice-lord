import PropTypes from 'prop-types';
import React, { Fragment, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import Rating from './ProductRating';

function ProductModal(props) {
    const { product } = props;

    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    const [selectedProductColor, setSelectedProductColor] = useState(
        product.variation ? product.variation[0].color : ''
    );
    const [selectedProductSize, setSelectedProductSize] = useState(
        product.variation ? product.variation[0].size[0].name : ''
    );

    useEffect(() => {
        if (
            gallerySwiper !== null &&
            gallerySwiper.controller &&
            thumbnailSwiper !== null &&
            thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, [gallerySwiper, thumbnailSwiper]);

    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        spaceBetween: 10,
        loopedSlides: 4,
        loop: true,
    };

    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 10,
        slidesPerView: 4,
        loopedSlides: 4,
        touchRatio: 0.2,
        freeMode: true,
        loop: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        renderPrevButton: () => (
            <button className="swiper-button-prev ht-swiper-button-nav">
                <i className="pe-7s-angle-left" />
            </button>
        ),
        renderNextButton: () => (
            <button className="swiper-button-next ht-swiper-button-nav">
                <i className="pe-7s-angle-right" />
            </button>
        ),
    };

    return (
        <Fragment>
            <Modal
                show={props.show}
                onHide={props.onHide}
                className="product-quickview-modal-wrapper"
            >
                <Modal.Header closeButton></Modal.Header>

                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="product-large-image-wrapper">
                                <Swiper {...gallerySwiperParams}>
                                    {product.photos &&
                                        product.photos.map((single, key) => {
                                            return (
                                                <div key={key}>
                                                    <div className="single-image">
                                                        <img
                                                            src={process.env.PUBLIC_URL + single}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </Swiper>
                            </div>
                            <div className="product-small-image-wrapper mt-15">
                                <Swiper {...thumbnailSwiperParams}>
                                    {product.photos &&
                                        product.photos.map((single, key) => {
                                            return (
                                                <div key={key}>
                                                    <div className="single-image">
                                                        <img
                                                            src={process.env.PUBLIC_URL + single}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="product-details-content quickview-content">
                                <h2>{product.name}</h2>
                                <div className="product-details-price">
                                    <span>Review Count - {product.review_count}</span>
                                </div>
                                {product.rating && product.rating > 0 ? (
                                    <div className="pro-details-rating-wrap">
                                        <div className="pro-details-rating">
                                            <Rating ratingValue={product.rating} />
                                        </div>
                                    </div>
                                ) : (
                                    ''
                                )}
                                <div className="pro-details-list">
                                    <h3>Location</h3>
                                    {product.location &&
                                        product.location.display_address &&
                                        product.location.display_address.map((value, key) => {
                                            return (
                                                <p
                                                    className={'pro-details-color-content--single'}
                                                    key={key}
                                                >
                                                    {value}
                                                </p>
                                            );
                                        })}
                                </div>

                                {product.variation ? (
                                    <div className="pro-details-size-color">
                                        <div className="pro-details-color-wrap">
                                            <span>Color</span>
                                            <div className="pro-details-color-content">
                                                {product.variation.map((single, key) => {
                                                    return (
                                                        <label
                                                            className={`pro-details-color-content--single ${single.color}`}
                                                            key={key}
                                                        >
                                                            <input
                                                                type="radio"
                                                                value={single.color}
                                                                name="product-color"
                                                                checked={
                                                                    single.color ===
                                                                    selectedProductColor
                                                                        ? 'checked'
                                                                        : ''
                                                                }
                                                                onChange={() => {
                                                                    setSelectedProductColor(
                                                                        single.color
                                                                    );
                                                                    setSelectedProductSize(
                                                                        single.size[0].name
                                                                    );
                                                                }}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="pro-details-size">
                                            <span>Size</span>
                                            <div className="pro-details-size-content">
                                                {product.variation &&
                                                    product.variation.map((single) => {
                                                        return single.color === selectedProductColor
                                                            ? single.size.map((singleSize, key) => {
                                                                  return (
                                                                      <label
                                                                          className={`pro-details-size-content--single`}
                                                                          key={key}
                                                                      >
                                                                          <input
                                                                              type="radio"
                                                                              value={
                                                                                  singleSize.name
                                                                              }
                                                                              checked={
                                                                                  singleSize.name ===
                                                                                  selectedProductSize
                                                                                      ? 'checked'
                                                                                      : ''
                                                                              }
                                                                              onChange={() => {
                                                                                  setSelectedProductSize(
                                                                                      singleSize.name
                                                                                  );
                                                                              }}
                                                                          />
                                                                          <span className="size-name">
                                                                              {singleSize.name}
                                                                          </span>
                                                                      </label>
                                                                  );
                                                              })
                                                            : '';
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
}

ProductModal.propTypes = {
    addtoast: PropTypes.func,
    addtocart: PropTypes.func,
    addtocompare: PropTypes.func,
    addtowishlist: PropTypes.func,
    cartitems: PropTypes.array,
    compareitem: PropTypes.object,
    currency: PropTypes.object,
    discountedprice: PropTypes.number,
    finaldiscountedprice: PropTypes.number,
    finalproductprice: PropTypes.number,
    onHide: PropTypes.func,
    product: PropTypes.object,
    show: PropTypes.bool,
    wishlistitem: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        cartitems: state.cartData,
    };
};

export default connect(mapStateToProps)(ProductModal);
