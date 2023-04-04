import './Header.scss';

function Header() {
    return (
    <>
        <nav className="nav">
            <div className="nav__box">
                <a href="">
                    <img className="nav__logo" src="./" alt="BrainFlix Logo"></img>
                </a>
            </div>
            <div className="nav__box">
                <form novalidate>
                    <div className="nav__upload">
                        <input className="nav__upload__type" type="text" name="fullName" placeholder="Search" required/>
                        <button className="nav_upload__button" type="submit">UPLOAD</button>
                    </div>
                </form>
            </div>
            <div className="nav__pic"></div>
        </nav>
    </>
    );
}

export default Header;