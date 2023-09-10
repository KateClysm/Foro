import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './create-post2.scss';
// import { AuthContext } from "../../context/authContext"; 
// import jwt_decode from "jwt-decode";

const CreatePost = () => {
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
  
export default CreatePost;


// import React from 'react';
// import './create-post.scss'
// import { useContext } from 'react';
// import { AuthContext } from '../../context/authContext';
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { makeRequest } from '../../axios';




// const CreatePost: React.FC = () => {


    
    // const {currentUser} = useContext(AuthContext);
    // const queryClient = useQueryClient();

    // //formulario
    // const [title, setTitle] = useState<string | ''>('');
    // const [description, setDescription] = useState<string | ''>('');
    // const [image, setImage] = useState<File | null>(null);
    // const [category, setCategory] = useState<string | ''>('');


    // const mutation = useMutation( 
    //     (newPost) => {
    //         return makeRequest.post("/posts", newPost);
    //     },
    //     {
    //         onSuccess: () => {

    //             queryClient.invalidateQueries(["posts"]);
    //         }
    //     }
    // )

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     mutation.mutate({title, description, image, category})
    // };

//     return (
//       <div className='container-create-post'>
//         <div className="create-post">
//             <h2>Create Your Post</h2>
//             <form >
//                 <div className="editor" >

//                     <p>{`What's on your mind ${currentUser.username}?`}</p>
//                     <img src={currentUser.profilePic} alt="userImage" />

//                     <div className='title'>
//                         <input
//                             type="text"
//                             placeholder='your title'
//                             onChange={(e) => setTitle(e.target.value)}
//                         />
//                     </div>

//                     <div className='description'>
//                         <p>description</p>
//                         <input
//                             type="textarea"
//                             name="description" 
//                             id="textEditor"
//                             placeholder='your description'
//                             onChange={(e) => setDescription(e.target.value)}
//                         />
//                     </div>

//                     <div className='image'>
//                         <p>image</p>
//                         <input
//                             type="file"
//                             name="filePost"
//                             placeholder='your Image'
//                             // onChange={(e) => setImage(e.target.value)}
//                             onChange={e => e.target.files ? setImage(e.target.files[0]) : null} 
//                         />                    
//                     </div>

                
                    

//                     <div className="item">
//                         <fieldset className='item'>

//                             <legend>Category</legend>

//                             <label htmlFor="ghosts">
//                             <input type="radio" checked={category === 'ghosts'} name="cat" value='ghosts' id="ghosts" onChange={e => setCategory(e.target.value)} /> Ghosts
//                             </label>

//                             <label htmlFor="witchcraft">
//                             <input type="radio" checked={category === 'witchcraft'} name="cat" value='witchcraft' id="witchcraft" onChange={e => setCategory(e.target.value)} /> Witchcraft
//                             </label>

//                             <label htmlFor="demons">
//                             <input type="radio" checked={category === 'demons'} name="cat" value='demons' id="demons" onChange={e => setCategory(e.target.value)} /> Demons
//                             </label>

//                             <label htmlFor="mythological/oldfolklore">
//                             <input type="radio" checked={category === 'mythological_oldfolklore'} name="cat" value='mythological_oldfolklore' id="mythological_oldfolklore" onChange={e => setCategory(e.target.value)} /> Mythological
//                             </label>

//                             <label htmlFor="past_life_regression">
//                             <input type="radio" checked={category === 'pastLifeRegression'} name="cat" value='pastLifeRegression' id="past_life_regression" onChange={e => setCategory(e.target.value)} /> Past Life Regression
//                             </label>

//                             <label htmlFor="shadow_people">
//                             <input type="radio" checked={category === 'shadowPeople'} name="cat" value='shadowPeople' id="shadow_people" onChange={e => setCategory(e.target.value)} /> Shadow People
//                             </label>

//                             <label htmlFor="premonitions_and_prophecies">
//                             <input type="radio" checked={category === 'premonitionsAndProphecies'} name="cat" value='premonitionsAndProphecies' id="premonitions_and_prophecies" onChange={e => setCategory(e.target.value)} /> Premonitions and Prophecies
//                             </label>

//                             <label htmlFor="zombies">
//                             <input type="radio"checked={category === 'zombies'} name="cat" value='zombies' id="zombies" onChange={e => setCategory(e.target.value)} /> Zombies
//                             </label>
//                         </fieldset>
//                     </div> 
//                 </div>
//             </form>

//             <button onClick={handleClick} className='post-btn'>Create Post</button>
//         </div>
        
//       </div>
//     )
// };

// export default CreatePost;