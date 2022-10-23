import React from 'react';
import './Iphone14.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Iphone14 = () => {
    return (
        <a href='https://www.apple.com/iphone-14/' target='_blank'>
            <div className='iPhone-14'>
                <div className='about-iphone14'>
                    <h2>iPhone 14</h2>
                    <h3>Big and bigger.</h3>
                    <div className='iPhone14-link'>
                        <a href='https://www.apple.com/iphone-14/' target='_blank'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                        <a href='https://www.apple.com/shop/buy-iphone/iphone-14' target='_blank'>Buy <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Iphone14;