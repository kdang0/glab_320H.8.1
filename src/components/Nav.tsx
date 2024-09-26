import { Link } from "react-router-dom";
import {useContext} from 'react';
import { ThemeContext } from "../App";
export default function Nav() {
   const theme=useContext(ThemeContext);
   const className = `nav nav-${theme}`
  return (
    <div className={className}>
        <Link to="/">
        <div>CRYPTO PRICES</div>
        </Link>
        <Link to="/currencies">
        <div>CURRENCIES</div>
        </Link>
  </div>
  )
}
