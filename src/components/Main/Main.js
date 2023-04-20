import Video from '../Video/Video'
import VideoHighlights from '../VideoHighlights/VideoHighlights';
import VideoComments from '../VideoComments/VideoComments';
import VideoFormComment from '../VideoFormComment/VideoFormComment';
import FooterVideos from '../FooterVideos/FooterVideos';
import CommentCount from '../CommentCount/CommentCount';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, Navigate } from 'react-router-dom';


// const apiKey = "?api_key=%3D=9a240e0e-3f3e-4ee4-9e74-a63463faa2f9";

// const baseURL = "https://project-2-api.herokuapp.com";

// const vid = "/videos";
// export {apiKey, baseURL, vid}


function Main() {
    const [mainVideo, setMainVideo] = useState([]);

    let { videoID } = useParams();

        useEffect(() => {
        if(!videoID) {
            axios.get(`http://localhost:8080/videos/`).then((response) => {
                axios.get(`http://localhost:8080/videos/` + response.data[0].id).then((response) => {
                    setMainVideo(response.data);
                    }) 
            })
        }else {
            axios.get(`http://localhost:8080/videos/` + videoID).then((response) => {
            setMainVideo(response.data);
        })
            } 

    },[videoID]);

    return (
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
                <FooterVideos mainVideo={mainVideo} setMainVideo={setMainVideo} />
            </div>
        </>
    )
}

export default Main