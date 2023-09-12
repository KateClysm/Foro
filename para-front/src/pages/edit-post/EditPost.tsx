import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './edit-post.scss';
// import { AuthContext } from "../../context/authContext"; 
// import jwt_decode from "jwt-decode";

const EditPost = () => {
  // const authContext = useContext(AuthContext);
  // const currentUser = authContext.currentUser; 

  // let decodedToken: any;
  // if (currentUser) {
  //   decodedToken = jwt_decode(currentUser);
  //   console.log("Decoded Token:", decodedToken);
  // }

  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [file, setFile] = useState<File | null>(null);
  const [cat, setCat] = useState<string>(state?.cat || '');


  const navigate = useNavigate()

  const upload = async () => {
      try {
        const formData = new FormData();
        if (file !== null) {                      
          formData.append("file", file);
          // const res = await axios.post("/upload", formData);
          const res = await axios.post("http://localhost:8800/apiForum/upload", formData); // Cambio de URL
          return res.data;
        } else {
          throw new Error("No file selected");
        }
      } catch (err) {
        console.log(err);
      }
    };

    const handleClick = async (e: React.FormEvent) => {
      e.preventDefault();
  
      let imgUrl = "";
      if (file) {
        imgUrl = await upload();
      }
  
      try {
        // Si "state" existe (estamos editando un post existente), utiliza una solicitud PUT
        // De lo contrario, utiliza una solicitud POST para crear un nuevo post.
        state
          ? await axios.put<ResponseType>(
              `http://localhost:8800/apiForum/posts/${state.id}`,
              {
                title,
                description: desc,
                cat,
                img: imgUrl,
              },
              {
                withCredentials: true,
                // headers: {
                //   Authorization: `Bearer ${currentUser}` // Utiliza currentUser aquí
                // }
              }
            )
          : await axios.post<ResponseType>(
              `http://localhost:8800/apiForum/posts/`,
              {
                title,
                description: desc,
                cat,
                img: imgUrl,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
              },
              {
                withCredentials: true,
                // headers: {
                //   Authorization: `Bearer ${currentUser}` // Utiliza currentUser aquí
                // }
              });
        navigate("/");
      } catch (err) {
        console.log(err);
        console.log('falla handleClick');
      }
    };
    
  return (
    <div className="containerForm">
      <h2>Make your Post!</h2>
      <form onSubmit={(e) => handleClick(e)}>
            <div className="containerInputs">

                <div className="inputs-row1">
                    <input
                      className="titleInput"
                      type="text"
                      id="title" // Agrega el atributo id
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                
                    <div className="editorContainer">
                      <textarea 
                        className="inputDescription"
                        name="" 
                        id="textD"
                        placeholder="Tell your Story..."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        >
                      </textarea>
                    </div>
                      
                      <label className="file" htmlFor="file">Upload Image</label>
                      <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      name=""
                      onChange={(e) => {
                          if (e.target.files) {
                            setFile(e.target.files[0]);
                          }
                        }}
                      />
                </div>
              

              <div className="inputs-row2">
                  <div className="categoryMenu">
                      <h3>Category</h3> 
                      <div className="categories">
                          
                          <div className="catInput">
                            <label htmlFor="ghosts">Ghosts</label>
                            <input type="radio" checked={cat === 'ghosts'} name="cat" value='ghosts' id="ghosts" onChange={e => setCat(e.target.value)} /> 
                          </div>

                          <div className="catInput">
                            <label htmlFor="witchcraft">Witchcraft</label>
                            <input type="radio" checked={cat === 'witchcraft'} name="cat" value='witchcraft' id="witchcraft" onChange={e => setCat(e.target.value)} /> 
                          </div>

                          <div className="catInput">
                            <label htmlFor="demons">Demons</label>
                            <input type="radio" checked={cat === 'demons'} name="cat" value='demons' id="demons" onChange={e => setCat(e.target.value)} /> 
                          </div>

                          <div className="catInput">
                            <label htmlFor="mythological/oldfolklore">Mythological / Old Folklore</label>
                            <input type="radio" checked={cat === 'mythological_oldfolklore'} name="cat" value='mythological_oldfolklore' id="mythological/oldfolklore" onChange={e => setCat(e.target.value)} />
                          </div>
                          
                          <div className="catInput">
                            <label htmlFor="past_life_regression">Past Life Regression</label>
                            <input type="radio" checked={cat === 'pastLifeRegression'} name="cat" value='pastLifeRegression' id="past_life_regression" onChange={e => setCat(e.target.value)} /> 
                          </div>
                                          
                          <div className="catInput">
                            <label htmlFor="shadow_people">Shadow People</label>
                            <input type="radio" checked={cat === 'shadowPeople'} name="cat" value='shadowPeople' id="shadow_people" onChange={e => setCat(e.target.value)} />
                          </div>
                          
                          <div className="catInput">
                            <label htmlFor="premonitions_and_prophecies">Premonitions and Prophecies</label>
                            <input type="radio" checked={cat === 'premonitionsAndProphecies'} name="cat" value='premonitionsAndProphecies' id="premonitions_and_prophecies" onChange={e => setCat(e.target.value)} /> 
                          </div>

                          <div className="catInput">
                            <label htmlFor="zombies">Zombies</label>
                            <input type="radio" checked={cat === 'zombies'} name="cat" value='zombies' id="zombies" onChange={e => setCat(e.target.value)} /> 
                          </div>
                      </div>
                  </div>

                  <button type="submit" onClick={handleClick}>Publish</button>
              </div>
            </div>

          
      </form>
    </div>
  )
};
  
export default EditPost;



// import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import Post from '../post/Post';
// import './extended.post.scss';
// import { makeRequest } from '../../../axios';
// import { IPost } from '../../../models/Ipost';

// const ExtendedPost: React.FC = () => {
//   const [post, setPost] = useState<IPost | null>(null);
//   const [postId, setPostId] = useState<string | undefined >(undefined);
//   const [loadedOnce, setLoadedOnce] = useState(false); 
//   const { id } = useParams();
//   console.log('el id del post ingresado es: ', id);

//   const location = useLocation();
//   const postFromLocation = location.state ? location.state.post : null;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (postFromLocation && !loadedOnce) {
//           setPost(postFromLocation);
//           setPostId(postFromLocation.id);
//           setLoadedOnce(true);
//           return;
//         }
        
//         const res = await makeRequest.get(`/posts/${id}`);
//         setPost(res.data[0]);
//         setPostId(id);
//         setLoadedOnce(true);
//         console.log('el post traido en un array: ', res.data); 
//         console.log('el post traido en un objeto: ', res.data[0]);
//         console.log('el post traido en un array: ', post); 
//         console.log('el id del post si fue buscado manualmente: ', postId);  
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [id, postFromLocation]);

//   return (
//     <div className='container-show-post'>
//       {post !== null ? (
//         <Post post={post} key={postId} />
//       ) : (
//         <p>Finding post...</p>
//       )}
//     </div>
//   );
// };

// export default ExtendedPost;


// import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom'; // Importa useLocation
// import Post from '../post/Post';
// import './extended.post.scss';
// import { makeRequest } from '../../../axios';
// import { IPost } from '../../../models/Ipost';

// const ExtendedPost: React.FC = () => {
//   const [post, setPost] = useState<IPost | null>(null);
//   const [postId, setPostId] = useState<string | undefined >(undefined);

//   // Obtén el estado de la ubicación
//   const location = useLocation();
//   const postFromLocation = location.state ? location.state.post : null;
  
//   if (postFromLocation) {
//     setPost(postFromLocation);
//     setPostId(postFromLocation.id);
//     return;
//  }

//  if(!postFromLocation){
//       const { id } = useParams();
//       const fetchData = async () => {
//         try {
//           const res = await makeRequest.get(`/posts/${id}`);
//           setPost(res.data);
//           console.log(post);
//           if (post){
//             setPostId(id);
//             console.log(postId);
//           }
//         } catch (err) {
//           console.log(err);
//         }
//       };
//       useEffect(() => {
//         fetchData();
//       }
//     )
//   }
  

//   return (
//     <div className='container-show-post'>
//        {post !== null ? (
//         <Post post={post} key={postId} />
//         ) : (
//           <p>Finding post...</p>
//         )}
//     </div>
//   );
// };

// export default ExtendedPost;