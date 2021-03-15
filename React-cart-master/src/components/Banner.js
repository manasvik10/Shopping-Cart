import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BannerList from './banner/banner-list'

class Banner extends Component {
    state = {
        banner: []
    }

    async componentDidMount() {

        let resp = await fetch("http://localhost:4000/categories/"); 
        let banner = await resp.json(); 
        this.setState({ banner })
    }

    render() {
        return (
            <div className="container">
                <img src="/static/images/logo.png" alt="Sabka Bazaar"/>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/static/images/offers/offer1.jpg" alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/static/images/offers/offer2.jpg" alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/static/images/offers/offer3.jpg" alt="Third slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/static/images/offers/offer4.jpg" alt="Fourth slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/static/images/offers/offer5.jpg" alt="fifth slide"></img>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

                <div className="row">
                    <div className="col">
                        <BannerList banner={this.state.banner} />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Banner;