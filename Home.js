import React from 'react';
import SlideShow from '../Shared/HomeSlideshow' ;
import axios from 'axios';
import { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {

      axios.get('http://localhost:3001/users').then((response) => {
          setData(response.data)
      })
  }, []);
  return (
    <div>
    <SlideShow />
     <h1 style={{textAlign : 'center' , marginRight : 60}}>OUR DEPARTMENTS</h1>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="container" style={{backgroundColor : 'white'}}>
                                    <div className="row row-cols-3">
                                        <div className="col" class='card-department'>
                                            <img src={item.cs_imageURL} alt=''/>
                                            <h2>Computer science departemnt </h2>
                                            <p>{item.cs_department}</p>

                                        </div>
                                        <div class="col-md-2">
                                          
                                        </div>
                                        <div class="col" className='card-department'>
                                            <img src={item.is_image} alt='' />
                                            <h2>Information System departemnt </h2>
                                            <p>{item.is_department}</p>
                                        </div>
                                        
                                       
                                    </div>
                                </div>



                            </div>


                        )
                    }
                    )

                }
    </div>
  );
};

export default Home;


