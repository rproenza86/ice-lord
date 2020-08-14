import React from 'react';

import featureIconData from '../../../data/feature-icon-four.json';
import FeatureIconFourSingle from '../feature-icon/FeatureIconFourSingle';

type FeatureIconFour = {
    bgImg?: string;
    containerClass: string;
    gutterClass: string;
    responsiveClass?: string;
    spaceBottomClass: string;
    spaceTopClass: string;
};

const FeatureIconFour = ({
    spaceTopClass,
    spaceBottomClass,
    containerClass,
    gutterClass,
    responsiveClass,
    bgImg,
}: FeatureIconFour) => {
    return (
        <div
            className={`support-area hm9-section-padding ${spaceTopClass ? spaceTopClass : ''} ${
                spaceBottomClass ? spaceBottomClass : ''
            } ${responsiveClass ? responsiveClass : ''}`}
            style={bgImg ? { backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` } : {}}
        >
            <div
                className={`${containerClass ? containerClass : ''} ${
                    gutterClass ? gutterClass : ''
                }`}
            >
                <div className="row">
                    {featureIconData &&
                        featureIconData.map((single, key) => {
                            return (
                                <FeatureIconFourSingle
                                    data={single}
                                    spaceBottomClass="mb-10"
                                    key={key}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default FeatureIconFour;
