import React from 'react';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { makeRequest } from '../../../axios';
import { useNavigate } from 'react-router-dom';
import Categories from '../categories/Categories';
import './update-post.scss';

const UpdatePost = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [title, setTitle] = useState(state.title);
  const [textArea, setTextArea] = useState(state.description);
  const [file, setFile] = useState(state.img);
  const [cat, setCat] = useState<string>(state.cat);

  const upload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file); // imagen
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
    try {
      await makeRequest.put(`/posts/${state.id}`, { 
        title,
        description: textArea,
        cat,
        img: file ? imgUrl : '', 
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  

    
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
                  <Categories cat={cat} setCat={setCat} />
                  <button type="submit">Publish</button>
                </div>
            </div>

          
      </form>
    </div>
  )
};
  
export default UpdatePost;