import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import {images,data} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="specialMenu">
    <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) =>(
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
      </div>
      <div className="app__specialMenu-menu_img">
           <img src={images.menu} alt="Menu" />  
      </div>
      
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
            {data.cocktails.map((y, index) =>(
              <MenuItem key={y.title + index} title={y.title} price={y.price} tags={y.tags} />

            ))}
          </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
         <button type="button" className="custom__button">View More</button>  
    </div>
  </div>
);

export default SpecialMenu;
