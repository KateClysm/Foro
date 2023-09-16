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
  const [newEmail, setNewEmail] = useState(state.email);
  const [newCity, setNewCity] = useState(state.city || '');
  const [newWebsite, setNewWebsite] = useState(state.website || '');
  // const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const upload = async (file: File | null) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await makeRequest.post("/upload", formData);
        console.log("Image uploaded successfully desde el front:", res.data);
        return res.data; 
        // return res.data.filename;
      }
      console.error("No file selected.");
      // Si no se selecciona un archivo, no modificamos el estado 'file'
      return null;
    } catch (error) {
      console.error("Error uploading image desde el front:", error);
      // Si ocurre un error, también puedes devolver null o manejar el error según tus necesidades
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
        email: newEmail,
        city: newCity,
        website: newWebsite,
        coverImage: imgUrl, // Asegúrate de que imgUrl contenga el nombre de la imagen
      });
      console.log('datos del usuario por ser actualizado: username:', newUsername, ' name:', newName, ' email:', newEmail, ' city: ',newCity, ' website: ', newWebsite, ' coverImage: ', imgUrl);

      console.log('Successful changes desde handleclick!');      
      navigate("/myprofile");
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

              <input
                type="text"
                value= {newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
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

          
              {/* <label className="file" htmlFor="userImage">Upload User Image</label>
              <input
              style={{ display: "none" }}
              name="profilepic"
              type="file"
              id="userImage"
              onChange={(e) => {
                  if (e.target.files) {
                    setNewProfilePic(e.target.files[0]);
                  }
                }}
              /> */}

              {/* <label className="file" htmlFor="baner">Upload User Baner</label>
                <input
                style={{ display: "none" }}
                name="file"
                type="file"
                id="baner"
                onChange={(e) => {
                    if (e.target.files) {
                      setNewCoverImage(e.target.files[0]);
                    }
                  }}
                />
            </div> */}

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