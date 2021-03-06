import React from 'react';
import propTypes from './propTypes';

const SearchContainers = (props) => {
    const {
        fillPrimary = '#9f2fff',
        fillSecondary = '#0bb1d3',
        stroke = 'none',
    } = props;
    return (
        <svg>
            <linearGradient id="a" x1="32" x2="32" y1="59" y2="5" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor={fillPrimary} />
                <stop offset="1" stopColor={fillSecondary} />
            </linearGradient>
            <path
                fill="url(#a)"
                stroke={stroke}
                d="M33 29c5.514 0 10-4.486 10-10S38.514 9 33 9s-10 4.486-10 10 4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-8 42h2v2h-2v-2zm4 0h2v2h-2v-2zm32-25c0-2.757-2.243-5-5-5h-9.59c.38-1.269.59-2.61.59-4 0-7.72-6.28-14-14-14-5.957 0-11.042 3.746-13.061 9H17v-2h-2v2H6c-2.757 0-5 2.243-5 5s2.243 5 5 5h9v2h2v-2h2.939c.292.759.647 1.485 1.061 2.174V49h-2v5c0 2.757 2.243 5 5 5h34c2.757 0 5-2.243 5-5v-5h-2V28zm-5-3c1.654 0 3 1.346 3 3v21h-2V29c0-1.103-.897-2-2-2H44.473c.441-.63.823-1.3 1.157-2H56zM35 51h12v1a1 1 0 01-1 1H36a1 1 0 01-1-1v-1zm-8-2V31.63A13.893 13.893 0 0033 33c3.804 0 7.254-1.53 9.779-4H55v20H27zm6-42c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12S26.383 7 33 7zM6 22c-1.654 0-3-1.346-3-3s1.346-3 3-3h9v6H6zm11 0v-6h2.332A14 14 0 0019 19a14 14 0 00.332 3H17zm6 6.779a14.016 14.016 0 002 1.693V49h-2V28.779zM61 54c0 1.654-1.346 3-3 3H24c-1.654 0-3-1.346-3-3v-3h12v1c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-1h12v3zM47 31v16h6V31h-6zm4 14h-2V33h2v12zm-12 2h6V35h-6v12zm2-10h2v8h-2v-8zM31 47h6v-8h-6v8zm2-6h2v4h-2v-4z"
            />
        </svg>
    );
};

SearchContainers.propTypes = propTypes;

export default SearchContainers;
