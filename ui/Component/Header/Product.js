import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const sx = classNames.bind(styles);
export default function Product() {
    return (
        <div className={sx('quantityProduct')}>
            <div className={sx('inforProduct')}>
                <img
                    src="https://zoipet.com/wp-content/uploads/2022/07/Giong-cho-Bichon-Frise.jpg"
                    alt="im"
                    className={sx('imageProduct')}
                />
                <div>
                    <p className={sx('nameProduct')}>cho canh dep</p>
                    <div className={sx('action')}>
                        <p className={sx('addProduct')}>-</p>
                        <p className={sx('addProduct')}>1</p>
                        <p className={sx('addProduct')}>+</p>
                    </div>
                </div>
            </div>
            <div className={sx('inforProduct')}>
                <img
                    src="https://zoipet.com/wp-content/uploads/2022/07/Giong-cho-Bichon-Frise.jpg"
                    alt="im"
                    className={sx('imageProduct')}
                />
                <div>
                    <p className={sx('nameProduct')}>cho canh dep</p>
                    <div className={sx('action')}>
                        <p className={sx('addProduct')}>-</p>
                        <p className={sx('addProduct')}>1</p>
                        <p className={sx('addProduct')}>+</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
