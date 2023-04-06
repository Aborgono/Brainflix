import './VideoComments.scss';

function VideoComments(props) {
const comments = props.comments
console.log(comments);

    return (
    <div>
        {comments.map((comment) => {
            return (
                    <div className='comment__container' key={comment.id}>
                        <div className='comment__container__image'></div>
                        <div className='comment__container__details__container'>
                            <div className='comment__container__details__name'>{comment.name}</div>
                            <div className='comment__container__details__timestamp'>{comment.timestamp} </div>
                            <div className='comment__container__details__comment'>{comment.comment} </div>
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