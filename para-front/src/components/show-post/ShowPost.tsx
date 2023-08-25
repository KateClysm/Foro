import React from 'react';
import { IPost } from '../../models/IPost'; 
import ButtonsPost from '../utilities/buttons-post/ButtonsPost';
import './show-post.css';


/*declaración del componente*/
const ShowPost: React.FC<{ post: IPost }> = ({ post }) => {
    return (
    <>
        <div className="show-post">

            <div className="show-post-user">
            <div className="show-post-user-image" style={{ backgroundImage: `url(${post.userImage})` }}></div>
            <div className="show-post-user-data">
                <div className="user-name">{post.userName}</div>
                <div className="user-time">{post.userTime}</div>
            </div>
            </div>

            <div className="show-post-content">
                <div className="show-post-content-img" style={{ backgroundImage: `url(${post.imagePost})` }}></div>
                <div className="show-post-content-data">
                <div className="show-post-content-data-title"><p className="post-title">{post.title}</p></div>
                <div className="show-post-content-data-text"><p className="post-text">{post.text}</p></div>
                </div>
            </div>

            <ButtonsPost
                comments = {post.comments}
                likes = {post.likes}
                views = {post.views}
            />

        </div>


        <div className="show-coments">
            <div className="show-coments-coment">
                <div className="show-coment-content">
                    <div className="show-post-user">
                        <div className="show-post-user-image" style={{ backgroundImage: `url(${post.userImage})` }}></div>
                        <div className="show-post-user-data">
                            <div className="user-name">{post.userName}</div>
                            <div className="user-time">{post.userTime}</div>
                        </div>
                    </div>

                    <div className="coment">
                        <p className='post-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique ullam porro libero! Eos, excepturi? Saepe placeat accusantium dolores hic! Eaque fugiat ratione nobis at, recusandae quidem commodi. Perferendis, quasi!</p>
                    </div>
                </div>

                <ButtonsPost
                    comments = {post.comments}
                    likes = {post.likes}
                    views = {post.views}
                />
            </div>
            
            <div className="show-coments-coment">
                <div className="show-coment-content">
                    <div className="show-post-user">
                        <div className="show-post-user-image" style={{ backgroundImage: `url(${post.userImage})` }}></div>
                        <div className="show-post-user-data">
                            <div className="user-name">{post.userName}</div>
                            <div className="user-time">{post.userTime}</div>
                        </div>
                    </div>

                    <div className="coment">
                        <p className='post-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique ullam porro libero! Eos, excepturi? Saepe placeat accusantium dolores hic! Eaque fugiat ratione nobis at, recusandae quidem commodi. Perferendis, quasi!</p>
                    </div>
                </div>

                <ButtonsPost
                    comments = {post.comments}
                    likes = {post.likes}
                    views = {post.views}
                />
            </div>

            <div className="show-coments-coment">
                <div className="show-coment-content">
                    <div className="show-post-user">
                        <div className="show-post-user-image" style={{ backgroundImage: `url(${post.userImage})` }}></div>
                        <div className="show-post-user-data">
                            <div className="user-name">{post.userName}</div>
                            <div className="user-time">{post.userTime}</div>
                        </div>
                    </div>

                    <div className="coment">
                        <p className='post-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique ullam porro libero! Eos, excepturi? Saepe placeat accusantium dolores hic! Eaque fugiat ratione nobis at, recusandae quidem commodi. Perferendis, quasi!</p>
                    </div>
                </div>

                <ButtonsPost
                    comments = {post.comments}
                    likes = {post.likes}
                    views = {post.views}
                />
            </div>
        </div>
    </>
  );
};

export default ShowPost;