import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

type FooterProps = {
    backgroundColorClass: string;
    copyrightColorClass: string;
    backgroundImage?: string;
    footerTopBackgroundColorClass: string;
    footerTopSpaceBottomClass: string;
    footerTopSpaceTopClass: string;
    spaceLeftClass: string;
    spaceRightClass: string;
};

const Footer = ({
    backgroundColorClass,
    copyrightColorClass,
    spaceLeftClass,
    spaceRightClass,
    footerTopBackgroundColorClass,
    footerTopSpaceTopClass,
    footerTopSpaceBottomClass,
    backgroundImage,
}: FooterProps) => {
    const [scroll, setScroll] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        setTop(100);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    return (
        <footer
            className={`footer-area ${backgroundColorClass ? backgroundColorClass : ''} ${
                spaceLeftClass ? spaceLeftClass : ''
            } ${spaceRightClass ? spaceRightClass : ''} ${backgroundImage ? 'bg-img' : ''}`}
            style={{
                backgroundImage: ` ${
                    backgroundImage ? `url(${process.env.PUBLIC_URL + backgroundImage})` : `url()`
                }`,
            }}
        >
            <div
                className={`footer-top text-center ${
                    footerTopBackgroundColorClass ? footerTopBackgroundColorClass : ''
                } ${footerTopSpaceTopClass ? footerTopSpaceTopClass : ''}  ${
                    footerTopSpaceBottomClass ? footerTopSpaceBottomClass : ''
                }`}
            >
                <div className="container">
                    <div className="footer-logo">
                        <Link to={process.env.PUBLIC_URL}>
                            <img
                                alt=""
                                src={
                                    process.env.PUBLIC_URL +
                                    `${'/assets/img/logo/ice-lord-log.png'}`
                                }
                            />
                        </Link>
                    </div>

                    <blockquote cite="">
                        <p>
                            "One of the very nicest things about life is the way we must regularly
                            stop whatever it is we are doing and devote our attention to eating."
                        </p>
                        <footer>— Luciano Pavarotti</footer>
                    </blockquote>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <div className="container">
                    <div
                        className={`copyright-2 ${copyrightColorClass ? copyrightColorClass : ''}`}
                    >
                        <p>
                            © 2020{' '}
                            <a
                                href="https://raulproenza.page/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                ICE Lord Reign
                            </a>
                            . All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
            <button
                className={`scroll-top ${scroll > top ? 'show' : ''}`}
                onClick={() => scrollToTop()}
            >
                <i className="fa fa-angle-double-up"></i>
            </button>
        </footer>
    );
};

export default Footer;
