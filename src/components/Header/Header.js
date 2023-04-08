import './Header.scss';

function Header() {
    return (
    <>
        <nav className="nav">
            <div className="nav__box">
                <a href="">
                    <img className="nav__logo" src="../Data/Logo/BrainFlix-logo.svg" alt="BrainFlix Logo"></img>
                </a>
            </div>
            <div className="nav__box">
                <form className='nav__form' novalidate>
                    <div className="nav__upload">
                        <input className="nav__upload__type" type="text" name="fullName" placeholder="Search" required/>
                        <div className="nav__pic"></div>
                    </div>
                    <button className="nav__upload__button" type="submit">UPLOAD</button>
                </form>
            </div>
        </nav>
    </>
    );
}

export default Header;