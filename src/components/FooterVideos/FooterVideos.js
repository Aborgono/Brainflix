import './FooterVideos.scss';
import videos from '../../Assets/Data/videos.json'
import videoData from '../../Assets/Data/video-details.json';
import { Link } from 'react-router-dom';



function FooterVideos(props) {
    const setSelectedVideo = props.setSelectedVideo
    const selectedVideo = props.selectedVideo
    /* created a constant called filteredvideos which accesses the videoData array and filters each video. The filter is checking whether the
    video id is not equal to the selected video id. if this IS the case, we return the vide0. if this is not the case return nothing */
    const filteredVideos = videos.filter((video) => { 
        return video.id !== selectedVideo.id
    })
    /* onClick runs the updated selected video function that takes in the video id of the video we clicked (as a parameter). the update selected
    video function filters through the videoData array and looks to match the id of the video we clicked with any of the videos in that array.
    when that id is found we run the set selected video and change it to our const newSelectedVideo that is the video we clicked. If
    you go to the apps, the selected video changes */
    function updateSelectedVideo (newID) {
        const newlySelectedVideo = videoData.filter((video) => {
            return video.id === newID
        })
        setSelectedVideo(newlySelectedVideo[0])
    }
    return (
    <div className='nextVideo__container'>
        <h3 className='nextVideo__header'>NEXT VIDEOS</h3>
        {filteredVideos.map((video) => {
            return (
                    <Link to={`video/${video.title}`}>
                        <div className='nextVideo__box' key={video.id} onClick={() => {updateSelectedVideo(video.id)} }>
                            {/* <div className='nextVideo__box__image'> */}
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