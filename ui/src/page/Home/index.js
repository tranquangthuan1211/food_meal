import React, { useEffect, useState } from 'react';
import './styles.css';
import Row from '../../component/Row';
import request from '../../component/request';
import Cookies from 'js-cookie';
import Header from '../../component/Header';
import Pay from '../../component/pay';
import Footer from '../../component/footer';

export default function Home({ cart,total, addToCart, moveTocart }) {
    const[showPay, setShowPay] = useState(false)

    const handShowPay = (value) => {
        setShowPay(value)
    }
    useEffect(() => {
        setTimeout(() => {
            setShowPay(false)
        },5000)
    },[showPay])
    const addTocart = async (product) => {
        if(Cookies.get("userId") !== undefined) {
            //console.log(newproduct)
            await addToCart({...product, price:Math.floor(Math.random() * 1000000)});
        }else {
            alert("please login to add food !!!")
        }
    }
    return (
        <div className="content_home">
            <Header cart={cart} moveTocart={moveTocart} total = {total} handPay={(value) => handShowPay(value)}/>
            <div className="header">
                <h1 className='title' style={{ fontSize: '8rem', color: '#fff' }}>FRESH FOOD </h1>
                <h1 className='title' style={{ fontSize: '8rem', color: '#fff' }}>IN THE MORNING</h1>
                <p style={{ fontSize: '1.6rem', color: '#fff' }}>
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat Labore, Sint Cupiditate Distinctio
                    Tempora Reiciendis.
                </p>
                <button style={{ width: '160px', backgroundColor: '#ffc107', height: '40px', borderRadius: '8px' }}>
                    Get Yours Now
                </button>
            </div>
            <div className="menu">
                <h1 style={{ color: '#ffc107', textAlign: 'center', fontSize: '5rem' }}>Menu</h1>
                <Row request={request.apiSeaFood} title={'Sea Food'} addToCart={addTocart} handlePay = {(value) => handShowPay(value)} />
                <Row request={request.apiDessert} title={'Dessert'} addToCart={addTocart} handlePay = {(value) => handShowPay(value)}/>
                <Row request={request.apiBreakfast} title={'Breakfast'} addToCart={addTocart} handlePay = {(value) => handShowPay(value)}/>
                <Row request={request.apiPasta} title={'Pasta'} addToCart={addTocart} handlePay = {(value) => handShowPay(value)}/>
                <Row request={request.apivegetable} title={'Vegetable'} addToCart={addTocart} handlePay = {(value) => handShowPay(value)}/>
            </div>
            <Footer/>
            {showPay ? (
                <div className = "pay">
                    <Pay buy = {showPay}/>
                </div>
            ): null}
        </div>
    );
}
