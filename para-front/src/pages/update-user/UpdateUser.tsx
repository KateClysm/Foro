import React from 'react';
import { useState } from "react";
import { makeRequest } from '../../axios';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateUser = () => {


  const navigate = useNavigate();
  const state = useLocation().state;
  
  const [newUsername, setNewUsername] = useState(state.username);
  const [newName, setNewName] = useState(state.name);
  const [newEmail, setNewEmail] = useState(state.email);
  const [newCity, setNewCity] = useState(state.city);
  const [newWebsite, setNewWebsite] = useState(state.website);
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [newCoverImage, setNewCoverImage] = useState<File | null>(null);
  const userId = useState(state.id);


  const uploadProfilePic = async (newProfilePic: File | null) => {
    try {
      if (newProfilePic) {
        const formData = new FormData();
        formData.append("file", newProfilePic);
        const res = await makeRequest.post("/uploads/users/profilePic", formData);
        console.log("Image uploaded successfully:", res.data);
        return res.data; // Devuelve solo el nombre del archivo, no la URL completa
      }
      console.error("No newProfilePic selected.");
      // Si no se selecciona un archivo, no modificamos el estado 'file'
      return null;
    } catch (error) {
      console.error("Error uploading image:", error);
      // Si ocurre un error, también puedes devolver null o manejar el error según tus necesidades
      return null;
    }
  };

  const uploadCoverImage= async (newCoverImage: File | null) => {
    try {
      if (newCoverImage) {
        const formData = new FormData();
        formData.append("file", newCoverImage);
        const res = await makeRequest.post("/uploads/users/coverPic", formData);
        console.log("Image uploaded successfully:", res.data);
        return res.data; 
      }
      console.error("No newCoverImage selected.");
      return null;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ppurl = newProfilePic ? await uploadProfilePic(newProfilePic) : null;
    const ciurl = newCoverImage ? await uploadCoverImage(newCoverImage) : null;
    try {
      await makeRequest.put(`/users/update/${userId}`, { 
        username: newUsername,
        name: newName,
        email: newEmail,
        city: newCity,
        website: newWebsite,
        profilePic: ppurl,
        coverPic: ciurl
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
      <h2>Edit Your User</h2>
      <form onSubmit={handleClick}>
            <div className="containerInputs">
                <div className="inputs-row1">
                    <input
                      type="text"
                      placeholder="username"
                      value= {newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                    />
                
                    <input
                      type="text"
                      placeholder="name"
                      value= {newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="email"
                      value= {newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="city"
                      value= {newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="website"
                      value= {newWebsite}
                      onChange={(e) => setNewWebsite(e.target.value)}
                    />

                
                    <label className="file" htmlFor="userImage">Upload User Image</label>
                    <input
                    style={{ display: "none" }}
                    type="file"
                    id="userImage"
                    onChange={(e) => {
                        if (e.target.files) {
                          setNewProfilePic(e.target.files[0]);
                        }
                      }}
                    />

                    <label className="file" htmlFor="baner">Upload User Baner</label>
                      <input
                      style={{ display: "none" }}
                      type="file"
                      id="baner"
                      onChange={(e) => {
                          if (e.target.files) {
                            setNewCoverImage(e.target.files[0]);
                          }
                        }}
                      />
                </div>
            </div>

            <button type="submit">Update User</button>
      </form>
    </div>
  )
};
  
export default UpdateUser;