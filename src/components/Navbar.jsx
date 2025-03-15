export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-name">
          <div className="logo"><h1>Logo</h1></div>
          <div className="name">React</div>
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
