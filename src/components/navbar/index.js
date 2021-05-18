import UserView from "../user-view"
import Link from "../re-useable/link"
const Navbar = () => {
  return (
    <div className="container">
      <ul id="slide-out" className="sidenav">
        <li>
          <UserView title="Learn Kannada" email={"kannada@gmail.com"}/>
          </li>
        <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          <li>
            <Link className="collapsible-header">
           <i class="material-icons">arrow_drop_down</i> Pratice</Link>
            <div class="collapsible-body">
              <ul>
                <li><Link url="/Vowels" className="sidenav-close">Vowels</Link></li>
                <li><Link url="/Constents" className="sidenav-close">Constents</Link></li>
                <li><Link url="/Numbers" className="sidenav-close">Numbers</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
        <li>
          <Link url="/" className="sidenav-close">
            Vowels
          </Link>
        </li>
        <li>
          <Link className="sidenav-close" url="/Constents">Constents</Link>
        </li>
        <li>
          <Link className="sidenav-close" url="/Vowels">Vowels</Link>
        </li>
        <li>
          <Link className="sidenav-close" url="/Numbers">Numbers</Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link className="sidenav-close" className="subheader">Share</Link>
        </li>
        <li>
          <Link className="sidenav-close subheader">Help</Link>
        </li>
        <li>
          <Link className="sidenav-close subheader" url="/">
            About
          </Link>
        </li>

      </ul>
      <Link url="/" dataTarget="slide-out" className="sidenav-trigger">
        <i className="material-icons" style={{fontSize:"34px"}}>menu</i>
      </Link>
    </div>
  );
};

export default Navbar;
