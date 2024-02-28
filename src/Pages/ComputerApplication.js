import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BannerImage from "../image/banner-image.jpeg"
import Header from './Header'
import Footer from './Footer'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {capitalizeFirstLetter} from '.././helper/capitalize'

function ComputerApplication() {
    let {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/dev/getStudentByDepartId/${id}`);
                setData(response.data.result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  return (
    <div>
        <Header/>
<div class="banner inner-page">
    <img src={BannerImage}/>
    <div class="banner-text">
        <h2>BCA</h2>
    </div>
</div>


<div class="common-outer">

    <div class="container">
    <Link className='common-btn' style={{float: "right"}} to={`/create_student/${id}`}>Create Student</Link>

        <table>
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Actual fee</th>
                <th>Paid</th>
                <th>Pending</th>
                <th>Payment Method</th>
            </tr>
            {
                data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{capitalizeFirstLetter(item.name)}</td>
                            <td>{item.department}</td>
                            <td>{item.fees}</td>
                            <td>{item.paided_fees}</td>
                            <td>{item.pending_fees}</td>
                            <td><Link to={`/student_fees/${item.id}`} className='common-btn'>View More</Link></td>
                        </tr>
                    )
                })
            }
     
        </table>


    </div>

</div>


<Footer/>

    </div>
  )
}

export default ComputerApplication