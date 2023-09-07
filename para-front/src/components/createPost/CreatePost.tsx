import React, { useState } from 'react';
// import './createPost.css'
import './create-post.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


// armar modal + react-quill + funcionalidad de create post => 

const CreatePost: React.FC = () => {
  const [value, setValue] = useState('');

  // react-quill edition values
  const modules = {
    toolbar: [
      ['image'],
    ],
  }

  // modal function
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  // stop propagation of the close onclick function
  const handleModalContainerClick = (e:any) => e.stopPropagation();




    return (
      <>
          <div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <article className='modal-container'>
              <button onClick={closeModal} className='modal-close'>X</button>

              <div className="editor" onClick={handleModalContainerClick}>
                <input className='title-post' type="text" name="title" id="title" placeholder='Title...' />
                <ReactQuill id='textEditor' theme='snow' modules={modules} value={value} onChange={setValue} />

                <div className="item">
                  <fieldset className='item item-fieldset'>
                    <legend>Category</legend>
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
                  </div> 
              </div>
               {/* condicionar con una funcion, cuando se envia el post, el modal se cierra y la vista se refresca */}
              <button onClick={closeModal} className='post-btn'>Update Post</button>
            </article>
          </div>

        <div className='openModal'>
          <button onClick={openModal} className='openModal-btn'>Create Post</button>
        </div>
      </>
    )
};

export default CreatePost;