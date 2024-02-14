import {Link} from "react-router-dom";

import "./header.css";

export const Header = () => {
  return <div className="header">
    <Link to="/" >PRODUCTS</Link>
    <div className="header-right">
    <Link to="/">HOME</Link>
    <Link to="/add">URUN EKLE</Link>
    </div>
 </div>
}
