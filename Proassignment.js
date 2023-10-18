import React from 'react'

import pic1 from "./pro-image/Emoji_u1f44b.svg.png"
import pic2 from "./pro-image/search.jpg"
import pic3 from "./pro-image/barchart.png"
import pic4 from "./pro-image/percentage.jpg"
import imgb1 from "./pro-image/images$.jpg"
import imgb2 from "./pro-image/bookpage.jpg"
import imgb3 from "./pro-image/images coin.png"
import imgb4 from "./pro-image/images bag.png"

import p3d from "./pro-image/3D.jpg"
import p3d1 from "./pro-image/3D1.jpg"

import pic11 from "./pro-image/hexagon.jpg"
import pic12 from "./pro-image/product.png"
import pic13 from "./pro-image/customers.png"
import pic14 from "./pro-image/income.png"
import pic15 from "./pro-image/promote.png"
import pic16 from "./pro-image/help.png"

const Proassignment = () => {
  return (
    
        <div className='row'>
            <div className='col-sm-4' style={{background: "#301934", width: '250px', height:'595px'}}>
                    <div style={{marginTop:'20px',marginLeft:'20px'}} className='Dashboard'>
                        <img src={pic11} style={{width:'20px',height:'20px'}}/>
                        <p style={{color:'white',marginLeft:'80px',marginTop:'-25px'}}>Dashboard</p>
                    </div>

                    <div style={{marginTop:'30px',marginLeft:'20px'}} className='Dashboard1'>
                        <img src={pic11} style={{width:'20px',height:'20px'}}/>
                        <p style={{color:'white',marginLeft:'55px',marginTop:'-25px'}}>Dashboard</p>
                    </div>

                    <div style={{marginTop:'30px',marginLeft:'20px'}} className='Product'>
                        <img src={pic12} style={{width:'20px',height:'20px'}}/>
                        <p style={{color:'white',marginLeft:'55px',marginTop:'-25px'}}>Product</p>
                    </div>

                    <div style={{marginTop:'30px',marginLeft:'20px'}} className='customer'>
                        <img src={pic13} style={{width:'20px',height:'20px'}}/>
                        <p style={{color:'white',marginLeft:'55px',marginTop:'-25px'}}>Customer</p>
                    </div>

                    <div style={{marginTop:'30px',marginLeft:'20px'}} className='income'>
                        <img src={pic14} style={{width:'20px',height:'20px'}}/>
                        <p style={{color:'white',marginLeft:'55px',marginTop:'-25px'}}>Income</p>
                    </div>

                    <div style={{marginTop:'30px',marginLeft:'20px'}} className='promote'>
                        <img src={pic15} style={{width:'20px',height:'20px'}}/>
                        <p style={{color:'white',marginLeft:'55px',marginTop:'-25px'}}>Promote</p>
                    </div>

                    <div style={{marginTop:'30px',marginLeft:'20px'}} className='help'>
                        <img src={pic16} style={{width:'20px',height:'20px'}}/>
                        <p style={{color:'white',marginLeft:'55px',marginTop:'-25px'}}>help</p>
                    </div>
            </div>


            <div className='col-sm-8' style={{background: "#E4E0EE",width: '1122px',height:'595px'}}>
                <h6 style={{paddingTop: "20px",marginLeft:"20px"}}>Hello Shahrukh</h6>
                <img  style={{height:"20px",width:"30px",marginLeft:'140px',marginTop:'-70px'}} src={pic1}/>

                    <div className='search'>
                        <div className='sblock' style={{background:'white',width:'200px',height:'20px',marginTop:'-50px',marginLeft:'840px'}}>
                                <img src={pic2} style={{width:'20px',height:'20px',marginTop:'-8px'}}/>
                        </div>
                    </div>

                
                    
                        <div className='box1' style={{background:'white',height:'100px',width:'200px',marginTop:'20px',borderRadius:'5px',marginLeft:'50px'}}>
                            <img src={imgb1} style={{width:'50px',height:'50px',marginTop:'25px',marginLeft:'20px'}}/>
                            <div className='heading' style={{marginLeft:'100px',marginTop:'-60px'}}>
                            <p style={{color:'grey'}}>Earning</p>
                            <span>$198k</span><br/>
                            <span style={{fontSize:'12px',color:'darkgreen'}}>+37.8% </span><span style={{fontSize:'10px'}}>this month</span>
                            </div>
                        </div>
                        <div className='box2' style={{background:'white',height:'100px',width:'200px',marginTop:'20px',borderRadius:'5px',marginTop:'-100px',marginLeft:'300px'}}>
                            <img src={imgb2} style={{width:'50px',height:'50px',marginTop:'25px',marginLeft:'20px'}}/>
                            <div className='heading' style={{marginLeft:'100px',marginTop:'-60px'}}>
                            <p style={{color:'grey'}}>Orders</p>
                            <span>$2.4k</span><br/>
                            <span style={{fontSize:'12px',color:'red'}}>-2% </span><span style={{fontSize:'10px'}}>this month</span>
                            </div>
                        </div>
                        <div className='box3' style={{background:'white',height:'100px',width:'200px',marginTop:'20px',borderRadius:'5px',marginTop:'-100px',marginLeft:'550px'}}>
                            <img src={imgb3} style={{width:'50px',height:'50px',marginTop:'25px',marginLeft:'20px'}}/>
                            <div className='heading' style={{marginLeft:'100px',marginTop:'-60px'}}>
                            <p style={{color:'grey'}}>Balance</p>
                            <span>$2.4k</span><br/>
                            <span style={{fontSize:'12px',color:'red'}}>-2% </span><span style={{fontSize:'10px'}}>this month</span>
                            </div>
                        </div>
                        <div className='box4' style={{background:'white',height:'100px',width:'200px',marginTop:'20px',borderRadius:'5px',marginTop:'-100px',marginLeft:'800px'}}>
                            <img src={imgb4} style={{width:'50px',height:'50px',marginTop:'25px',marginLeft:'20px'}}/>
                            <div className='heading' style={{marginLeft:'100px',marginTop:'-60px'}}>
                            <p style={{color:'grey'}}>Total Sales</p>
                            <span>$89k</span><br/>
                            <span style={{fontSize:'12px',color:'darkgreen'}}>+11% </span><span style={{fontSize:'10px'}}>this month</span>
                            </div>
                        </div>

                        <div className='barchart'>
                            <img src={pic3} style={{width:'700px',height:'150px',marginTop:'20px',marginLeft:'50px'}}/>
                            <img src={pic4} style={{width:'200px',height:'150px',marginTop:"20px",marginLeft:'50px'}}/>
                        </div><br/>
                    
                   

                        <div className='last' style={{background:'white',borderRadius:'5px',marginLeft:'50px',marginRight:'75px'}}>
                            <h6 style={{paddingLeft:'20px'}}>Product Sell</h6>
                            <div className='search'>
                                 <div className='sblock' style={{background:'whitesmoke',width:'200px',height:'20px',marginLeft:'500px',marginTop:'-20px'}}>
                                <img src={pic2} style={{width:'20px',height:'20px',marginTop:'-8px'}}/>
                                <p style={{color:'grey',marginTop:'-26px',marginLeft:'30px'}}>search</p>
                                 </div>
                                 <div className='corner'>
                                    <lable for="last 30 Days" />
                                    <select style={{color:'grey',background:'whitesmoke',marginLeft:'800px'}} >
                                 <option value="last 30 Days">Last 30 days</option>
                                <option value="last 30Days">1</option>
                                <option value="last 30Days">2</option>
                                <option value="last 30Days">3</option>
                                <option value="last 30Days">4</option>
                                <option value="last 30Days">5</option>
                                <option value="last 30Days">6</option>
                                <option value="last 30Days">7</option>
                                <option value="last 30Days">8</option>
                                <option value="last 30Days">9</option>
                                <option value="last 30Days">10</option>
                                <option value="last 30Days">11</option>
                                <option value="last 30Days">12</option>
                                <option value="last 30Days">13</option>
                                <option value="last 30Days">14</option>
                                <option value="last 30Days">15</option>
                                <option value="last 30Days">16</option>
                                <option value="last 30Days">17</option>
                                <option value="last 30Days">18</option>
                                <option value="last 30Days">19</option>
                                <option value="last 30Days">20</option>
                                <option value="last 30Days">21</option>
                                <option value="last 30Days">22</option>
                                <option value="last 30Days">23</option>
                                <option value="last 30Days">24</option>
                                <option value="last 30Days">25</option>
                                <option value="last 30Days">26</option>
                                <option value="last 30Days">27</option>
                                <option value="last 30Days">28</option>
                                <option value="last 30Days">29</option>
                                <option value="last 30Days">30</option>
                                </select>
                             </div>
                            </div> 

                        

                        <div className='details'>
                        <table>
                             <thead style={{borderBottom:'1px solid gray'}}>
                                 <tr style={{color:'grey'}}>
                                     <th>ProductName</th>
                                     <th >
                                        <p style={{marginLeft:'250px'}}>Stock</p>
                                        </th>
                                     <th>
                                        <p style={{marginLeft:'100px'}}>Price</p>
                                        </th>
                                     <th>
                                        <p style={{marginLeft:'100px'}} >TotalSales</p>
                                        </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={p3d} style={{width:'60px',height:'30px',borderRadius:'7px'}}/>
                                        <h6 style={{marginLeft:'70px',marginTop:'-30px'}}>Abstract 3D</h6>
                                        <p style={{color:'grey',fontSize:'12px',marginLeft:'70px',marginTop:'-10px'}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                                    </td>
                                    <td>
                                        <p style={{marginLeft:'215px'}}>32 in stock</p>
                                        </td>
                                    <td>
                                       <p style={{marginLeft:'100px'}}>$45.99</p> 
                                        </td>
                                    <td>
                                       <p style={{marginLeft:'150px'}}s>20</p> 
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={p3d1} style={{width:'60px',height:'30px',borderRadius:'7px'}}/>
                                        <h6 style={{marginLeft:'70px',marginTop:'-30px'}}>Sarphens Illustration</h6>
                                        <p style={{color:'grey',fontSize:'12px',marginLeft:'70px',marginTop:'-10px'}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                                    </td>
                                    <td>
                                        <p style={{marginLeft:'215px'}}>32 in stock</p>
                                        </td>
                                    <td>
                                       <p style={{marginLeft:'100px'}}>$45.99</p> 
                                        </td>
                                    <td>
                                       <p style={{marginLeft:'150px'}}s>20</p> 
                                        </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>


                    

                

        

        </div>
    
  )
}

export default Proassignment