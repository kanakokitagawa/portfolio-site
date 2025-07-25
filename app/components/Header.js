import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Logo />
          
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="/about" className="nav-link px-2" style={{ color: '#d2d93a' }}>About me</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#2d2d93' }}>
                Works
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" href="/works/logo" style={{ color: '#5a9d9e' }}>Logo Design</Link></li>
                <li><Link className="dropdown-item" href="/works/video" style={{ color: '#b28dd4' }}>Video Production</Link></li>
                <li><Link className="dropdown-item" href="/works/interior" style={{ color: '#29abb7' }}>Interior Design</Link></li>
              </ul>
            </li>
          </ul>

          <div className="col-12 col-lg-auto d-flex justify-content-center align-items-center">
            <a href="https://www.instagram.com/music_kanako/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="mailto:kanakanarose@gmail.com" className="text-white me-3">
              <i className="bi bi-envelope-fill fs-3"></i>
            </a>
            <a href="https://note.com/kanakinaa" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-file-text-fill fs-3"></i>
            </a>
            <a href="https://admin.thebase.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="bi bi-cart-fill fs-3"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
