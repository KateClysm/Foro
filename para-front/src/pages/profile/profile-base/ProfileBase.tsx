import { IPost } from "../../../models/IPost";
import { IUser } from "../../../models/IUsers";
import Post from "../../posts/post/Post";
import './profile-base.scss';
const ProfileBase: React.FC<{userPosts: IPost[];  loading: boolean; user: IUser}> = ({userPosts, loading, user}) => {

  console.log(user);

  return (
      <div className="profile">
        <div className="images">

          <img src={`../../../../public/upload/${user.coverImage}`} alt="" className="cover" />
          <div className="post-content-img" style={{ backgroundImage: `url(../../../../public/upload/${user.coverImage})` }}></div>
          {/* <img src={`../../../../public/postsPictures/${user.profilePic}`} alt="" className="profilePic" /> */}
        </div>
      
        <div className="info-posts">
          <div className="user-info">
            <h3 className="user-info-username">{user.username}</h3>
            <p className="user-info-name">{user.name}</p>
            {user.city &&(
              <p>city:{user.city}</p>
            )}
            {user.website &&(
              <p>{user.website}</p>
            )}
          </div>
          
          <p className="my-posts">Posts</p>
          <div className="padding-divider">
              <div className="divider"></div>
          </div>

          <div className="info-posts-container-posts">
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
  };
  
  export default ProfileBase;