import logo from './assets/logo.png'

export default function Header() {
    return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div className="container">
            <a className="navbar-brand" href="/">
                <div className="d-flex">
                    <img src={logo} alt="logo" className="ar-2" />
                    <div>ProjectMGMT</div>
                </div>
            </a>
        </div>
    </nav>
    )
}