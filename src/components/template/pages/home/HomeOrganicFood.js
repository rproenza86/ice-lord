import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Layout from '../../layouts/Layout';
import HeroSliderFive from '../../wrappers/HeroSliderFive';
import FeatureIconFour from '../../wrappers/FeatureIconFour';

import TabProductFour from '../../wrappers/TabProductFour';

const HomeOrganicFood = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>ICE Lord | Best Ice Cream Shop Finder</title>
                <meta
                    name="description"
                    content="Organic food home of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <Layout
                headerTop="visible"
                headerContainerClass="container-fluid"
                headerBorderStyle="fluid-border"
                headerPaddingClass="header-padding-2"
            >
                {/* hero slider */}
                <HeroSliderFive spaceLeftClass="ml-70" spaceRightClass="mr-70" />
                {/* feature icon */}
                <FeatureIconFour
                    spaceTopClass="pt-10"
                    spaceBottomClass="pb-90"
                    containerClass="container-fluid"
                    gutterClass="padding-10-row-col"
                />
                {/* tab product */}
                <TabProductFour
                    spaceBottomClass="pb-100"
                    category="rating"
                    productTabClass="product-tab-fruits"
                />
            </Layout>
        </Fragment>
    );
};

export default HomeOrganicFood;
