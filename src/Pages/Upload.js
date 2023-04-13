import './Upload.scss';
// import { Link } from 'react-router-dom';

function Upload() {
    return (
        <section className='upload__container'>
            <div className='upload__header__box'>
                <h1 className='upload__header'> Upload Video</h1>
            </div>
            <div className='upload__main__content__box'>
                <div className='upload__main__content__video'>
                    <h3>VIDEO THUMBNAIL</h3>
                </div>
                <div className='upload__main__content__form'>
                    <form id="comment__form-input" className="comment__form-input" novalidate>
                        <div className="comment__pic"></div>
                        <div className="comment__div">
                            <label className="comment__name__type" for="fullName">TITLE YOUR VIDEO</label>
                            <input className="comment__name__text" type="text" name="fullName" placeholder="Add a title to your video" required />
                            <label className="comment__comment" for="comments">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="comment__comment__text" name="comments" id="comments" placeholder="Add a description to your video" required></textarea>
                            <button className="button" type="submit">COMMENT</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='upload__submit__box'>

            </div>
        </section>
    );
}

export default Upload;