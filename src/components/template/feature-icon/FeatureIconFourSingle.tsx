import React from 'react';

type FeatureIconFourSingleProps = {
    data: {
        backgroundColor: string;
        iconImage: string;
        titleImage: string;
        title: string;
    };
    spaceBottomClass: string;
};

const FeatureIconFourSingle = ({ data, spaceBottomClass }: FeatureIconFourSingleProps) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div
                className={`support-wrap-3 text-center ${spaceBottomClass ? spaceBottomClass : ''}`}
                style={{ backgroundColor: `${data.backgroundColor}` }}
            >
                <div className="support-icon-2">
                    <img
                        className="animated"
                        src={process.env.PUBLIC_URL + data.iconImage}
                        alt=""
                    />
                </div>
                <div className="support-content-3">
                    <img src={process.env.PUBLIC_URL + data.titleImage} alt="" />
                    <p>{data.title}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureIconFourSingle;
