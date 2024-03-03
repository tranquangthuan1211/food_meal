import React, { useState } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { Col, Row } from 'antd';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import Product from './Product';
import GetCookies from '../hooks/getCookies';

const cx = classNames.bind(styles);

export default function Header() {
    const [isFocused, setIsFocused] = useState(false);
    const [visible, setVisible] = useState(false);
    const cateDog = ['corgi', 'alaska', 'pug', 'food', 'implement'];

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleVisible = () => {
        setVisible(!visible);
    };
    console.log(GetCookies('user'));
    return (
        <div>
            <Row className={cx('headerHome')}>
                <Col span={6} className={cx('nameShop')}>
                    Shop Houes
                </Col>
                <Col span={12} className={cx('search')}>
                    <input
                        className={cx('input')}
                        placeholder={isFocused ? '' : 'Shop House'}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                    <CiSearch className={cx('iconSearch')} />
                </Col>
                <Col span={6} className={cx('inforuser')}>
                    {!GetCookies('user') ? (
                        <div className={cx('user')}>
                            <FaRegUser className={cx('iconUser')} />
                            <a href="/">Đăng Nhập</a>
                            <span>/</span>
                            <a href="/"> Đăng Kí</a>
                        </div>
                    ) : (
                        <div>
                            <p className={cx('name_user')}>tran quang thuan</p>
                            <div className={cx('setting_account')}>
                                <div className={cx('triangle')}></div>
                                <div className={cx('infor_user')}>
                                    <h3 className={cx('account')}>Tài khoản</h3>
                                    <h3 className={cx('log_out')}>Đăng xuất</h3>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={cx('cart')}>
                        <FaShoppingCart className={cx('iconCart')} onClick={() => handleVisible()} />
                        <div className={cx('number')}>
                            <p style={{ color: '#fff' }}>0</p>
                        </div>
                    </div>
                </Col>
                <div className={cx('cateDog')}>
                    {cateDog.map((dog) => (
                        <p>{dog}</p>
                    ))}
                </div>
            </Row>
            {visible && <Product />}
        </div>
    );
}
