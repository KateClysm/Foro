import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPost } from "../../../models/IPost";
import { IUser } from "../../../models/IUsers";
import Post from "../../posts/post/Post";
import './profile-base.scss';
import { faBuildingUser, faGlobe } from "@fortawesome/free-solid-svg-icons";
const ProfileBase: React.FC<{userPosts: IPost[];  loading: boolean; user: IUser}> = ({userPosts, loading, user}) => {

  console.log(user);

  if(user){

    return (
      <div className="profile">
        <div className="images">

          <img src={`../../../../public/upload/${user.coverImage}`} alt="" className="cover" />
          {/* <img src={`../../../../public/postsPictures/${user.profilePic}`} alt="" className="profilePic" /> */}
        </div>
      
        <div className="info-posts">
          <div className="user-info">
            <h3 className="user-info-username">{user.username}</h3>
            <p className="user-info-name">{user.name}</p>
            <div className="user-info-city-website">
              {user.city &&(
                <div className="container-website">
                  <FontAwesomeIcon icon={faBuildingUser} />
                  <p>city:{user.city}</p>
               </div>
              )}
                     
              {user.website &&(
                <div className="container-website">
                 <FontAwesomeIcon icon={faGlobe} className="icon-website"/>
                  <p className="user-website">{user.website}</p>
               </div>
              )}
            </div>
          </div>
          
          <p className="my-posts">Posts</p>
          <div className="padding-divider">
              <div className="divider"></div>
          </div>

          <div className="info-posts-container">
            {loading ? (
            <p>Loading posts...</p>
            ) : userPosts.length > 0 ? (
              userPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </div>
      </div>
    );
  }


};
  
  export default ProfileBase;