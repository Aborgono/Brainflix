import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Upload.scss';
import axios from 'axios';
// import { Link } from 'react-router-dom';

function Upload() {

    const baseUrl = 'http://localhost:8080'
    const [allVideos, setAllVideos] = useState([])
    const [individualUpload, setIndividualUpload] = useState({
        title: '',
        description: '',
        channel: 'Anonymous',
        image: 'https://hips.hearstapps.com/hmg-prod/images/small-fuffy-dog-breeds-1623362663.jpg?crop=1.00xw:0.753xh;0,0.0719xh&resize=1200:*'
    });

        useEffect(() => {
            axios.get(`${baseUrl}/videos`).then((response) => {
                setAllVideos(response.data);
            });
        }, [baseUrl]);
        
        const getAllVideos = () => {
            axios.get(`${baseUrl}/videos`).then((response) => {
                setAllVideos(response.data);
            });
        }
        
        const handleUploadVideo = (e) => {
            // e.preventDefault()
            axios.post(`${baseUrl}/upload`, individualUpload).then((res) => {
                console.log(res);
            })
        }

        const handleChange = (event) => {
            console.log(individualUpload, event.target.name, event.target.value);
            setIndividualUpload(val => ({...val, [event.target.name]: event.target.value}));
        }
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
                            <input onChange={handleChange} className="upload__name__text" type="text" name="title" placeholder="Add a title to your video" required />
                            <label className="upload__comment" for="description">ADD A VIDEO DESCRIPTION</label>
                            <input onChange={handleChange} className="upload__comment__text" name="description" id="comments" placeholder="Add a description to your video" required></input>
                        </div>
                        <div className='upload__submit__box'>
                            <Link className='link' to={'/'}>
                                <button onClick={() => handleUploadVideo()} className="upload__button" type="submit">PUBLISH</button>
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

// onSubmit={handleUploadVideo}