import Link from "../re-useable/link"
import UserPic from "../../assets/images/user.jpg" 
import BgPic from "../../assets/images/mda-bg.png" 
function userView(props) {
  return (
    <div className="user-view">
      <div className="background">
        <img alt={"background"} style={{width: "100%"}} src={BgPic} />
      </div>
      <Link url="/user">
        <img
          alt="user name"
          className="circle"
          src={UserPic}
        />
      </Link>
      <Link url="/name">
        <span className="white-text name">{props.title}</span>
      </Link>
      <Link url="/email">
        <span className="white-text email">{props.email}</span>
      </Link>
    </div>
  );
}

export default  userView;