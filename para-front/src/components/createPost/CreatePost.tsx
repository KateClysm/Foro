import React, { useState } from 'react';
import './create-post.scss'
import { makeRequest } from '../../axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';


const CreatePost: React.FC = () => {
  const state = useLocation().state;
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState(state?.description || '');
  const [title, setTitle] = useState(state?.title || '');
  const [category, setCategory] = useState(state?.category || '');
  const navigate = useNavigate();
  

  // modal function
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  // stop propagation of the close onclick function
  const handleModalContainerClick = (e:any) => e.stopPropagation();


  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file ? file : '');
      const res = await makeRequest.post('/upload', formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick =  async (e:any) => {
    e.preventDefault();

    const imageUrl = upload();
    try {
      state ? await makeRequest.put(`/posts/${state.id}`, {
        title, description, category, img:file ? imageUrl : ''
      })
        : await makeRequest.post(`/posts`, {
          title, description, category, img: file ? imageUrl : '', createAt: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        });
        navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <>
          <div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <article className='modal-container'>
              <button onClick={closeModal} className='modal-close'>X</button>

              <div className="editor" onClick={handleModalContainerClick}>
                <input className='title-post' type="text" value={title} placeholder='Title...' onChange={e => setTitle(e.target.value)} />
                <textarea name="description" id="textEditor" cols={30} rows={10} value={description} onChange={e => setDescription(e.target.value)} placeholder="What's your freaky history to me?" ></textarea>
                <label htmlFor="file">
                  <input className='inputFile' type="file" name="filePost" onChange={e => e.target.files ? setFile(e.target.files[0]) : null} />
                </label>

                <div className="item">
                  <fieldset className='item'>
                    <legend>Category</legend>
                    <label htmlFor="ghosts">
                      <input type="radio" checked={category === 'ghosts'} name="cat" value='ghosts' id="ghosts" onChange={e => setCategory(e.target.value)} /> Ghosts
                    </label>
                    <label htmlFor="witchcraft">
                      <input type="radio" checked={category === 'witchcraft'} name="cat" value='witchcraft' id="witchcraft" onChange={e => setCategory(e.target.value)} /> Witchcraft
                    </label>
                    <label htmlFor="demons">
                      <input type="radio" checked={category === 'demons'} name="cat" value='demons' id="demons" onChange={e => setCategory(e.target.value)} /> Demons
                    </label>
                    <label htmlFor="mythological">
                      <input type="radio" checked={category === 'mythological'} name="cat" value='mythological' id="mythological" onChange={e => setCategory(e.target.value)} /> Mythological
                    </label>
                    <label htmlFor="past_life_regression">
                      <input type="radio" checked={category === 'pastLifeRegression'} name="cat" value='pastLifeRegression' id="past_life_regression" onChange={e => setCategory(e.target.value)} /> Past Life Regression
                    </label>
                    <label htmlFor="shadow_people">
                      <input type="radio" checked={category === 'shadowPeople'} name="cat" value='shadowPeople' id="shadow_people" onChange={e => setCategory(e.target.value)} /> Shadow People
                    </label>
                    <label htmlFor="fairy_folklore">
                      <input type="radio"checked={category === 'fairyFolklore'} name="cat" value='fairyFolklore' id="fairy_folklore" onChange={e => setCategory(e.target.value)} /> Fairy Folklore
                    </label>
                    <label htmlFor="premonitions_and_prophecies">
                      <input type="radio" checked={category === 'premonitionsAndProphecies'} name="cat" value='premonitionsAndProphecies' id="premonitions_and_prophecies" onChange={e => setCategory(e.target.value)} /> Premonitions and Prophecies
                    </label>
                    <label htmlFor="zombies">
                      <input type="radio"checked={category === 'zombies'} name="cat" value='zombies' id="zombies" onChange={e => setCategory(e.target.value)} /> Zombies
                    </label>
                    <label htmlFor="black_magic">
                      <input type="radio" checked={category === 'blackMagic'} name="cat" value='blackMagic' id="black_magic" onChange={e => setCategory(e.target.value)} /> Black Magic
                    </label>
                    <label htmlFor="vudu_magic">
                      <input type="radio" checked={category === 'vuduMagic'} name="cat" value='vuduMagic' id="vudu_magic" onChange={e => setCategory(e.target.value)} /> Vudu Magic
                    </label>
                    <label htmlFor="sleep_paralysis">
                      <input type="radio" checked={category === 'sleepParalysis'} name="cat" value='sleepParalysis' id="sleep_paralysis" onChange={e => setCategory(e.target.value)} /> Sleep Paralysis
                    </label>
                    <label htmlFor="vampires">
                      <input type="radio" checked={category === 'vampires'} name="cat" value='vampires' id="vampires" onChange={e => setCategory(e.target.value)} /> Vampires
                    </label>

                    </fieldset>
                  </div> 
              </div>
              <button onClick={handleClick} className='post-btn'>Update Post</button>
            </article>
          </div>

        <div className='openModal'>
          <Link className="link" to="/?edit=2">
            <button onClick={openModal} className='openModal-btn'>Create Post</button>
          </Link>
        </div>
      </>
    )
};

export default CreatePost;