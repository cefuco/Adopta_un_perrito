import React from 'react';

const Tags = (props) => {
    return (
        <span className={`badge bg-${props.color}`}>{props.text}</span>
    );
};

export default Tags;



