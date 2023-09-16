import {  useContext, useEffect, useState } from "react";
import { makeRequest } from "../../../axios";
import { AuthContext } from "../../../context/authContext";
import { IPost } from "../../../models/IPost";
import ProfileBase from "../profile-base/ProfileBase";
import { IUser } from "../../../models/IUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import '../profile.scss';
import { useLocation } from 'react-router-dom';

const MyProfile = () => {
  const location = useLocation();
  const updatedUser = location.state?.updatedUser;  


  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useContext(AuthContext);

  const dataUser = updatedUser? updatedUser : currentUser; //si en location pasé actualizaciones de usuario uso esas, sino, el current
  const idUser = updatedUser? updatedUser.id : currentUser;
  
  console.log('id del usuario: ', idUser);

  useEffect(() => {
    makeRequest.get(`/posts/user/${idUser}`)
      .then((response) => {
        const responseData = response.data;

        if (responseData && responseData.arrayPosts) {
          setUserPosts(responseData.arrayPosts);
          setLoading(false);
          return;
        }
        console.error("La respuesta no contiene 'arrayPosts'.");
        setLoading(false);
      }).catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [idUser]);
  return (
    <div className="containerMyProfile">
      <NavLink to={`/updatemyprofile/${idUser}`} state={dataUser as IUser} className="linkEditProfile">
        <FontAwesomeIcon icon={faPen} className='enable-icon'/>
      </NavLink>
      <ProfileBase userPosts={userPosts} loading={loading} user={dataUser as IUser} />
    </div>
    
  );
};

export default MyProfile;