import React, { useState } from 'react';
import './testimonial.css';
import person1 from '../../assest/person1.png'
import person2 from '../../assest/person2.png'
import person3 from '../../assest/person3.png'
import person4 from '../../assest/person4.png'
const Testimonials = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const testimonials = [
        {
            image: person1,
            name: 'Parth Vaghani',
            title: 'CEO, Unity Infotech',
            rating: 5,
            feedback:
                'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When',
        },
        {
            image: person2,
            name: 'Parth Vaghani',
            title: 'CEO, Unity Infotech',
            rating: 4,
            feedback:
                'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When',
        },
        {
            image: person3,
            name: 'Bhaktesh',
            title: 'CEO, Unity Infotech',
            rating: 5,
            feedback:
                'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When',
        },
        {
            image: person4,
            name: 'Parth Vaghani',
            title: 'CEO, Unity Infotech',
            rating: 5,
            feedback:
                'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When',
        },
        

    ];

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    const currentTestimonials = testimonials.slice(startIndex, endIndex);

    return (
        <div className="container-fluid testimonial_container_p mt-5">
            <div className="row">
                {/* <div className="col-12 text-center d-flex flex-wrap align-items-center">
                    <h2 className="mb-0 d-flex justify-content-end">Glowing Feedbacks</h2>
                    <div className="testimonial-right d-flex align-items-center ms-auto">
                        <button className="btn me-2 morereview">Write Review</button>
                        <span className="pagination align-items-center">
                            <button
                                disabled={currentPage === 1 ? true : false}
                                className={currentPage === 1 ? 'disabled' : ''}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                {'<'}
                            </button>
                            <span>{currentPage} / {Math.ceil(testimonials.length / 4)}</span>
                            <button
                                disabled={currentPage === Math.ceil(testimonials.length / 4) ? true : false}
                                className={
                                    currentPage === Math.ceil(testimonials.length / 4)
                                        ? 'disabled'
                                        : ''
                                }
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                {'>'}
                            </button>
                        </span>

                    </div>
                </div> */}
                <div className="row knowledgetitle justify-content-center align-items-center">
                    <div className="col-12 position-relative d-flex justify-content-center">
                        <h2 className="mb-0">Glowing Feedbacks</h2>

                        <div className="pagination-container testimonial-right d-flex flex-wrap position-absolute end-0">
                            <button className="btn me-2 morereview fw-semibold">WRITE REVIEW</button>
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
                                    disabled={currentPage === 1 ? true : false}
                                    className={currentPage === 1 ? 'disabled' : ''}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    {'<'}
                                </button>
                                <span>{currentPage} / {Math.ceil(testimonials.length / 4)}</span>
                                <button
                                    disabled={currentPage === Math.ceil(testimonials.length / 4) ? true : false}
                                    className={
                                        currentPage === Math.ceil(testimonials.length / 4)
                                            ? 'disabled'
                                            : ''
                                    }
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    {'>'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {currentTestimonials.map((testimonial, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="testimonial-card">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="img-fluid"
                                style={{ width: '425px', height: '305px', }}
                            />
                            <div className="testimonial-content">
                                <h3 className="mb-0 mt-3">{testimonial.name}</h3>
                                <span className="mb-2">{testimonial.title}</span>
                                <div className="rating mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill text-warning"></i>
                                    ))}
                                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                                        <i key={i} className="bi bi-star text-warning"></i>
                                    ))}
                                </div>
                                <p>{testimonial.feedback}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
