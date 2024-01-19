import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Card1 from '../components/Card1'

function Layout() {
    const { pathname } = useLocation()
    return (
        <>
            <div>
                <header>
                    <div>
                    <nav className='flex items-center gap-[15px] lg:px-[80px]'>
                        <Link to="/about">
                            <p style={{color: pathname == "/" ? "red" : "black"}}>About</p>
                        </Link>
                        <Link to="/shop">
                            <p style={{color: pathname == "/" ? "blue" : "black"}}>Shop</p>
                        </Link>
                        <Link to="/contact">
                            <p>Contact</p>
                        </Link>
                        <Link to="/vacanies">
                            <p>Vacanies</p>
                        </Link>
                        <Link to="/bonus">
                            <p>Bonus</p>
                        </Link>
                    </nav>

                    <nav className='bg-[rgb(245,245,245)] flex items-center justify-between lg:px-[80px]'>
                        <Card1 img={"src/assets/card/wok.png"} p={"Пицца"}/>
                        <Card1 img={"src/assets/card/sushi.png"} p={"Суши"}/>
                        <Card1 img={"src/assets/card/soup.png"} p={"Роллы"}/>
                        <Card1 img={"src/assets/card/sale.png"} p={"Сеты"}/>
                        <Card1 img={"src/assets/card/rolle.png"} p={"Work"}/>
                        <Card1 img={"src/assets/card/pizza.png"} p={"Супы"}/>
                        <Card1 img={"src/assets/card/Frame 12 (5).png"} p={"Салаты"}/>
                        <Card1 img={"src/assets/card/drink.png"} p={"Десерты"}/>
                        <Card1 img={"src/assets/card/dessert.png"} p={"Напитки"}/>
                        <Card1 img={"src/assets/card/dessert.png"} p={"Напитки"}/>
                    </nav>
                    </div>
                </header>
                <div>
                    <Outlet />

                </div>
            </div>
            <div>Footer</div>
        </>
    )
}

export default Layout
