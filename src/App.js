import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams} from 'react-router-dom';
import Upload from './Pages/Upload';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';



function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/video/:videoID' element={<Main/>}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
    );
  }

export default App;



// <>
//             <Video image={mainVideo.image} video={mainVideo.video} />
//               <div className='desktop'>
//                 <div className='desktop__container'>
//                   <VideoHighlights
//                     title={mainVideo.title}
//                     channel={mainVideo.channel}
//                     description={mainVideo.description}
//                     views={mainVideo.views}
//                     likes={mainVideo.likes}
//                     timestamp={mainVideo.timestamp}
//                   />
//                   <CommentCount comments={mainVideo.comments} />
//                   <VideoFormComment />
//                   <VideoComments comments={mainVideo.comments} />
//                 </div>
//                 <FooterVideos setId={setId}  mainVideo={mainVideo} setMainVideo={setMainVideo}/>
//               </div>
//             </>


{/* <>
            <Video image={mainVideo.image} video={mainVideo.video} />
              <div className='desktop'>
                <div className='desktop__container'>
                  <VideoHighlights
                    title={mainVideo.title}
                    channel={mainVideo.channel}
                    description={mainVideo.description}
                    views={mainVideo.views}
                    likes={mainVideo.likes}
                    timestamp={mainVideo.timestamp}
                  />
                  <CommentCount comments={mainVideo.comments} />
                  <VideoFormComment />
                  <VideoComments comments={mainVideo.comments} />
                </div>
                <FooterVideos setId={setId} mainVideo={mainVideo} setMainVideo={setMainVideo}/>
              </div>
            </> */}


{/* <Video image={selectedVideo.image} video={selectedVideo.video} />
      <div className='desktop'>
        <div className='desktop__container'>
          <VideoHighlights
            title={selectedVideo.title}
            channel={selectedVideo.channel}
            description={selectedVideo.description}
            views={selectedVideo.views}
            likes={selectedVideo.likes}
            timestamp={selectedVideo.timestamp}
          />
          <CommentCount comments={selectedVideo.comments} />
          <VideoFormComment />
          <VideoComments comments={selectedVideo.comments} />
        </div>
        <FooterVideos selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
      </div> */}