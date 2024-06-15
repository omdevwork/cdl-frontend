import React, { useState } from 'react';
import './faq.css'
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
    const [activeKey, setActiveKey] = useState(null);

    const toggleActiveKey = (key) => {
        if (activeKey === key) {
            setActiveKey(null);
        } else {
            setActiveKey(key);
        }
    };

    const faqs = [
        { question: 'Are these Real Diamonds?', answer: 'Yes, the diamonds are 100% real and authentic quality Natural Diamonds. Your jewelry will come with SGL certificate.' },
        { question: 'What if the ring size doesnt fit me?', answer: '   Dont worry! If you order a ring that doesnt fit you, we will resize the ring for you. Please reach out to us at hello@fieryflair.com.' },
        { question: 'How much time it will take my order to reach me.', answer: 'Handling time of the product is usually 2-3 days. And shipping & delivery time is 3-4 working days.' },
        { question: 'Can I exchange the product bought from your website?', answer: 'Gold & Diamond Jewellery - Yes you can. Any product bought from this website comes with a lifetime exchange guarantee.' },
        { question: 'Can I order a custom design?', answer: 'Please call our Customer Support team and they will be able to help you. You can customize the Jewelry as per your choice.' },
        { question: 'My question is not listed, Need Help!', answer: 'Don’t worry. We will happily answer all your queries and concerns. Just drop us an email at hello@fieryflair.com or Call on +91 70481 41581.' },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Gold Product Faqs</h2>
            <Accordion defaultActiveKey={activeKey} flush>
                {faqs.map((faq, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header onClick={() => toggleActiveKey(index.toString())}>
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <h3 className='mb-0'> {faq.question}</h3>
                                <FontAwesomeIcon icon={activeKey === index.toString() ? faMinus : faPlus} />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>{faq.answer}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
