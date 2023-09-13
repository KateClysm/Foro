import React, { useContext } from 'react';
import { useState } from "react";
import { makeRequest } from '../../axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const UpdateUser = () => {
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
      <h2>Edit Your User</h2>
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
            </div>
      </form>
    </div>
  )
};
  
export default UpdateUser;