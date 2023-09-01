import React, { useState } from 'react';
import './createPost.css';
import axios from 'axios';
import { IPost } from '../../models/Ipost';

const CreatePost: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newPost, setNewPost] = useState<IPost>({
    title: '',
    text: '',
    typePost: ["All"],
    id: 0,
  });

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleModalContainerClick = (e: any) => e.stopPropagation();

  const sendPostToBackend = (post: IPost) => {
    axios.post('http://localhost:3001/apiforum/posts', post)
      .then(response => {
        console.log('Post enviado con éxito:', response.data);
        closeModal();
      })
      .catch(error => {
        console.error('Error al enviar el post:', error);
      });
  };

  const handleUpdatePostClick = () => {
    sendPostToBackend(newPost); // Envía el objeto newPost al backend
  };

  return (
    <>
      <div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <form className='modal-container' onClick={handleModalContainerClick}>
          <button onClick={closeModal} className='modal-close'>X</button>
          <div className="editor">
            <input
              type="text"
              className='post-title border-container'
              placeholder='Title...'
              id="title"
              value={newPost.title} // Captura el valor del título
              onChange={e => setNewPost({ ...newPost, title: e.target.value })}
            />
            <textarea
              id='textEditor'
              className='text-area'
              placeholder='Write your post here...'
              rows={6}
              value={newPost.text} // Captura el valor del contenido del post
              onChange={e => setNewPost({ ...newPost, text: e.target.value })}
            />
            <fieldset className="item border-container">
              <legend className='post-title'>Category</legend>
              <label htmlFor="ghosts">
                <input type="radio" name="cat" value='ghosts' id="ghosts" /> Ghosts
              </label>
              <label htmlFor="witchcraft">
                <input type="radio" name="cat" value='witchcraft' id="witchcraft" /> Witchcraft
              </label>
              <label htmlFor="demons">
                <input type="radio" name="cat" value='demons' id="demons" /> Demons
              </label>
            </fieldset>
          </div>
          <button onClick={handleUpdatePostClick} className='post-btn'>
            Update Post
          </button>
        </form>
      </div>

      <div className='openModal'>
        <button onClick={openModal} className='openModal-btn'>
          Create Post
        </button>
      </div>
    </>
  );
};

export default CreatePost;



{/* <input className='post-title border-container' type="text" name="title" id="title" placeholder='Title...' />
                    
<ReactQuill id='textEditor' theme='snow' modules={modules} value={value} onChange={setValue} />

<div className="item border-container">
  <fieldset>
    <legend className='post-title'>Category</legend>
    <label htmlFor="ghosts">
      <input type="radio" name="cat" value='ghosts' id="ghosts" /> Ghosts
    </label>
    <label htmlFor="witchcraft">
      <input type="radio" name="cat" value='witchcraft' id="witchcraft" /> Witchcraft
    </label>
    <label htmlFor="demons">
      <input type="radio" name="cat" value='demons' id="demons" /> Demons
    </label>
    <label htmlFor="mythological">
      <input type="radio" name="cat" value='mythological' id="mythological" /> Mythological
    </label>
    <label htmlFor="past_life_regression">
      <input type="radio" name="cat" value='past_life_regression' id="past_life_regression" /> Past Life Regression
    </label>
    <label htmlFor="shadow_people">
      <input type="radio" name="cat" value='shadow_people' id="shadow_people" /> Shadow People
    </label>
    <label htmlFor="fairy_folklore">
      <input type="radio" name="cat" value='fairy_folklore' id="fairy_folklore" /> Fairy Folklore
    </label>
    <label htmlFor="premonitions_and_prophecies">
      <input type="radio" name="cat" value='premonitions_and_prophecies' id="premonitions_and_prophecies" /> Premonitions and Prophecies
    </label>
    <label htmlFor="zombies">
      <input type="radio" name="cat" value='zombies' id="zombies" /> Zombies
    </label>
    <label htmlFor="black_magic">
      <input type="radio" name="cat" value='black_magic' id="black_magic" /> Black Magic
    </label>
    <label htmlFor="vudu_magic">
      <input type="radio" name="cat" value='vudu_magic' id="vudu_magic" /> Vudu Magic
    </label>
    <label htmlFor="sleep_paralysis">
      <input type="radio" name="cat" value='sleep_paralysis' id="sleep_paralysis" /> Sleep Paralysis
    </label>
    <label htmlFor="vampires">
      <input type="radio" name="cat" value='vampires' id="vampires" /> Vampires
    </label>

    </fieldset>
  </div>  */}