import { IPost } from "../../../models/IPost";
import { IUser } from "../../../models/IUsers";
import Post from "../../posts/post/Post";
import './profile-base.scss';

const ProfileBase: React.FC<{userPosts: IPost[];  loading: boolean; user: IUser}> = ({userPosts, loading, user}) => {
    if (user){ return (
      <div className="profile">
        <div className="images">
          {/* <img src={user.coverImage} alt="" className="cover" />
          <img src={user.profilePic} alt="" className="profilePic" /> */}
            <img
            src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="cover"
            />
            <img
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className="profilePic"
            />
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
  }};
  
  export default ProfileBase;