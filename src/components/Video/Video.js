import './Video.scss';

function Video(props) {
    const {video} = props
    return (
    <div className='hero__container'>
        <img className='hero__video' src={video}/>
    </div>
    );
}

export default Video;