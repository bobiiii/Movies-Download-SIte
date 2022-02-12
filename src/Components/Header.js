import react, { useEffect, useRef, useState } from "react";

const Header = () => {
    const ref = useRef()
    let [state,setState] = useState(false)
    let toggle=()=>{
        setState(oldState => !oldState)
    }
    console.log(state);
    let ab = <div ref={ref} className="btnd"><ul><li>Netflix</li>
    <li>Bollywood</li>
    <li>Hollywood</li>
    </ul></div>



useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (state && ref.current && !ref.current.contains(e.target)) {
        setState(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [state])
    return (
        <div className="main">
        <div className="header">
            <div className="header-menu">
                <h2>MainStream</h2>
                <button className="btn" onClick={toggle}>☰</button>
            </div>
                {state ? ab : null}
        </div>
        </div>
    )
}
export default Header;