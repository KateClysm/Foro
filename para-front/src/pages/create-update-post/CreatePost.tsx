import React, { useContext } from 'react';
import { useState } from "react";
import './create-post.scss';
import { makeRequest } from '../../axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const CreatePost = () => {
    const { currentUser } = useContext(AuthContext);
    const idUser = currentUser?.id;

    const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [textArea, setTextArea] = useState(''); 
  const [file, setFile] = useState<File | null>(null);
  const [cat, setCat] = useState<string>('');

  const upload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await makeRequest.post("/upload", formData);
        console.log("Image uploaded successfully:", res.data); 
        return res.data; 
      }
        console.error("No file selected.");
      
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imgUrl =  await upload();
    try{
      await makeRequest.post(`/posts/` ,{  
        title,
        description:textArea,
        img:file? imgUrl : '',
        uid: idUser,
        createAt: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        cat
      });
      navigate("/");
    }catch(err){
      console.log(err);
    }
  };
  
    
  return (
    <div className="containerForm">
      <h2>Make your Post!</h2>
      <form onSubmit={handleClick}>
            <div className="containerInputs">

                <div className="inputs-row1">

                    <input
                      className="titleInput"
                      type="text"
                      placeholder="Title"
                      value= {title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                
                    <div className="editorContainer">
                      <textarea 
                        className="inputDescription"
                        placeholder="Tell your Story..."
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                        >
                      </textarea>
                    </div>
                      
                      <label className="file" htmlFor="file">Upload Image</label>
                      <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
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
                            <label htmlFor="shadow_people">Shadow People</label>
                            <input type="radio" checked={cat === 'shadowPeople'} name="cat" value='shadowPeople' id="shadow_people" onChange={e => setCat(e.target.value)} />
                          </div>
                          
                          <div className="catInput">
                            <label htmlFor="premonitions_and_prophecies">Premonitions and Prophecies</label>
                            <input type="radio" checked={cat === 'premonitionsAndProphecies'} name="cat" value='premonitionsAndProphecies' id="premonitions_and_prophecies" onChange={e => setCat(e.target.value)} /> 
                          </div>
                      </div>
                  </div>

                  <button type="submit">Publish</button>
              </div>
            </div>

          
      </form>
    </div>
  )
};
  
export default CreatePost;