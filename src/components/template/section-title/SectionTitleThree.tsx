import React from 'react';

type SectionTitleThreeProps = {
    positionClass: string;
    spaceClass?: string;
    titleText: string;
    colorClass?: string;
};

const SectionTitleThree = ({
    titleText,
    positionClass,
    spaceClass,
    colorClass,
}: SectionTitleThreeProps) => {
    return (
        <div
            className={`section-title-5 ${positionClass ? positionClass : ''} ${
                spaceClass ? spaceClass : ''
            }`}
        >
            <h2 className={`${colorClass ? colorClass : ''}`}>{titleText}</h2>
        </div>
    );
};

export default SectionTitleThree;
