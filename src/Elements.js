import React from 'react';
import './nav.css';

function Elements(props) {
    return (
        <div className="listElements">
            <li><b>NAME: </b>{props.fullName}<br/><b>ADDRESS: </b> {props.address}<br/><b>SENIORITY: </b> {props.seniority}</li>
        </div>
    )
}

export default Elements;