import React from 'react';


import commentsIcon from '../../assets/comments.png';
import likesIcon from '../../assets/likes.png';
import seenIcon from '../../assets/seen.png';
import './showPost.css';


/*Datos que este componente recibe*/
interface ShowPostProps {
  title: string;
  text: React.ReactNode;
  userImage?:string;
  userName: string;
  userTime: string;
  comments: number;
  likes: number;
  views: number;
  imagePost: string;
}



/*declaración del componente*/
const ShowPost: React.FC<ShowPostProps> = ({
  title,
  text,
  userImage,
  userName,
  userTime,
  comments,
  likes,
  views,
  imagePost
}) => {
  return (
    <>
        <div className="show-post">

            <div className="show-post-user">
            <div className="show-post-user-image" style={{ backgroundImage: `url(${userImage})` }}></div>
            <div className="show-post-user-data">
                <div className="user-name">{userName}</div>
                <div className="user-time">{userTime}</div>
            </div>
            </div>

            <div className="show-post-content">
                <div className="show-post-content-img" style={{ backgroundImage: `url(${imagePost})` }}></div>
                <div className="show-post-content-data">
                <div className="show-post-content-data-title"><p className="post-title">{title}</p></div>
                <div className="show-post-content-data-text"><p className="post-text">{text}</p></div>
                </div>
            </div>

            <div className="show-post-buttons">
                <button className="show-post-button button-text">
                    <img src={commentsIcon} alt="Icon Coments" />
                    {comments} Comments
                </button>
                <button className="show-post-button button-text">
                    <img src={likesIcon} alt="Icon Likes" />
                    {likes} Likes
                </button>
                <button className="show-post-button button-text">
                    <img src={seenIcon} alt="Icon Seen" />
                    {views} Views
                </button>
            </div>

        </div>

        <div className="show-coments">
            <div className="show-coments-coment">
                <div className="show-coment-content">
                    <div className="show-post-user">
                        <div className="show-post-user-image" style={{ backgroundImage: `url(${userImage})` }}></div>
                        <div className="show-post-user-data">
                            <div className="user-name">{userName}</div>
                            <div className="user-time">{userTime}</div>
                        </div>
                    </div>

                    <div className="coment">
                        <p className='post-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique ullam porro libero! Eos, excepturi? Saepe placeat accusantium dolores hic! Eaque fugiat ratione nobis at, recusandae quidem commodi. Perferendis, quasi!</p>
                    </div>
                </div>

                <div className="show-post-buttons">
                    <button className="show-post-button button-text">
                        <img src={commentsIcon} alt="Icon Coments" />
                        {comments} Comments
                    </button>
                    <button className="show-post-button button-text">
                        <img src={likesIcon} alt="Icon Likes" />
                        {likes} Likes
                    </button>
                    <button className="show-post-button button-text">
                        <img src={seenIcon} alt="Icon Seen" />
                        {views} Views
                    </button>
                </div>
            </div>

            <div className="show-coments-coment">
                <div className="show-coment-content">
                    <div className="show-post-user">
                        <div className="show-post-user-image" style={{ backgroundImage: `url(${userImage})` }}></div>
                        <div className="show-post-user-data">
                            <div className="user-name">{userName}</div>
                            <div className="user-time">{userTime}</div>
                        </div>
                    </div>

                    <div className="coment">
                        <p className='post-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique ullam porro libero! Eos, excepturi? Saepe placeat accusantium dolores hic! Eaque fugiat ratione nobis at, recusandae quidem commodi. Perferendis, quasi!</p>
                    </div>
                </div>

                <div className="show-post-buttons">
                    <button className="show-post-button button-text">
                        <img src={commentsIcon} alt="Icon Coments" />
                        {comments} Comments
                    </button>
                    <button className="show-post-button button-text">
                        <img src={likesIcon} alt="Icon Likes" />
                        {likes} Likes
                    </button>
                    <button className="show-post-button button-text">
                        <img src={seenIcon} alt="Icon Seen" />
                        {views} Views
                    </button>
                </div>
            </div>
            
        </div>
    </>
  );
};

export default ShowPost;