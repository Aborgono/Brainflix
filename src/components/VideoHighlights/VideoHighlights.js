import './VideoHighlights.scss';

function VideoHighlights(props) {
    const {title, channel, description, views, likes, timestamp} = props

    const dateObj = new Date(timestamp);

        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        if (month < 10) {
            month = "0" + month
        } 
        let day = dateObj.getUTCDate();
        if (day < 10) {
            day = "0" + day
        } 
        const year = dateObj.getUTCFullYear();

        const newDate = month + "/" + day + "/" + year

    return (
    <>
        <section className="video__container">
            <div className='video__box'>
                <div className="video__header">
                    <h1>{title}</h1>
                </div>
                <div className='video__details'>
                    <div className='video__details__box'>
                        <h3 className='video__details__item'>By: {channel}</h3>
                        <p className='video__details__item'>{newDate}</p>
                    </div>
                    <div className='video__details__box'>
                        <p className='video__details__item'>{views}</p>
                        <p className='video__details__item'>{likes}</p>
                    </div>
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