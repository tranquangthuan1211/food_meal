import React, { useState } from 'react'
import "./styles.css"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa6';
import { IoSend } from 'react-icons/io5';

export default function Footer() {
    const [displayMessage, setDisplayMessage] = useState(false)
    const handleDisplay = () => {
        setDisplayMessage(!displayMessage);
    };
  return (
    <div className="contact">
                <h1 style={{ color: '#ffc107', textAlign: 'center', fontSize: '5rem' }}>Contact</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <FaFacebook className="icon_contact" />
                    <FaInstagramSquare className="icon_contact" />
                    <IoLogoYoutube className="icon_contact" />
                    <FaFacebookMessenger className="icon_contact" onClick={handleDisplay} />
                </div>
                {displayMessage === true ? (
                    <div className="chat">
                        <div className="message my_message" style={{ width: '100%' }}>
                            <p className="text">hello</p>
                        </div>

                        <div className="message freind_message">
                            <p className="text">hi</p>
                        </div>
                        <div className="message my_message" style={{ width: '100%' }}>
                            <p className="text">hello</p>
                        </div>

                        <div className="message freind_message">
                            <p className="text">hi</p>
                        </div>
                        <div className="message my_message" style={{ width: '100%' }}>
                            <p className="text">hello</p>
                        </div>

                        <div className="message freind_message">
                            <p className="text">hi</p>
                        </div>
                        <div className="input_message">
                            <input placeholder="messenger" className="input_message" />
                            <IoSend style={{ color: '#ffc107', width: '30px', height: '30px' }} />
                        </div>
                    </div>
                ) : null}
                <h1 style={{ textAlign: 'center' }}>Created By Coding TQT | All Rights Reserved</h1>
            </div>
  )
}
