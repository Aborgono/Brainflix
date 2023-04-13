import { Link } from 'react-router-dom';
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
                    <h3 className='upload__thumbnail__text'>VIDEO THUMBNAIL</h3>
                    <img className='upload__video' src='../Assets/Images/Upload-video-preview.svg' alt='upload-video' controls></img>
                </div>
                <div className='upload__main__content__form'>
                    <form id="upload__form-input" className="upload__form-input" novalidate>
                        <div className="upload__div">
                            <label className="upload__name__type" for="title">TITLE YOUR VIDEO</label>
                            <input className="upload__name__text" type="text" name="title" placeholder="Add a title to your video" required />
                            <label className="upload__comment" for="description">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload__comment__text" name="description" id="comments" placeholder="Add a description to your video" required></textarea>
                        </div>
                        <div className='upload__submit__box'>
                            <Link className='link' to={'/'}>
                                <button className="upload__button" type="submit">PUBLISH</button>
                            </Link>
                            <button className='cancel__button' type='submit' >CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Upload;