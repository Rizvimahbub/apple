import React from 'react';
import './Ipad.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Ipad = () => {
    return (
        <a href='https://www.apple.com/ipad-10.9/' target='_blank'>
            <div className='ipad'>
                <div className='about-ipad'>
                    <h2>iPad</h2>
                    <h3>Lovable. Drawable. Magical.</h3>
                    <p>Available starting 10.26</p>
                    <div className='ipad-link'>
                        <a href='https://www.apple.com/ipad-10.9/' target='_blank'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                        <a href='https://www.apple.com/shop/buy-ipad/ipad' target='_blank'>Order now <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Ipad;