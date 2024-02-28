import React, { useState, useEffect } from 'react';
import axios from 'axios';
import headerLogo from "../image/header-logo.svg";
import { Link, useNavigate, useParams } from 'react-router-dom';
import {toast} from 'react-toastify'

function PersonalId() {
    let navigator = useNavigate()
    let {id} = useParams();
    const [data, setData] = useState([]);
    let [paid, setPaid] = useState({
        id: "",
        departmentId:'',
        paidFees: ''
      })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/dev/getStudent/${id}`);
                setData(response.data.result[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const paidData = {
                id: data.id,
                paidFees: paid.paidFees
            };
          let {data:responseData } = await axios.post('http://localhost:8800/dev/payFees',paidData)
          console.log(responseData.result.id);
          if(responseData.error){
            toast.error(responseData.message);
            setPaid({
              id: '',
              paidFees: ''
            })
          }else{
            toast.success(responseData.message)
            navigator(`/department/${data.department_id}`)
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
    
      }

  return (
    <div>


<div class="email-pdf-page-outer container">

    <div class="email-pdf-page-inner">
        <div class="email-pdf-header">
            <img src={headerLogo}/>
            <div class="contact-info">
                <p>Jairams Arts and Science College<br/> Karur Attampparappu</p>
                <p>M : 9952410253 | 7708061799</p>
                <p>E : jairams.karur@gmail.com</p>
            </div>
        </div>

        <hr/>
        <br/>

        <div class="email-pdf-deatils">
            <div class="student-deatils">
                <p><strong>Name :</strong> {data.name}</p>
                <p><strong>course :</strong> {data.department}</p>
                <p><strong>Semester :</strong> {data.semster}SEM</p>
            </div>
            <div class="name">
                <p><strong>Date :</strong> {new Date().toISOString().split('T')[0]}</p>
                <p><strong>Roll No :</strong> {data.registerNumber}</p>
                <p><strong>Email ID :</strong> {data.email}</p>
            </div>

        </div>

        <br/>

        <div class="fees-deatils-outer personal-number">
            <div class="total-fees">
                <div class="fees-title">
                    <h6 class="Particulars">Particulars</h6>
                    <h6 class="Amount">Amount</h6>
                </div>
                <div class="fees-deatils">
                    <p class="Particulars">Total Fees</p>
                    <p class="Amount">{data.fees}</p>
                </div>
                <form onSubmit={handleSubmit}>
                <div class="fees-deatils">
                    <p class="Particulars">Paided Fees</p>
                    <p class="Amount"><input type="text" id="Tel" name="number" value={paid.paidFees} onChange={(e)=>setPaid({...paid,paidFees:e.target.value})}/></p>
                </div>
                <div class="fees-deatils submit">
                   <button className='common-btn'>submit</button>
                </div>
                </form>
                <hr/>
                {/* <div class="fees-deatils">
                    <p class="Particulars">Balance Fees</p>
                    <p class="Amount">{data.pending_fees}</p>
                </div> */}
            </div>

        </div>
    </div>

    <br/>

</div>

    </div>
  )
}

export default PersonalId