// import React, {useEffect,useState} from 'react'
// import axios from 'axios'


// //Components
// import Spinner from './common/Spinner'



// //CSS import
// import "../css/components/Projects.css";


// const Projects = () => {
//   const [data, setData] = useState([])

//   const [loading,setLoading]= useState(true)

// useEffect(()=>{
//   axios.get('https://api.github.com/users/kleddy17/repos')
//   .then((res)=>{
//     console.log(res.data)
//     setData(res.data)
// }).then(()=>setLoading(false))

// },[])

// //Create a function called display
// const display = () =>{
//   if (loading){
//     return<Spinner/>
//   }else{
//     return data.map((card)=> (
//       <div key={card.id} className="col s12 m6">
//         <div className="card #c5e1a5#ffebee red lighten-5">
//           <div className="card-content white-text">
//             <span className="card-title">{card.name}</span>
//             <p>Brief Description</p>
//           </div>
//           <div className="card-action">
//           </div>
//         </div>
//       </div>
//     ))}
// }
// return (
//   <div className =" container">
//     <h2>Projects</h2>
// <div className = "row">{display()}</div>

// </div>

// )
// };

// export default Projects;

