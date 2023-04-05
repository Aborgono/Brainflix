import './VideoHighlights.scss';

function VideoHighlights(props) {
    const {title, channel, description, views, likes, timestamp } = props

    return (
    <>
        <section className="video__container">
            <div className='video__box'>
                <div className="video__header">
                    <h1>{title}</h1>
                </div>
                <div className='video__details'>
                    <h3>{channel}</h3>
                    <p>{timestamp}</p>
                    <p>{views}</p>
                    <p>{likes}</p>
                </div>
            </div>
            <div className='video__box'>
                <p className='video__description'>{description}</p>
            </div>
        </section>
    </>
    );
}

export default VideoHighlights;