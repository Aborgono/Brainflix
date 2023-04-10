import './CommentCount.scss';

function CommentCount(props) {
    const count = props.comments.length;
    return (
    <div className='counter'>
        <p>{count} comments</p>
    </div>
    );
}

export default CommentCount;