import './VideoComments.scss';

function VideoComments(props) {
const comments = props.comments
console.log(comments);

    return (
    
    <div className='comment__container'>
        {comments.map((comment) => {

        const dateObj = new Date(comment.timestamp);

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
                    <div className='comment__box' key={comment.id}>
                        <div className='comment__box__image'></div>
                        <div className='comment__box__details'>
                            <div className='comment__box__details__text'>
                                <div className='comment__box__details__name'>{comment.name}</div>
                                <div className='comment__box__details__timestamp'>{newDate} </div>
                            </div>
                            <div className='comment__box__details__comment'>{comment.comment} </div>
                            <br></br>
                        </div>
                    </div>
                )
            })
        }
    </div>
    );
}

export default VideoComments;
