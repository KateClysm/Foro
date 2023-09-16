import React from 'react';
import { useState } from "react";
import { makeRequest } from '../../axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './update-profile.scss'


const UpdateProfile = () => {

  const navigate = useNavigate();
  const state = useLocation().state;
  
  const [newUsername, setNewUsername] = useState(state.username); 
  const [newName, setNewName] = useState(state.name);
  const [newCity, setNewCity] = useState(state.city || '');
  const [newWebsite, setNewWebsite] = useState(state.website || '');
  const [file, setFile] = useState<File | null>(null);

  const upload = async (file: File | null) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await makeRequest.post("/upload", formData);
        console.log("Image uploaded successfully desde el front:", res.data);
        return res.data; 
      }
      console.error("No file selected.");
      return null;
    } catch (error) {
      console.error("Error uploading image desde el front:", error);
      return null;
    }
  };
    

  const fetchUpdatedUserData = async () => {
    try {
      const response = await makeRequest.get(`/users/find/${state.id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching updated user data:', error);
      return null;
    }
  };


  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      
    

    const imgUrl = file ? await upload(file) : null;
    console.log(imgUrl);
    try {
      await makeRequest.put(`/users/update/${state.id}`, {
        username: newUsername,
        name: newName,
        city: newCity,
        website: newWebsite,
        coverImage: imgUrl,
      });
      console.log('datos del usuario por ser actualizado: username:', newUsername, ' name:', newName, ' city: ',newCity, ' website: ', newWebsite, ' coverImage: ', imgUrl);

     // Actualiza los datos del usuario en el contexto
     const updatedUser = await fetchUpdatedUserData();

     console.log('Successful changes desde handleclick!');
     navigate('/myprofile', { state: { updatedUser } });
     return;
   } catch (err) {
     console.log(err);
     console.log('An error has occurred while uploading desde handleclick!');
   }
 };


  return (
    <div className="containerForm">
      <h2>Edit Your User</h2>
      <form onSubmit={handleClick}>
            <div className="containerInputs">
              <input
                type="text"
                value= {newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
          
              <input
                type="text"
                value= {newName}
                onChange={(e) => setNewName(e.target.value)}
              />

              <div className='city'>
                <label htmlFor="city">Your City/Country</label>
                <input
                  id="city"
                  type="text"
                  value= {newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                />
              </div>

              <div className="website">
                <label htmlFor="website">Your Website</label>
                <input
                  id= "website"
                  type="text"
                  value= {newWebsite}
                  onChange={(e) => setNewWebsite(e.target.value)}
                />
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
            
            <button type="submit">Update User</button>
      </form>
    </div>
  )
};
  
export default UpdateProfile;