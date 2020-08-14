import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import SectionTitleThree from '../section-title/SectionTitleThree';
import ProductGridTwo from './ProductGridTwo';
import { findIceCreamStores } from '../../../redux/actions/findIceCreamStores';

type TabProductFourProps = {
    category: string;
    spaceBottomClass: string;
    productTabClass: string;
};

type TabProductFourDispatchProps = {
    findIceCreamStoresSortBy: (
        sort_by: string,
        term: string,
        location: string,
        limit: number
    ) => void;
};

const TabProductFour = ({
    spaceBottomClass,
    category,
    productTabClass,
    findIceCreamStoresSortBy,
}: TabProductFourProps & TabProductFourDispatchProps) => {
    const [term, setTerms] = useState('ice cream shops');
    const [location, setLocation] = useState('Alpharetta, GA');
    const [sortBy, setSortBy] = useState('rating');
    const [limit, setLimit] = useState(4);

    const updateTabSelection = (sort_by: string) => {
        setSortBy(sort_by);
        findIceCreamStoresSortBy(sort_by, term, location, limit);
    };

    const updateSearch = () => {
        findIceCreamStoresSortBy(sortBy, term, location, limit);
    };

    return (
        <div className={`product-area ${spaceBottomClass ? spaceBottomClass : ''}`}>
            <div className="container">
                <div className="blog-reply-wrapper mt-50">
                    <h4 className="blog-dec-title">Search Ice Cream Shops</h4>
                    <form
                        className="blog-form pb-90"
                        onSubmit={(event) => {
                            event.preventDefault();
                            updateSearch();
                        }}
                    >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="leave-form">
                                    <input
                                        type="text"
                                        placeholder="Shop Name"
                                        value={term}
                                        onChange={(event) => setTerms(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="leave-form">
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        value={location}
                                        onChange={(event) => setLocation(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className="text-leave">
                                    <input type="submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <SectionTitleThree titleText="Featured Shops" positionClass="text-center" />

                <Tab.Container defaultActiveKey={sortBy}>
                    <Nav
                        variant="pills"
                        className={`product-tab-list pt-35 pb-60 text-center ${
                            productTabClass ? productTabClass : ''
                        }`}
                    >
                        <Nav.Item onClick={() => updateTabSelection('best_match')}>
                            <Nav.Link eventKey="best_match">
                                <h4>Best Match</h4>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => updateTabSelection('rating')}>
                            <Nav.Link eventKey="rating">
                                <h4>Best Rating</h4>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => updateTabSelection('review_count')}>
                            <Nav.Link eventKey="review_count">
                                <h4>Review Count</h4>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="best_match">
                            <div className="row">
                                <ProductGridTwo
                                    category={category}
                                    type="best_match"
                                    limit={8}
                                    spaceBottomClass="mb-25"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="rating">
                            <div className="row">
                                <ProductGridTwo
                                    type="rating"
                                    limit={8}
                                    spaceBottomClass="mb-25"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="review_count">
                            <div className="row">
                                <ProductGridTwo
                                    category={category}
                                    type="review_count"
                                    limit={8}
                                    spaceBottomClass="mb-25"
                                />
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <div className="view-more text-center mt-20 toggle-btn6 col-12">
                    <Link
                        className="loadMore6"
                        onClick={(event) => {
                            event.preventDefault();

                            const newLimit = limit * 2;

                            setLimit(newLimit);
                            findIceCreamStoresSortBy(sortBy, term, location, newLimit);
                        }}
                        to={process.env.PUBLIC_URL}
                    >
                        VIEW MORE PRODUCTS
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        findIceCreamStoresSortBy: (sort_by, term, location, limit) => {
            dispatch(findIceCreamStores({ sort_by, term, location, limit }));
        },
    };
};

export default connect(null, mapDispatchToProps)(TabProductFour);
