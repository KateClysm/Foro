import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import ProfileBase from "./profile-base/ProfileBase";
import { useParams } from 'react-router-dom';
import { IUser } from "../../models/IUsers";
import './profile.scss';
import { IPost } from "../../models/IPosts";

const Profile = () => {
  
    const { id } = useParams();
    const [userPosts, setUserPosts] = useState<IPost[]>([]);
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadUser = async () => {
          try {
            const response = await makeRequest.get(`/users/find/${id}`);
            const userData = response.data;
            if (userData) {
              setUser(userData);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        const loadUserPosts = async () => {
          try {
            const response = await makeRequest.get(`/posts/user/${id}`);
            const responseData = response.data;
    
            if (responseData && responseData.arrayPosts) {
              setUserPosts(responseData.arrayPosts);
              setLoading(false);
            } else {
              console.error("La respuesta no contiene 'arrayPosts'.");
              setLoading(false);
            }
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        };
    
        Promise.all([loadUser(), loadUserPosts()])
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      }, [id]);


  return (
    <ProfileBase userPosts={userPosts} loading={loading} user={user as IUser}/>
  );
};

export default Profile;