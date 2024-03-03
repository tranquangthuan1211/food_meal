import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { CiSearch } from 'react-icons/ci';
import { GrCart } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import Cookies from 'js-cookie';
import { FaUserCircle } from 'react-icons/fa';
import {useNavigate} from "react-router-dom"
import Debounce from '../../Hook/DebounceHook';
import { FaChevronDown } from "react-icons/fa6";
import './style.css';

export default function Header(props) {
    const navigate = useNavigate()
    const [cookieUser, setCookieUser] = useState(undefined);
    const [showItemCart, setShowItemCart] = useState(false);
    const [quantity, setQuantity] = useState('');
    const [showOut, setShowOut] = useState(false);
    const [food, setFood] = useState("")
    const [resultSearch, setResultSearch] = useState([])
    const [showLogin, setShowLogin] = useState(false)
    const [name, setName] = useState("")
    const handleShowPay = () => {
        props.handPay(true)
        setShowItemCart(false)
    }
    const handleShowItemCart = () => {
        setShowItemCart(!showItemCart);
    };
    const handleShowOut = () => {
        setShowOut(!showOut);
    };
    const handleShowLogin = () => {
        setShowLogin(!showLogin);
    };
    const handleLogout = () => {
        setCookieUser(undefined);
        Cookies.remove("userId")
    }
    useEffect(() => {
        setQuantity(props.cart.length);
    }, [props.cart.length]);
    useEffect(() => {
        setCookieUser(Cookies.get("userId"))
    },[])
    useEffect(() => {
        setName(Cookies.get('Name') )
    },[name])
    const newFood = Debounce(food,500)
    useEffect(() => {
        if (newFood.length > 0 && newFood.length <= 1) { 
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${newFood}`)
                .then((res) => res.json())
                .then((resultSearch) => setResultSearch(resultSearch.meals))
                .catch((error) => console.log(error))
        }else if (newFood.length > 1) {
                fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${newFood}`)
                .then((res) => res.json())
                .then((resultSearch) => setResultSearch(resultSearch.meals))
                .catch((error) => console.log(error))
        }
    },[newFood])
    const handleSearch = async () => {
        if(!food) {
            return;
        }
        try {
            const respone = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)

            const valueSearch = await respone.json()
            console.log(valueSearch);

        }
        catch (error) {
            console.error('Error during login:', error);
          }
    };

    return (
        <div className='content' >
            <div className="content_header">
                <Row style={{ width: '100%' }}>
                    <Col span={4}>
                        <img
                            src="https://codingcirculate-restaurant-design.on.fleek.co/static/media/logo.bbdaaa34654aff804cc3.png"
                            alt="logo"
                            className="logo"
                        />
                    </Col>

                    <Col className="content_input" span={12} style={{ display: 'flex', alignItems: 'center' }}>
                        <input 
                            className="input_search" 
                            placeholder="search here" 
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                            />
                        <CiSearch className='icon_search' style={{ width: '30px', height: '30px' }} onClick={() => handleSearch()}/>
                    </Col>

                    <Col span={8} className="content_user">
                        {cookieUser === undefined ? (
                            <div>
                                <div className='content_infor' style={{ marginLeft: '10px' }}>
                                    <button
                                        className="button"
                                        style={{
                                            backgroundColor: '#ffc107',
                                            border: 'none',
                                            height: '30px',
                                            width: '100px',
                                            borderRadius: '8px',
                                            marginLeft: '10px',
                                            marginRight: '10px',
                                        }}
                                        onClick={() => navigate('/login')}
                                    >
                                        Login
                                    </button>
                                    <button
                                        className="button"
                                        style={{
                                            backgroundColor: '#ffc107',
                                            border: 'none',
                                            height: '30px',
                                            width: '100px',
                                            borderRadius: '8px',
                                            marginLeft: '10px',
                                            marginRight: '10px',
                                        }}
                                        onClick={() => navigate('/register')}
                                    >
                                        register
                                    </button>
                                </div>
                                <FaChevronDown
                                    style={{color: '#fff', width: '20px', height: '20px', marginLeft: '10px' }}
                                    className='icon_down'
                                    onClick={handleShowLogin}
                                />
                                {showLogin ? ( 
                                    <div className='showLogin'>
                                        <button
                                            className="button"
                                            style={{
                                                backgroundColor: '#ffc107',
                                                border: 'none',
                                                height: '30px',
                                                width: '130px',
                                                borderRadius: '8px',
                                                marginBottom:"2px"
                                            }}
                                            onClick={() => navigate('/login')}
                                        >
                                            Login
                                        </button>
                                        <button
                                            className="button"
                                            style={{
                                                backgroundColor: '#ffc107',
                                                border: 'none',
                                                height: '30px',
                                                width: '130px',
                                                borderRadius: '8px',
                                                
                                            }}
                                            onClick={() => navigate('/register')}
                                        >
                                            register
                                        </button>
                                    </div>
                                )
                                : 
                                null}
                            </div>
                        ) : (
                            <div className='user' >
                                <div className="infor_user" onClick={handleShowOut}>
                                    <FaUserCircle
                                        onClick={handleShowOut}
                                        style={{ color: '#fff', width: '30px', height: '30px', marginLeft: '10px' }}
                                        className='icon_user'
                                    />
                                    <h3 onClick={handleShowOut} className="name_user">{name}</h3>
                                </div>
                                {showOut ? ( 
                                    <div className='out'>
                                        <button className='button_out' onClick={handleLogout}>log out</button>
                                        <button className='button_out'>setting</button>
                                    </div>
                                )
                                : 
                                null}
                            </div>
                        )}

                        <div onClick={handleShowItemCart} style={{ position: 'relative' }}>
                            <GrCart
                                style={{
                                    color: '#fff',
                                    width: '30px',
                                    height: '30px',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                            />
                            <div className="number_product">
                                <span>{quantity}</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                {showItemCart === true ? (
                    <div className="cart_product">
                        {props.cart.map((product, index) => (
                            <div className="infor_item" key={index}>
                                <img src={product.strMealThumb} alt="food" className="image_food" />
                                <div>
                                    <h1 style={{color:"#000"}} className="name_product">{product.strMeal}</h1>
                                    <p style={{color:"#000"}}>{product.price}</p>
                                </div>

                                <IoMdClose
                                    style={{ width: '20px', height: '20px', fontWeight: '500' }}
                                    onClick={() => props.moveTocart(index)}
                                />
                            </div>
                        ))}
                        <div className="bill" onClick={handleShowPay}>
                            <h1>Total:{props.total} </h1>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className='selection'>
                <h2 className='choose' onClick={() => navigate('/')}>Home</h2>
                <h2 className='choose' onClick={() => navigate('/cooking')}>Cooking</h2>
                <h2 className='choose' onClick={() => navigate('/review')}>Review</h2>
            </div>
            {newFood.length > 0 ? (
                <div className='result_search'>
                    {resultSearch.map((item,index) => (
                        <div key={index} onClick={() => navigate(`/cooking/${item.idMeal}`)}> 
                            <div className='item' key={index}>
                                <img src={item.strMealThumb} alt='anh' className='image_item'/>
                                <div>
                                    <h3 className='name_item' style={{color:"#000"}}>{item.strMeal}</h3>
                                    <p className='address_item' style={{color:"#000"}}>{item.strArea}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null }

        </div>
    );
}
