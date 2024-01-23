import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

  const [changeNavColor, setChangeNavColor] = useState();

  const handleColor = () => {
    if(window.scrollY >= 30) {
      setChangeNavColor(true)
    }else {
      setChangeNavColor(false)
    }
  }

  useEffect(() => {
  
    window.addEventListener('scroll', handleColor);

    return (() =>
    window.removeEventListener('scroll', handleColor)
    )
  },[])

  return (
    <nav className={changeNavColor ? '' : 'navbar_color_change'}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
