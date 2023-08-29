import React from 'react'
import './createPost.css'

const CreatePost: React.FC = () => {
    return (
        <form>
           <div class="container-post" >
                <div class="div-createPost">
                  Create post
                </div>

               <div class="title-post">
                 <label>Title</label>
                 <input type="text" name="titlePost"/>
               </div>

               <div class="category-post">
                 <label> What is your post about?</label>
                  <select name="themes" id="themes">
                     <option value="select">- Select -</option>
                     <option value="ghost-theme"> Ghosts</option>
                     <option value="Witchcraft"> Witchcraft</option>
                     <option value="Demons">Demons</option>
                     <option value="Mythological"> Mythological</option>
                     <option value="Past Life Regression">Past Life Regression</option>
                     <option value="Shadow People">Shadow People</option>
                     <option value="Fairy Folklore">Fairy Folklore</option>
                     <option value="Premonitions and Prophecies">Premonitions and Prophecies</option>
                     <option value="Zombies">Zombies</option>
                     <option value="Black Magic">Black Magic</option>
                     <option value="Vudu Magic">Vudu Magic</option>
                     <option value="Tulpas">Tulpas</option>
                   </select>
               </div>

               <div class="content-post">
                 <label>Write your paranormal story:</label>
                 <textarea name="content-post" id="" cols="30" rows="5"></textarea>
               </div>

               <div class="submit">
                 <button class="Submit">
                   <a class="Submit" href="register.html">
                      Submit
                   </a> 
                 </button>
                </div>
            </div>
       </form>
    )
};
export default CreatePost