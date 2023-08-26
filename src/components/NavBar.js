import { useState } from "react";
import "../css/NavBar.css"

const NavBar = () => {
  let [selected, setSelected] = useState({"Home": true, "Medications": false, "Compare": false})

  return (
    <div>
        <div className="NavigationBar"> 
            <NavBarItem item="Medications" selected={selected} setSelected={setSelected} />
            <NavBarItem home={true} item="Home" selected={selected} setSelected={setSelected} />
            <NavBarItem item="Compare" selected={selected} setSelected={setSelected} />
        </div>
    </div>
  );
};

const NavBarItem = ({item, home=false, selected=false, setSelected}) => {

    let className = "NavigationBarItem";
    if(home === true) {
        className += " Home"

    }

    if(selected[item] === true) {
        className += " Selected"

    }

    return (
        <button className={className} onClick={() => {
            let newSelected = {...selected}
            Object.keys(selected).forEach(v => newSelected[v] = false)
            newSelected[item] = true;
            setSelected(newSelected)
        }}> {item} </button>

    );

}

export default NavBar;
