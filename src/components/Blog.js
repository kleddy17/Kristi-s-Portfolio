// import React, {useEffect,useState} from 'react'
// import axios from 'axios'



// //CSS import
// import "../css/components/Blog.css";


// const Blog = () => {
//   const [post, setPosts] = useState([])

//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{
//       console.log(res.data)
//       setPosts(res.data)
//   })
  
//   },[])

// const display = () =>{
//   return post.map((card)=> (
//     <div key={card.id} className="col s12 m6">
//       <div className="card #b2dfdb teal lighten-4">
//         <div className="card-content white-text">
//           <span className="card-title">{card.title}</span>
//           <p>{card.body}</p>
//         </div>
//         <div className="card-action">
//           <a href="#">This is a link</a>
//           <a href="#">This is a link</a>
//         </div>
//       </div>
//     </div>

//   ))}

// return <div className ="container">
//   <h2>Kristi's Blog</h2>
//   <div className = "row">{display()}</div>
//   </div>;
// };

// export default Blog;