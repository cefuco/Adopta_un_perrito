import React from 'react';
import Tags from './Tags';

const MyCard = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Tags text={props.tagText} color={props.tagColor} />
        </div>
    );
};

export default MyCard;



