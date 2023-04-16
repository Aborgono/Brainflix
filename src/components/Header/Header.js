import './Header.scss';
import buttonIcon from '../../Assets/Icons/upload.svg';
import brainFlixLogo from '../../Assets/Logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <>
        <nav className="nav">
            <div className="nav__box1">
                <a href="">
                    <img className="nav__logo" src={brainFlixLogo} alt="BrainFlix Logo"></img>
                </a>
            </div>
            <div className="nav__box2">
                <form className='nav__form' noValidate>
                    <div className="nav__upload">
                        <input className="nav__upload__type" type="text" name="fullName" placeholder="Search" required/>
                        <div className='nav__pic'></div>
                    </div>
                    <Link className='link' to={'/upload'}>
                        <button className="nav__upload__button" type="submit"> <img className='nav__upload__button--icon' src={buttonIcon} alt='upload-icon' /> UPLOAD</button>
                    </Link>
                    <div className='nav__pic2'></div>
                </form>
            </div>
        </nav>
    </>
    );
}

export default Header;