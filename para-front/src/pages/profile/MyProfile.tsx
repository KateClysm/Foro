import { useContext, useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { IPost } from "../../models/IPost";
import ProfileBase from "./profile-base/ProfileBase";
import { IUser } from "../../models/IUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import './profile.scss';

const MyProfile = () => {
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useContext(AuthContext);
  const idUser = currentUser?.id;

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
      <NavLink to={`/updateuser/${idUser}`} state={currentUser} className="linkEditProfile">
        <FontAwesomeIcon icon={faPen} className='enable-icon'/>
      </NavLink>
      <ProfileBase userPosts={userPosts} loading={loading} user={currentUser as IUser} />
    </div>
    
  );
};

export default MyProfile;