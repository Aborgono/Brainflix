import './VideoFormComment.scss';

function VideoFormComment () {
    return (
        <div className='comment__form__container'>
            <div className='comment__form__picture'></div>
            <form id="comment__form-input" className="comment__form-input" novalidate>
                    <div className="comment__form__pic"></div>
                    <div className="comment__form__div">
                    <p className='comment__form__header'>JOIN THE CONVERSATION</p>
                    <textarea className="comment__form__comment__text" name="comments" id="comments" placeholder="Add a new comment" required></textarea>
                    <button type="submit" className="comment__form__button">COMMENT</button>
                    </div>
            </form>
        </div>
    );
}

export default VideoFormComment;