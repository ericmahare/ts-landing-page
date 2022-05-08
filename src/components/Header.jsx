import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';
// import "react-simple-typewriter/dist/index.css"
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src="./images/logo/ts_logo.png" alt="logo" className="logo"/>
        </div>
        <div>
          <i class="fa-solid fa-bars-staggered bars"></i>
        </div>
      </nav>
        <div className="img-container">
          <img src="./images/solutions.svg" alt="about-img" />
        </div>
      <div className="header-info">
        <h1 className='heading'>Toskins Solutions</h1>
        <p>We &nbsp; 
        <span>
          <Typewriter
            loop
            cursorStyle='_'
            typeSpeed = {200}
            deleteSpeed = {100}
            delaySpeed = {1000}
            words = {['Design','Create','Develop']}
          />
        </span>
        &nbsp; your idea</p>
      </div>
    </header>
  )
}

export default Header;