import Link from "../re-useable/link"
const FloatingButton = ({state,showPic}) => {
  return (
    <div className="fixed-action-btn">
      <Link className="btn-floating btn-large indigo" onClick={()=>{
        showPic(!state);
      }}>
        <i className="large material-icons">remove_red_eye</i>
      </Link>
    </div>
  );
};

export default FloatingButton;
