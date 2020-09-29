import React from 'react';
import './Backdrop.css';

export const Backdrop = props => (
    <div className='backdrop' onClick={props.click} />
);
