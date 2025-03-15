import ReactLogo from '/src/assets/react.svg'

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-name">
          <div className="logo"><img src={ReactLogo} alt="React Logo" /></div>
          <div className="name">REACT</div>
        </div>
        <div className="navlink-container">
          <ul className="navlinks">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
          </ul>
        </div>
      </div>
    </>
  )
}
