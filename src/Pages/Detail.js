import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import BannerImage from "../image/banner-image.jpeg"
import ComputerScience from "../image/computer-science.jpg"
import { Link, useNavigate, useParams } from 'react-router-dom';
function Detail() {
    let {id} = useParams();
    console.log("id",id);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/dev/getDepartment/${id}`);
                setData(response.data.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />

            <div class="banner inner-page">
                <img src={BannerImage} />
                <div class="banner-text">
                    <h2>Details</h2>
                </div>
            </div>


            <div class="common-outer">

                <div class="container">

                    <div class="about-even">
                        <div class="about-us-content">
                            <h3>Computer <span>science</span></h3>


                            {data.map(item => (
                                    <p key={item.id}><Link to={`/department/${item.id}`}>{item.departent_name}</Link></p>
                            ))}
                        </div>
                        <div class="about-us-image">
                            <img src={ComputerScience} />
                        </div>
                    </div>

                </div>

            </div>


            <Footer />


        </div>
    )
}

export default Detail