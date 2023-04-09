import './Header.scss';

function Header() {
    return (
    <>
        <nav className="nav">
            <div className="nav__box1">
                <a href="">
                    <img className="nav__logo" src="../../Assets/Logo/BrainFlix-logo.svg" alt="BrainFlix Logo"></img>
                </a>
            </div>
            <div className="nav__box2">
                <form className='nav__form' novalidate>
                    <div className="nav__upload">
                        <input className="nav__upload__type" type="text" name="fullName" placeholder="Search" required/>
                        <img className='nav__pic' src='../../Data/Images/Mohan-muruge.jpg'></img>
                    </div>
                    <button className="nav__upload__button" type="submit">UPLOAD</button>
                    <img className='nav__pic2' src='../../Data/Images/Mohan-muruge.jpg'></img>
                </form>
            </div>
        </nav>
    </>
    );
}

export default Header;