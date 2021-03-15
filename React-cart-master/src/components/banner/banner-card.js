import React from 'react';
const BannerCard = ({ ban }) => {

    return(<div className="card" style={{width:"100%", height:"150px", padding:"15px", margin:"15px" }} >
      
        <div className="row">
        
            <div className="col-md-3">
            
                <img src={ban.imageUrl} alt={ban.name} className="card-img"
                    style={{ float:"right",width:"100%", height:"100px"}} />
            </div>
            <div className="col-md-8">
                <h4 className="card-title" style={{textAlign:'center' ,fontWeight:'bold'}}>{ban.name}</h4>
                <h4 className="card-text" style={{textAlign:'center' ,fontWeight:'lighter'}}>{ban.description}</h4>
                <button type="button" className="btn btn-danger" style={{marginTop:"15px", marginLeft:"150px", padding:"10px"}}>Explore {ban.name}</button>
            </div>
        </div>
    </div>
    )}
    
export default BannerCard;