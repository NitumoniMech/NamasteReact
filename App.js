import React from "react";
import ReactDOM from "react-dom/client";

/*const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"Im a h1 tag"),
        React.createElement("h2",{},"Im a h2 tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h2",{},"I'm a h2 tag")]
    )]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                 </ul>   
            </div>
        </div>
    );
};
const ResturantCard =() =>{
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src=""/>

            <h3>Meghna Foods</h3>
        </div>
    )
}
const Body =() => {
    return(
        <div className="body">
            <div className="Seacrh">Search</div>
            <div className="res-container">
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
            </div>
        </div>
    )
};
const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    );
    
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);