import React  from 'react';
import { IconButton, Card } from '@material-ui/core';
import {  ShoppingCart } from '@material-ui/icons';
import RightDrawer from './RightDrawer';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.jpg";
import '../App.css';
import FontIcons from './FontIcons';


const Header = () => {
   
    const links=["/","/men-shoes","/women-shoes","/kids-shoes"];

    return (
        <Card className="header">
            <div className="title">
                <NavLink to="/">
                    <img src="https://graphicsprings.com/wp-content/uploads/2023/04/07846d9036424f00ee3f2d852fb162ba.svg?x40328" alt="Shoe Store" className="logo-image" />
                </NavLink>
            </div>
            <div  className="nav">
                {
                    ["HOME","MEN","WOMEN","KIDS"].map((text,index)=>(
                    <NavLink to={links[index]} key={index} activeClassName="active" end>
                        <FontIcons loc={index}/>
                        <h4>{text}</h4>
                    </NavLink>
                    ))
                }
            </div>
            <div className="cart">
                <NavLink to="/cart"> 
                    <IconButton color="inherit">
            
                            <ShoppingCart fontSize="small"/>
                       
                    </IconButton>
                </NavLink>
                <RightDrawer/>    
            </div>
        </Card>
    )
}

export default Header
