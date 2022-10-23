import React from 'react';
import './Iphone14Pro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Iphone14Pro = () => {
    return (
        <a href='https://www.apple.com/iphone-14-pro/' target='_blank'>
            <div className='iPhone-14Pro'>
                <div className='about-iphone-14Pro'>
                    <h2>iPhone 14 Pro</h2>
                    <h3>Pro. Beyond.</h3>
                    <div className='iPhone-link'>
                        <a href='https://www.apple.com/iphone-14-pro/' target='_blank'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                        <a href='https://www.apple.com/shop/buy-iphone/iphone-14-pro' target='_blank'>Buy <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Iphone14Pro;