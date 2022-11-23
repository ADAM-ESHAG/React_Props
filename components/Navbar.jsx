import logo from "/images/AirBnb.png"

export default function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="AirBnb_logo" className="nav--logo" />
        </nav>
    )
}