import React, { useState } from 'react';
import './knowledge.css';
import knowledge1 from '../../assest/knowledge1.png'
import knowledge2 from '../../assest/knowledge2.png'
import knowledge3 from '../../assest/knowledge3.png'
import knowledge4 from '../../assest/knowledge4.png'
const Knowledge = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const testimonials = [
        {
            image: knowledge1,
            name: '9 Reasons Why Your Wedding is Incomplete Without Diamond Wedding Bands!',
            title: '9 Reasons Why Your Wedding is Incomplete Without Diamond Wedding Bands!9  Wedding...', 
        },
        {
            image: knowledge2,
            name: '9 Reasons Why Your Wedding is Incomplete Without Diamond Wedding Bands!',
            title: '9 Reasons Why Your Wedding is Incomplete Without Diamond Wedding Bands!9  Wedding...', 
        },
        {
            image: knowledge3,
            name: '9 Reasons Why Your Wedding is Incomplete Without Diamond Wedding Bands!',
            title: '9 Reasons Why Your Wedding is Incomplete Without Diamond Wedding Bands!9  Wedding...', 
        },
        {
            image: knowledge4,
            name: '9 Reasons Why Your Wedding is Incomplete Without Diamond Wedding Bands!',
            title: '9 Reasons Why Your Wedding is Incomplete Without Diamond Wedding Bands!9  Wedding...', 
        },
        
        
    ];

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    const currentTestimonials = testimonials.slice(startIndex, endIndex);

    return (
        <div className="container mt-5">
            <div className="row knowledgetitle justify-content-center align-items-center">
                <div className="col-12 position-relative d-flex justify-content-center">
                    <h2 className="mb-0 title">Knowledge Mine</h2>
                    <div className="pagination-container position-absolute end-0">
                        {/* <div className="pagination d-flex align-items-center">
                            <button
                                disabled={currentPage === 1}
                                className={`btn ${currentPage === 1 ? 'disabled' : ''}`}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                {'<'}
                            </button>
                            <span>{currentPage} / {Math.ceil(testimonials.length / 4)}</span>
                            <button
                                disabled={currentPage === Math.ceil(testimonials.length / 4)}
                                className={`btn ${currentPage === Math.ceil(testimonials.length / 4) ? 'disabled' : ''}`}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                {'>'}
                            </button>
                        </div> */}
                         <div className="pagination d-flex align-items-center">
                                <button
                                    disabled={currentPage === 1}
                                    className={`btn ${currentPage === 1 ? 'disabled' : ''}`}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    {'<'}
                                </button>
                                <span>{currentPage} / {Math.ceil(testimonials.length / 4)}</span>
                                <button
                                    disabled={currentPage === Math.ceil(testimonials.length / 4)}
                                    className={`btn ${currentPage === Math.ceil(testimonials.length / 4) ? 'disabled' : ''}`}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    {'>'}
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {currentTestimonials.map((testimonial, index) => (
                    
                    <div key={index} className="col-md-3 mb-4 knowledgeCard">
                        <div className="knowledge-card">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="img-fluid mt-3 position-relative knowledgeimg"
                                style={{ }}
                            />
                            <div className="knowledge-content">
                                <h6 className="mb-0 mt-2">{testimonial.name}</h6>
                                <span className="mb-2">{testimonial.title}</span>
                                
                                <p>{testimonial.feedback}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Knowledge;
