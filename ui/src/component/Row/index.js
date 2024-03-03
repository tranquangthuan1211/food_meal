import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import './styles.css';

export default function Row(props) {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(props.request)
            .then((res) => res.json())
            .then((data) => setMenu(data.meals))
            .catch((error) => console.log(error));
    }, [props.request]);
    return (
        <div>
            <h1 className='name_title' style={{ color: '#fff', padding: '10px' }}>{props.title}</h1>
            <div className="content_menu">
                {menu.map((product, index) => (
                    <div key={index} className="content_meal">
                        <img src={product.strMealThumb} alt="anh" className="image_product" />
                        <h1 className="name_product">{product.strMeal}</h1>
                        <p style={{ paddingLeft: '10px' }}>price: {Math.floor(Math.random() * 1000000)} </p>
                        <div className="evaluate" style={{ paddingLeft: '10px' }}>
                            <IoIosStar style={{ color: '#ffc107' }} />
                            <IoIosStar style={{ color: '#ffc107' }} />
                            <IoIosStar style={{ color: '#ffc107' }} />
                            <IoIosStar style={{ color: '#ffc107' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '4px' }}>
                            <button
                                style={{
                                    height: '30px',
                                    backgroundColor: '#ffc107',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#fff',
                                }}
                                onClick={() => props.addToCart(product)}
                            >
                                Add to cart
                            </button>
                            <button
                                style={{
                                    height: '30px',
                                    backgroundColor: '#ffc107',
                                    border: 'none',
                                    borderRadius: '8px',
                                    width: '60px',
                                    color: '#ffff',
                                }}
                                onClick={() => props.handlePay(true)}
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
