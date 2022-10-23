import React from 'react';
import './AllItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import logoUltraLarge from './Images/apple watch 1/logo_watch_ultra_large.png';
import logoSeries8Large from './Images/apple watch 2/logo_watch_series_8_large.png';
import m2Logo from './Images/iPad Pro/m2_logo_large.png';
import tvLogo from './Images/TV/apple_tv_4k_logo_small_2x.png';
import card from './Images/Card/Apple__2_-removebg-preview.png';


const AllItems = () => {
    return (
        <div className='items-container'>
            <a href='https://www.apple.com/apple-watch-ultra/' target='_blank'>
                <div className='product ultra'>
                    <div className='about'>
                        <img src={logoUltraLarge}></img>
                        <h5>Adventure awaits.</h5>
                        <div>
                            <div className='items-link'>
                                <a href='https://www.apple.com/apple-watch-ultra/' target='_blank'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                                <a href='https://www.apple.com/shop/buy-watch/apple-watch-ultra' target='_blank'>Buy <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://www.apple.com/apple-watch-series-8/' target='_blank'>
                <div className='product series8'>
                    <div className='about'>
                        <img src={logoSeries8Large}></img>
                        <h5>A healthy leap ahead.</h5>
                        <div>
                            <div className='items-link'>
                                <a href='https://www.apple.com/apple-watch-series-8/' target='_blank'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                                <a href='https://www.apple.com/shop/buy-watch/apple-watch' target='_blank'>Buy <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://www.apple.com/ipad-pro/' target='_blank'>
                <div className='product ipad-pro'>
                    <div className='about about-ipad-pro'>
                        <h4>iPad Pro</h4>
                        <h3>Supercharged by <span><img src={m2Logo} /></span></h3>
                        <p>Available starting 10.26</p>
                        <div>
                            <div className='items-link'>
                                <a href='https://www.apple.com/ipad-pro/' target='_blank'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                                <a href='https://www.apple.com/shop/buy-ipad/ipad-pro' target='_blank'>Order Now <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://www.apple.com/apple-tv-4k/'>
                <div className='product tv-4k'>
                    <div className='about tv'>
                        <img src={tvLogo}></img>
                        <h5>The Apple experience. Cinematic in every sense.</h5>
                        <p>Available starting 11.4</p>
                        <div>
                            <div className='items-link'>
                                <a href='https://www.apple.com/apple-tv-4k/'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                                <a href='https://www.apple.com/shop/buy-tv/apple-tv-4k'>Order Now <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://www.apple.com/airpods-pro/' target='_blank'>
                <div className='product airpods'>
                    <div className='about about-airpods'>
                        <h4>AirPods Pro</h4>
                        <h5>Rebuilt from the sound up.</h5>
                        <div>
                            <div className='items-link'>
                                <a href='https://www.apple.com/airpods-pro/' target='_blank'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                                <a href='https://www.apple.com/shop/product/MQD83AM/A/airpods-pro' target='_blank'>Buy <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='https://www.apple.com/apple-card/' target='_blank'>
                <div className='product card'>
                    <div className='about about-card'>
                        <img src={card}></img>
                        <h5>Get up to 3% Daily Cash back with every purchase.</h5>
                        <div>
                            <div className='items-link'>
                                <a href='https://www.apple.com/apple-card/' target='_blank'>Learn more <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                                <a href='https://card.apple.com/apply/start?referrer=cid%3Dapy-200-100018' target='_blank'>Apply now <FontAwesomeIcon className='chevron-right' icon={faAngleRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default AllItems;