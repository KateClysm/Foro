import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'


const CreatePost = () => {


const state = useLocation().state;
// const [value, setValue] = useState(state?.title || "");
const [title, setTitle] = useState(state?.desc || "");
const [description, setDescription] = useState(state?.description || "");
const [file, setFile] = useState<File | null>(null);
const [cat, setCat] = useState<string | ''>('');


const navigate = useNavigate()

const upload = async () => {
    try {
      const formData = new FormData();
      if (file !== null) {                      
        formData.append("file", file);
        const res = await axios.post("/upload", formData);
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
    state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            description,
            cat,
            img: imgUrl,
        })
        : await axios.post(`/posts/`, {
            title,
            description,
            cat,
            img: imgUrl,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
        navigate("/")
    } catch (err) {
    console.log(err);
    }
};

return (
    <form onSubmit={(e) => handleClick(e)}>
        <div className="content">

            <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            />

            {/* <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            /> */}

            <div className="editorContainer">
            <ReactQuill
                className="editor"
                theme="snow"
                value={description}
                onChange={setDescription}
            />
            </div>

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
            <label className="file" htmlFor="file">Upload Image</label>
            
            <button onClick={handleClick}>Publish</button>
        </div>

        <div className="menu">
            <div className="item">
                <h1>Category</h1>
                
                <label htmlFor="ghosts">Ghosts</label>
                <input type="radio" checked={cat === 'ghosts'} name="cat" value='ghosts' id="ghosts" onChange={e => setCat(e.target.value)} /> 
            

                <label htmlFor="witchcraft">Witchcraft</label>
                <input type="radio" checked={cat === 'witchcraft'} name="cat" value='witchcraft' id="witchcraft" onChange={e => setCat(e.target.value)} />      

                <label htmlFor="demons">Demons</label>
                <input type="radio" checked={cat === 'demons'} name="cat" value='demons' id="demons" onChange={e => setCat(e.target.value)} /> 
                                

                <label htmlFor="mythological/oldfolklore">Mythological</label>
                <input type="radio" checked={cat === 'mythological_oldfolklore'} name="cat" value='mythological_oldfolklore' id="mythological/oldfolklore" onChange={e => setCat(e.target.value)} /> 
                

                <label htmlFor="past_life_regression">Past Life Regression</label>
                <input type="radio" checked={cat === 'pastLifeRegression'} name="cat" value='pastLifeRegression' id="past_life_regression" onChange={e => setCat(e.target.value)} /> 
                

                <label htmlFor="shadow_people">Shadow People</label>
                <input type="radio" checked={cat === 'shadowPeople'} name="cat" value='shadowPeople' id="shadow_people" onChange={e => setCat(e.target.value)} />
                

                <label htmlFor="premonitions_and_prophecies">Premonitions and Prophecies</label>
                <input type="radio" checked={cat === 'premonitionsAndProphecies'} name="cat" value='premonitionsAndProphecies' id="premonitions_and_prophecies" onChange={e => setCat(e.target.value)} /> 
                

                <label htmlFor="zombies">Zombies</label>
                <input type="radio" checked={cat === 'zombies'} name="cat" value='zombies' id="zombies" onChange={e => setCat(e.target.value)} /> 
            
            </div>
        </div>

        <button type="submit">Publish</button>
    </form>
)};
  
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