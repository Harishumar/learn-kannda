import Link from "react-router-dom/Link"
const Ancher = ({url,children,className,onClick,dataTarget}) => {
    if(dataTarget){
        return <Link className={className} to={url} onClick={onClick} data-target={dataTarget}>{children}</Link>
    }else{
        return <Link className={className} to={url} onClick={onClick}>{children}</Link>
    }

   
}
 
export default Ancher;