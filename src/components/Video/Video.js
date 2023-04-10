import './Video.scss';

function Video(props) {
    const {video, image} = props
    return (
        <div className='hero__container'>
            <video className='hero__video' poster={image} type="video/mp4" controls></video>
        </div>
    );
}

export default Video;