import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Footer from '../wrappers/Footer';

const Layout = ({
    children,
    headerContainerClass,
    headerTop,
    headerBorderStyle,
    headerPaddingClass,
}) => {
    return (
        <Fragment>
            {children}
            <Footer
                backgroundColorClass="footer-white"
                spaceLeftClass="ml-70"
                spaceRightClass="mr-70"
                footerTopBackgroundColorClass="bg-gray-2"
                footerTopSpaceTopClass="pt-80"
                footerTopSpaceBottomClass="pb-60"
                copyrightColorClass="copyright-gray"
                footerLogo="/assets/img/logo/logo.png"
            />
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
    headerBorderStyle: PropTypes.string,
    headerContainerClass: PropTypes.string,
    headerPaddingClass: PropTypes.string,
    headerTop: PropTypes.string,
};

export default Layout;
