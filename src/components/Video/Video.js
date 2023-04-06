import './Video.scss';

function Video(props) {
    const {video} = props
    return (
    <div>
        <img src={video}/>
    </div>
    );
}

export default Video;