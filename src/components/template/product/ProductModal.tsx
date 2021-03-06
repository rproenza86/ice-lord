import React, { Fragment, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { Modal } from 'react-bootstrap';

import Rating from './ProductRating';
import { Shop } from '../../../redux/reducers/shops/types';

interface IBaseSwiper {
    controller: { control: any };
}
interface IGallerySwiper extends IBaseSwiper {}
interface IThumbnailSwiper extends IBaseSwiper {}

type ProductModalProps = { product: Shop; show: boolean; onHide: () => void };

function ProductModal({ product, show, onHide }: ProductModalProps) {
    const [gallerySwiper, getGallerySwiper] = useState<IGallerySwiper | null>(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState<IThumbnailSwiper | null>(null);

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
        loopedSlides: 10,
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
            <Modal show={show} onHide={onHide} className="product-quickview-modal-wrapper">
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
                                    {product.location && product.location.display_address && (
                                        <address>
                                            {product.location.display_address.map((value, key) => {
                                                return (
                                                    <p
                                                        className={
                                                            'pro-details-color-content--single'
                                                        }
                                                        key={key}
                                                    >
                                                        {value}
                                                    </p>
                                                );
                                            })}
                                        </address>
                                    )}

                                    <h4>Phone</h4>
                                    <a href={`tel:${product.phone}`}>{product.display_phone}</a>
                                </div>

                                <div className="pro-details-list">
                                    <h3>Reviews</h3>
                                    {product.reviews &&
                                        product.reviews.map((review, key) => {
                                            return (
                                                <blockquote cite="" key={key}>
                                                    <p>"{review.text}"</p>
                                                    <footer>
                                                        — {review.user.name},{' '}
                                                        <strong>
                                                            <cite>Rating : {review.rating}</cite>
                                                        </strong>
                                                    </footer>
                                                </blockquote>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
}

export default ProductModal;
