import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoHighlights from './components/VideoHighlights/VideoHighlights';
import VideoComments from './components/VideoComments/VideoComments';
import VideoFormComment from './components/VideoFormComment/VideoFormComment';
import FooterVideos from './components/FooterVideos/FooterVideos';
import videoData from './Assets/Data/video-details.json';
import { useState } from 'react';
import CommentCount from './components/CommentCount/CommentCount';
import { Routes, Route} from 'react-router-dom';
import Upload from './Pages/Upload';
import axios from "axios";
import { apiKey, baseURL, videos} from './components/Axios/Axios';


function App() {

  const [selectedVideo, setSelectedVideo] = useState();

  axios.get(baseURL + videos + apiKey).then((res) => {
    console.log(res.data);
    setSelectedVideo(res.data[0])
  })
  // useEffect(async function () {
  //   const videos = await axios.get(baseURL + videos + apiKey)
  //   console.log(videos);
  //   setSelectedVideo(videos[0])
  // }, [])


  return (
    <div>
      {selectedVideo && 
      <>
      <Header />
      <Video image={selectedVideo.image} video={selectedVideo.video} />
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
      </div>
  
      <Routes>
        <Route path='/'></Route>
        <Route path='/video/:videotitle' element={<App video={selectedVideo} />}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
      </Routes>
      </>
      }
    </div>
    );
  }

export default App;
