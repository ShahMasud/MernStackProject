import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Prices extends Component {

    constructor(props) {
        super(props);
    
        this.state = {BookingData: []};
      }

      componentDidMount() {
        this.interval = setInterval(this.getData, 5000);
        this.getData();
    
        
      }
      getData = () => 
      {
        axios.get('/api/price/list')
        .then(response => {
          this.setState({ BookingData: response.data })
         // alert("Its Working fine");
        })
        .catch((error) => {
          alert(error)
          console.log(error);
        })
      }
    

    render() {
        return (
            <div>
                 <div class="ds_wrapper portfolio_heading_section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="pagecontent">
                        <div class="ds_pagecontentContent_title">
                            <h1>
                                CHECK OUR PRICES
                            </h1>
                        </div>
                        <div class="ds_pagecontentContent_breadcrumb">
                            <p>
                                <a href="index.html">
									Home
								</a>»
                                <span>
									Check our prices
								</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ds_wrapper  portfolio_slider_sec">
        <div class="container">
            <div class="row content">
                <div class="col-sm-12">
                    <div class="prices_section">
                        <h2 class="block_title">
                            PRICING LIST OF BARBER SHOP
                        </h2>
                        <ul class="price_ul">
                            {
                                this.state.BookingData.map((bdata, i) => 
                                {
                                    return (
                                        <li class="price_list">
                                        <div class="price_title">
                                            {bdata.name}
                                        </div>
                                        <div class="price_right">
                                            Rs. {bdata.price}
                                        </div>
                                        </li>
                                    )
                                })
                            }
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        )
    }
}
