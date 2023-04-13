import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoHighlights from './components/VideoHighlights/VideoHighlights';
import VideoComments from './components/VideoComments/VideoComments';
import VideoFormComment from './components/VideoFormComment/VideoFormComment';
import FooterVideos from './components/FooterVideos/FooterVideos';
import videoData from './Assets/Data/video-details.json';
import { useState, useEffect } from 'react';
import CommentCount from './components/CommentCount/CommentCount';
import { Routes, Route, useParams} from 'react-router-dom';
import Upload from './Pages/Upload';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';

const apiKey = "?api_key=%3D=9a240e0e-3f3e-4ee4-9e74-a63463faa2f9";

const baseURL = "https://project-2-api.herokuapp.com";

const vid = "/videos/";

const defaultVideo = {
  "id": "1af0jruup5gu",
  "title": "BMX Rampage: 2018 Highlights",
  "channel": "Red Cow",
  "image": "https://i.imgur.com/l2Xfgpl.jpg",
  "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
  "views": "1,001,023",
  "likes": "110,985",
  "duration": "4:01",
  "video": "https://project-2-api.herokuapp.com/stream",
  "timestamp": 1545162149000,
  "comments": [
      {
          "name": "Micheal Lyons",
          "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed.",
          "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          "likes": 0,
          "timestamp": 1545162149000
      },
      {
          "name": "Gary Wong",
          "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          "likes": 0,
          "timestamp": 1544595784046
      },
      {
          "name": "Theodore Duncan",
          "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
          "likes": 0,
          "timestamp": 1542262984046
      }
  ] 
  }


function App() {

  const [mainVideo, setMainVideo] = useState(defaultVideo);
  const [id, setId] = useState();

  useEffect(() => {
    if(!id) {
      axios.get(baseURL+vid+'84e96018-4022-434e-80bf-000ce4cd12b8'+apiKey).then((response) => {
      setMainVideo(response.data);
      }) 
    }else {
      axios.get(baseURL+vid+`${id}`+apiKey).then((response) => {
      setMainVideo(response.data);
      }) 
    }
},[id]);

  // const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
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
            </>
          }/>
        <Route path='/video/:videoID' element={
          <>
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
            </>
          }/>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
    );
  }

export default App;




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