import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [resultMessage, setResultMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
                setResultMessage('Message sent successfully!');
            }, (error) => {
                console.error('FAILED...', error);
                setResultMessage('Failed to send message.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const handleWeChatClick = () => {
        const weChatId = 'IceFrost-Theny';
        navigator.clipboard.writeText(weChatId)
            .then(() => {
                setResultMessage(`WeChat ID copied to clipboard!`);
                window.open('weixin://', '_blank');
            })
            .catch((err) => {
                console.error('Could not copy text: ', err);
            });
    };

    return (
        <div className="contact-section">
            <h2 className="contact-header">Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        rows="4"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send'}
                </button>
            </form>
            {resultMessage && <p className="result-message">{resultMessage}</p>}
            <div className="contact-icons">
                <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <a href="tel:6809103733">+1 (680) 910 3733</a>
                </div>
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:yuxuancai123@gmail.com">yuxuancai123@gmail.com</a>
                </div>
                <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/yuxuan-cai-499681268/" target="_blank" rel="noopener noreferrer">Yuxuan Cai</a>
                </div>
                <div className="contact-item">
                    <i className="fab fa-weixin"></i>
                    <button onClick={handleWeChatClick} className="wechat-button">Your WeChat ID</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
