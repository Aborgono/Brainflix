import './CommentCount.scss';

function CommentCount(props) {
    const count = props.comments ? props.comments.length : 0 ;
    return (
    <div className='counter'>
        <p>{count} comments</p>
    </div>
    );
}

export default CommentCount;