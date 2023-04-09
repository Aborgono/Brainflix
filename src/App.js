import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoHighlights from './components/VideoHighlights/VideoHighlights';
import VideoComments from './components/VideoComments/VideoComments';
import VideoFormComment from './components/VideoFormComment/VideoFormComment';
import FooterVideos from './components/FooterVideos/FooterVideos';
import videoData from './Assets/Data/video-details.json';
import { useState } from 'react';


function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  return (
    <div>
      <Header />
      <Video video={selectedVideo.image} />
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
          <VideoFormComment />
          <VideoComments comments={selectedVideo.comments} />
        </div>
        <FooterVideos selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
      </div>
    </div>
  );
}

export default App;
