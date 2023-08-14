import React from 'react';
import './styles/main-content.css';
import './styles/posts-content.css'; 
import './styles/secondary-posts.css'; 
import NavBar from './components/nav/NavBar';
import AsideLeft from './components/aside-left/AsideLeft';
import SecondaryPost from './components/secondary-post/SecondaryPost';
import PrincipalPost from './components/principal-post/PrincipalPost';
import AsideRight from './components/aside-right/AsideRight';
import Footer from './components/footer/Footer';


const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />

      <div className="main-content">
          <AsideLeft />

          <div className="posts-content">
              <PrincipalPost
                  userImage='https://toppng.com/uploads/preview/animated-black-cat-gif-115497838102ojcyei5lu.png'
                  title="I think my Grandma is eating peoplesadasdsadsadjkhsakdjhsakjdhsakjdhsakj"
                  text={
                    <>
                      So, picture this: I'm strolling down Road 16° one evening, and guess what catches my eye? Yup, the infamous Spooky House. You know, the one everyone's been talking about forever? Creepy vibes all around, let me tell you.
                      <br />
                      <br />
                      As I get closer, I'm getting all the goosebumps. Moonlight's doing its thing, casting freaky shadows all over the place. It's like I'm in a horror movie or something. And guess what? I swear I saw something—like a see-through shape—just drift past a window. Cue the freakout.
                      <br />
                      <br />
                      Now, I'm standing there, torn between booking it and sticking around for more weirdness. I can't lie, I take a step closer. Curiosity's got a real tight grip on me, you know? I peek through the window, and it's all quiet, except for some owl in the distance doing its thing.
                      <br />
                      <br />
                      So, did I really spot a Poltergeist? Beats me. But lemme tell you, whether it was some ghostly action or just my mind playing tricks, that Spooky House on Road 16° definitely left its mark. It's one of those stories you can't shake off, and it's got me wondering what other supernatural stuff might be out there. Crazy, right?
                    </>
                  }
                  userName="Tomas Perez"
                  userTime="13 hours ago"
                  comments={2}
                  likes={5}
                  views={15}
                  imagePost="https://cdn.vox-cdn.com/uploads/chorus_image/image/45707818/cannibalsinbrazil.0.0.jpg"
                /> 
          
              <div className="secondary-posts">
                <SecondaryPost
                  title="Scary House In Road 16°. I think i saw a Poltergeist. Do yall think i should go inside?"
                  text={
                    <>
                      So, picture this: I'm strolling down Road 16° one evening, and guess what catches my eye? Yup, the infamous Spooky House. You know, the one everyone's been talking about forever? Creepy vibes all around, let me tell you.
                      <br />
                      <br />
                      As I get closer, I'm getting all the goosebumps. Moonlight's doing its thing, casting freaky shadows all over the place. It's like I'm in a horror movie or something. And guess what? I swear I saw something—like a see-through shape—just drift past a window. Cue the freakout.
                      <br />
                      <br />
                      Now, I'm standing there, torn between booking it and sticking around for more weirdness. I can't lie, I take a step closer. Curiosity's got a real tight grip on me, you know? I peek through the window, and it's all quiet, except for some owl in the distance doing its thing.
                      <br />
                      <br />
                      So, did I really spot a Poltergeist? Beats me. But lemme tell you, whether it was some ghostly action or just my mind playing tricks, that Spooky House on Road 16° definitely left its mark. It's one of those stories you can't shake off, and it's got me wondering what other supernatural stuff might be out there. Crazy, right?
                    </>
                  }
                  userName="Lucas Trobato"
                  userTime="16 hours ago"
                  comments={10}
                  likes={3}
                  views={40}
                  userImage="https://www.irishexaminer.com/cms_media/module_img/1500/750383_1_seoimage16x9_bn-811654_883239b238d14ac9a102e93714a21d27.jpg"
                />

              <SecondaryPost
                title="Wendigo in West Virginia"
                text={
                  <>
                    So, picture this: I'm strolling down Road 16° one evening, and guess what catches my eye? Yup, the infamous Spooky House. You know, the one everyone's been talking about forever? Creepy vibes all around, let me tell you.
                    <br />
                    <br />
                    As I get closer, I'm getting all the goosebumps. Moonlight's doing its thing, casting freaky shadows all over the place. It's like I'm in a horror movie or something. And guess what? I swear I saw something—like a see-through shape—just drift past a window. Cue the freakout.
                    <br />
                    <br />
                    Now, I'm standing there, torn between booking it and sticking around for more weirdness. I can't lie, I take a step closer. Curiosity's got a real tight grip on me, you know? I peek through the window, and it's all quiet, except for some owl in the distance doing its thing.
                    <br />
                    <br />
                    So, did I really spot a Poltergeist? Beats me. But lemme tell you, whether it was some ghostly action or just my mind playing tricks, that Spooky House on Road 16° definitely left its mark. It's one of those stories you can't shake off, and it's got me wondering what other supernatural stuff might be out there. Crazy, right?
                  </>
                }
                userName="Alice Queen"
                userTime="3 hours ago"
                comments={9}
                likes={2}
                views={10}
                userImage="https://i.pinimg.com/474x/f9/f1/e8/f9f1e88e054d9df132dde543473da207.jpg"
                />

                <SecondaryPost
                  title="I think my Grandma is eating people"
                  text={
                    <>
                      So, picture this: I'm strolling down Road 16° one evening, and guess what catches my eye? Yup, the infamous Spooky House. You know, the one everyone's been talking about forever? Creepy vibes all around, let me tell you.
                      <br />
                      <br />
                      As I get closer, I'm getting all the goosebumps. Moonlight's doing its thing, casting freaky shadows all over the place. It's like I'm in a horror movie or something. And guess what? I swear I saw something—like a see-through shape—just drift past a window. Cue the freakout.
                      <br />
                      <br />
                      Now, I'm standing there, torn between booking it and sticking around for more weirdness. I can't lie, I take a step closer. Curiosity's got a real tight grip on me, you know? I peek through the window, and it's all quiet, except for some owl in the distance doing its thing.
                      <br />
                      <br />
                      So, did I really spot a Poltergeist? Beats me. But lemme tell you, whether it was some ghostly action or just my mind playing tricks, that Spooky House on Road 16° definitely left its mark. It's one of those stories you can't shake off, and it's got me wondering what other supernatural stuff might be out there. Crazy, right?
                    </>
                  }
                  userName="Tomas Perez"
                  userTime="13 hours ago"
                  comments={2}
                  likes={5}
                  views={15}
                  userImage="https://cdn.vox-cdn.com/uploads/chorus_image/image/45707818/cannibalsinbrazil.0.0.jpg"
                /> 


              </div>
          </div>
          
          <AsideRight />
      </div>

      <Footer />
    </div>
  );
};

export default App;



