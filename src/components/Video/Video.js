import './Video.scss';

function Video(props) {
    const video = props.video
    return (
    <div>
        <img src={video}/>
    </div>
    );
}

export default Video;