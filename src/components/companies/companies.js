import React from 'react'

import './companies.scss'

import adobe from '../../icons/companiesLogo_adobe.png';

import slack from '../../icons/companiesLogo_slack.png';

const Companies = () => {
  return (
    <div className='companies__container'>
        <div className="companies__logoContainer">
            <img src={slack} alt="" className="companies__logo" />
            <div className="companies__background"></div>
        </div>
        
        <img src={adobe} alt="" className="companies__logo" />
        <img src="" alt="" className="companies__logo" />
        <img src="" alt="" className="companies__logo" />
        <img src="" alt="" className="companies__logo" />
        <img src="" alt="" className="companies__logo" />
    </div>
  );
}


export default Companies;
