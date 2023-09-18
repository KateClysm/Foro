import React, { useContext } from 'react';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { makeRequest } from '../../../axios';
import { useNavigate } from 'react-router-dom';
import Categories from '../categories/Categories';
import './update-post.scss';
import { AuthContext } from '../../../context/authContext';

const UpdatePost = () => {
  const { currentUser } = useContext(AuthContext);
  const idUser = currentUser?.id;



  const navigate = useNavigate();
  const state = useLocation().state;
  const [newTitle, setNewTitle] = useState(state.title); 
  const [textArea, setTextArea] = useState(state.description); 
  const [file, setFile] = useState<File | null>(null);
  const [newCat, setNewCat] = useState(state.cat); 

  const upload = async (file: File | null) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await makeRequest.post("/upload", formData);
        console.log("Image uploaded successfully:", res.data);
        return res.data; // Devuelve solo el nombre del archivo, no la URL completa
      }
      console.error("No file selected.");
      // Si no se selecciona un archivo, no modificamos el estado 'file'
      return null;
    } catch (error) {
      console.error("Error uploading image:", error);
      // Si ocurre un error, también puedes devolver null o manejar el error según tus necesidades
      return null;
    }
  };

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      
    console.log('datos del posteo por ser actualizado: title:', newTitle, ' description:', textArea, ' cat:', newCat, ' img: ',file, ' uid: ', state.uid);
    const imgUrl = file ? await upload(file) : null;
    try {
      await makeRequest.put(`/posts/update/${state.id}`, { 
        title: newTitle,
        description: textArea,
        img: imgUrl,
        cat: newCat, 
        uid: idUser
      });
      console.log('Successful changes!');      
      navigate("/myprofile");
      return;
    } catch (err) {
      console.log(err);
      console.log('An error has occurred while uploading!');    
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
                      value= {newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                    />
                
                    <div className="editorContainer">
                      <textarea 
                        className="inputDescription"
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                        >
                      </textarea>
                    </div>
                      
                    <div className="post-upload-image">
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
                        {file &&
                          <p>{file.name}</p>
                        }
                     </div>
                </div>
              

                <div className="inputs-row2">
                  <Categories cat={newCat} setCat={setNewCat} />
                  <button type="submit">Publish</button>
                </div>
            </div>

          
      </form>
    </div>
  )
};
  
export default UpdatePost;