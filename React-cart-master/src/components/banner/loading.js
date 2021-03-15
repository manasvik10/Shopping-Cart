import React, { Component } from 'react'

function loading (OldComponent){

    return class NewComponent extends Component{
        render(){
            let output = <OldComponent {...this.props} />

            if(this.props.banner.length===0)
            {
                output=<p className="alert alert-danger">Loading please wait...</p>
            }
            return output;
        }
    }
}

export default loading;