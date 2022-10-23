import React from 'react';
import './Navbar.css';
import logo from './Images/apple logo.svg';
import store from './Images/Store.svg';
import mac from './Images/Mac.svg';
import iPad from './Images/Ipad.svg';
import iPhone from './Images/iphone.svg';
import watch from './Images/watch.svg';
import airpods from './Images/airpods.svg';
import tv from './Images/tvhome.svg';
import onlyApple from './Images/onlyonapple.svg';
import accessories from './Images/accessories.svg';
import support from './Images/support.svg';
import bag from './Images/bag.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='img-div'>
                <ul>
                    <li><a><img src={logo} /></a></li>
                    <li><a><img src={store} /></a></li>
                    <li><a><img src={mac} /></a></li>
                    <li><a><img src={iPad} /></a></li>
                    <li><a><img src={iPhone} /></a></li>
                    <li><a><img src={watch} /></a></li>
                    <li><a><img src={airpods} /></a></li>
                    <li><a><img src={tv} /></a></li>
                    <li><a><img src={onlyApple} /></a></li>
                    <li><a><img src={accessories} /></a></li>
                    <li><a><img src={support} /></a></li>
                    <li><a><FontAwesomeIcon className='search' icon={faMagnifyingGlass} /></a></li>
                    <li><a><img src={bag} /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;