import './FooterVideos.scss';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';




function FooterVideos(props) {

    // const apiKey = "?api_key=%3D=9a240e0e-3f3e-4ee4-9e74-a63463faa2f9";
    // const baseURL = "https://project-2-api.herokuapp.com";
    // const vid = "/videos";

    const mainVideo = props.mainVideo
    
    const {videoID} = useParams()

    const [videosArray, setVideosArray] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/videos`).then((response) => {
        setVideosArray(response.data)
        })
    }, []);

    let defaultVideoID = null;

    if(videosArray.length > 0) {
        defaultVideoID = videosArray[0].id;
    }

    const videoToDisplay = videoID || mainVideo.id;

    /* created a constant called filteredvideos which accesses the videoData array and filters each video. The filter is checking whether the
    video id is not equal to the selected video id. if this IS the case, we return the vide0. if this is not the case return nothing */
        const filteredVideos = videosArray.filter((video) => { 
            return video.id !== videoToDisplay
        })

    return (
    <div className='nextVideo__container'>
        <h3 className='nextVideo__header'>NEXT VIDEOS</h3>
        {filteredVideos.map((video) => {
            return (
                <Link to={`/video/${video.id}`}>
                <div className='nextVideo__box'  key={video.id} >
                    <video poster={video.image} className='nextVideo__box__details__image' alt={video.title}></video>
                    <div className='nextVideo__box__details__box'>
                        <div className='nextVideo__box__details__title'>{video.title}</div>
                        <div className='nextVideo__box__details__channel'>{video.channel} </div>
                    </div>
                </div>
                </Link>
                )
            })
        }
    </div>
    );
}

export default FooterVideos;


