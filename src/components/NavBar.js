import { useState } from "react";
import "../css/NavBar.css"
import { useNavigate } from "react-router";


const NavBar = () => {
  let [selected, setSelected] = useState({"Home": true, "Medications": false, "Compare": false})

  return (
    <div className="NavigationBarContainer">
        <div className="NavigationBar"> 
            <NavBarItem item="Medications" selected={selected} setSelected={setSelected} route="/medications" />
            <NavBarItem home={true} item="Home" selected={selected} setSelected={setSelected} route="/"/>
            <NavBarItem item="Compare" selected={selected} setSelected={setSelected} route="/compare"/>
        </div>
        <button style={{borderRadius: "9999px"}}>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
        </button>
    </div>
  );
};

const NavBarItem = ({item, home=false, selected=false, setSelected, route}) => {

    let className = "NavigationBarItem";
    if(home === true) {
        className += " Home"

    }

    if(selected[item] === true) {
        className += " Selected"

    }
    const navigate = useNavigate()

    const handleButton = () => {
        navigate(route);

    }

    return (
        <button className={className} onClick={() => {

            let newSelected = {...selected}
            Object.keys(selected).forEach(v => newSelected[v] = false)
            newSelected[item] = true;
            setSelected(newSelected)
            handleButton()
        }}> {item} </button>

    );

}

export default NavBar;
