import React from 'react';
import BannerCard from './banner-card'
import loading from './loading'
const BannerList=({ banner })=>{
    return(
        <div>
            {banner.map(c=><BannerCard ban={c} key={c.id}/>)}
        </div>
    );
}


export default loading(BannerList);