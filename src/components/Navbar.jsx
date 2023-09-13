import React from 'react'
import styled from 'styled-components'
import foodYummy from "../assets/FoodYummy.png"

export default function Navbar() {
  return (
    <Nav>
        <div className="brand">
            <img src={foodYummy} alt="" />
            <div className="toogle"></div>
        </div>
        <ul className="links">
            <li>
                <a href="#home" className='active'>Home</a>
            </li>
            <li>
                <a href="#services" >Our Services</a>
            </li>
            <li>
                <a href="#portfolio" >Portfolio</a>
            </li>
            <li>
                <a href="#Testimonials" >Testimonials</a>
            </li>
            <li>
                <a href="#products" >Products</a>
            </li>
            <li>
                <a href="#newsletter" >Newsletter</a>
            </li>
        </ul>
    </Nav>
  )
}

const Nav = styled.nav``;