import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import BannerImage from "../image/banner-image.jpeg"
import { useNavigate,useParams } from 'react-router-dom';
import {toast} from 'react-toastify'
import axios from 'axios';

const CreateStudent = () => {

    let navigator = useNavigate()
    let {id} = useParams()
  let [student, setStudent] = useState({
    name: "",
    gender: "",
    date_of_birth: "",
    email: "",
    address: "",
    phone_number: "",
    department: "",
    semster: "",
    department_id:""
  })

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      // Extract the gender value from the form data
      const gender = formData.get('gender');
  
      // Update the student state with the gender value
      console.log(gender);
      let studentData = {
        name: student.name,
        gender: gender,
        date_of_birth: student.date_of_birth,
        email: student.email,
        address: student.address,
        phone_number: student.phone_number,
        department: student.department,
        semster: student.semster,
        department_id:id
      }
      student.department_id = id
      let {data} = await axios.post('http://localhost:8800/dev/createStudent',studentData)
      console.log(data.result.id);
      if(data.error){
        toast.error(data.message);
        setStudent({
            name: "",
            gender: "",
            date_of_birth: "",
            email: "",
            address: "",
            phone_number: "",
            department: "",
            semster: ""
        })
      }else{
        toast.success(data.message)
        navigator(`/department/${id}`)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

    return (
        <div>
            <Header />
            <div class="banner inner-page">
                <img src={BannerImage} />
                <div class="banner-text">
                    <h2>BCA</h2>
                </div>
            </div>

            <div class="common-outer">

                <div class="container">
                    <div class="student-forms">
                        <form onSubmit={handleSubmit}>
                        <ul>
                            <li class="name">
                                <input type="text" id="fname" name="name" placeholder="Name" value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})}/>
                            </li>
                            <li class="gender">
                                <label>Gender</label>
                                <div class="gender-field">
                                    <input type="radio" name="gender" value="male" /> Male
                                    <input type="radio" name="gender" value="female" /> Female
                                </div>
                            </li>
                            <li class="date of birth">
                                <input type="date" id="birthday" name="birthday" placeholder="Date of Birth" value={student.date_of_birth} onChange={(e)=>setStudent({...student,date_of_birth:e.target.value})} />
                            </li>
                            <li class="email">
                                <input type="email" id="fname" name="name" placeholder="Email"  value={student.email} onChange={(e)=>setStudent({...student,email:e.target.value})}/>
                            </li>
                            <li class="address">
                                <input type="text" id="fname" name="name" placeholder="Address"  value={student.address} onChange={(e)=>setStudent({...student,address:e.target.value})}/>
                            </li>
                            <li class="phone_number">
                                <input type="tel" id="fname" name="name" placeholder="phone number" value={student.phone_number} onChange={(e)=>setStudent({...student,phone_number:e.target.value})}/>
                            </li>
                            <li class="department">
                                <input type="text" id="fname" name="name" placeholder="department"  value={student.department} onChange={(e)=>setStudent({...student,department:e.target.value})}/>
                            </li>
                            <li class="semster">
                                <input type="number" id="fname" name="name" placeholder="semster" value={student.semster} onChange={(e)=>setStudent({...student,semster:e.target.value})}/>
                            </li>
                            <li class="submit">
                                <button class="common-btn">Create Student</button>
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default CreateStudent