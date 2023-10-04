import Troll from '/images/TrollFace.png';

const Header = ()=> {
    return(
        <div className='header-container'>
            <div className='troll-icon'>
                <img src={Troll} alt="Troll face" />
                <span>Meme Generator</span>
            </div>
            <div className='react-course'>
                React Course - project 3
            </div>
        </div>
    )
}


export default Header;