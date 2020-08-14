import React, { Fragment } from 'react';
import Footer from '../wrappers/Footer';

type LayoutProps = {
    children: React.ReactNode;
    headerBorderStyle: string;
    headerContainerClass: string;
    headerPaddingClass: string;
    headerTop: string;
};

const Layout = ({ children }: LayoutProps) => {
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

export default Layout;
