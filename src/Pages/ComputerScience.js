// import React from 'react'
// import BannerImage from "../image/banner-image.jpeg"
// import Header from './Header'
// import Footer from './Footer'

// function ComputerScience() {
//     const data = [{
//         name: 'Vinoth Kumar',
//         course: 'B,Sc (Computer Science)',
//         paided: '7,000',
//         pending: '7,000',
//         paymentProcess: '<a href="personal-ID.html" class="common-btn">View more</a>'
//     },
//     {
//         name:"Velmurugan",
//         course: 'B,Sc (Computer Science)',
//         paided: '10,000',
//         pending: '4,000',
//         paymentProcess: '<a href="personal-ID.html" class="common-btn">View more</a>'
//     },
//     {
//         name:"Guna",
//         course: 'B,Sc (Computer Science)',
//         paided: '9,000',
//         pending: '5,000',
//         paymentProcess: '<a href="personal-ID.html" class="common-btn">View more</a>'
//     },
//     {
//         name:"Naveen Kumar",
//         course: 'B,Sc (Computer Science)',
//         paided: '8,000',
//         pending: '6,000',
//         paymentProcess: '<a href="personal-ID.html" class="common-btn">View more</a>'
//     },
//     {
//         name:"Praveen",
//         course: 'B,Sc (Computer Science)',
//         paided: '7,000',
//         pending: '7,000',
//         paymentProcess: '<a href="personal-ID.html" class="common-btn">View more</a>'
//     },
//     {
//         name:"Siva",
//         course: 'B,Sc (Computer Science)',
//         paided: '6,000',
//         pending: '6,000',
//         paymentProcess: '<a href="personal-ID.html" class="common-btn">View more</a>'
//     },
//     {
//         name:"Dharmaraj",
//         course: 'B,Sc (Computer Science)',
//         paided: '5,000',
//         pending: '5,000',
//         paymentProcess: '<a href="personal-ID.html" class="common-btn">View more</a>'
//     },
//     {
//         name:"karthi",
//         course: 'B,Sc (Computer Science)',
//         paided: '4,000',
//         pending: '4,000',
//         paymentProcess: '<a href="personal-ID.html" class="common-btn">View more</a>'
//     }
// ]
//   return (
//     <div>
//         <Header/>
// <div class="banner inner-page">
//     <img src={BannerImage}/>
//     <div class="banner-text">
//         <h2>B,Sc (CS)</h2>
//     </div>
// </div>


// <div class="common-outer">

//     <div class="container">


//         <table>
//             <tr>
//                 <th>Name</th>
//                 <th>Course</th>
//                 <th>Paided</th>
//                 <th>Pending</th>
//                 <th>payment process</th>
//             </tr>
//             {
//                 data.map((item, index) => {
//                     return (
//                         <tr key={index}>
//                             <td>{item.name}</td>
//                             <td>{item.course}</td>
//                             <td>{item.paided}</td>
//                             <td>{item.pending}</td>
//                 <td><a href="personal-ID.html" class="common-btn">View more</a></td>
//                         </tr>
//                     )
//                 })
//             }

//         </table>


//     </div>

// </div>


// <Footer/>

//     </div>
//   )
// }

// export default ComputerScience