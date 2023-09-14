import React from 'react';
import { useState } from "react";
import { makeRequest } from '../../axios';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateUser = () => {


  const navigate = useNavigate();
  const state = useLocation().state;
  
  const [username, setUsername] = useState(state.username);
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const [city, setCity] = useState(state.city);
  const [website, setWebsite] = useState(state.website);
  const [userImage, setUserImage] = useState(state.profilePic);
  const [baner, setBaner] = useState(state.coverImage)

  const uploadUserImage = async (userImage: File | null) => {
    if (userImage) {
      const formData = new FormData();
      formData.append("file", userImage);
      try {
        const response = await makeRequest.post("/upload", formData);
        return response.data;
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    }
    return null;
  };

  const uploadBaner = async (baner: File | null) => {
    if (baner) {
      const formData = new FormData();
      formData.append("file", baner);
      try {
        const response = await makeRequest.post("/upload", formData);
        return response.data;
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    }
    return null;
  };

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const profilePicUrl = await uploadUserImage(userImage);
      const coverImageUrl = await uploadBaner(baner);

      const updatedUser = {
        username,
        name,
        email,
        city,
        website,
        profilePic: userImage? profilePicUrl : state.profilePic,
        coverImage: baner? coverImageUrl : state.coverImage,
      };

      await makeRequest.put(`/users/update/${state.id}`, updatedUser);
      navigate("/myprofile");
    } catch (error) {
      console.error("Error updating user:", error);
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
                      value= {username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                
                    <input
                      type="text"
                      placeholder="name"
                      value= {name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="email"
                      value= {email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="city"
                      value= {city}
                      onChange={(e) => setCity(e.target.value)}
                    />

                    <input
                      type="text"
                      placeholder="website"
                      value= {website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />

                
                    <label className="file" htmlFor="userImage">Upload User Image</label>
                    <input
                    style={{ display: "none" }}
                    type="file"
                    id="userImage"
                    onChange={(e) => {
                        if (e.target.files) {
                          setUserImage(e.target.files[0]);
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
                            setBaner(e.target.files[0]);
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