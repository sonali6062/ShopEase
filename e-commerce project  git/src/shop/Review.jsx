import { useState } from 'react';
import Rating from '../components/Rating';
import { Card, ListGroup } from 'react-bootstrap'; // Import Bootstrap components

const reviewTitle = "Add a Review";

let ReviewList = [
]

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? 'RevActive' : 'DescActive'}`}>
                <li className='desc' onClick={() => setReviewShow(false)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(true)}>Review 4</li>
            </ul>
            {/* Description and review content */}
            <div className={`review-content ${reviewShow ? 'review-content-show' : 'description-show'}`}>
                {reviewShow ? (
                    <div className='review-showing'>
                        <ListGroup>
                            {ReviewList.map((review, i) => (
                                <ListGroup.Item key={i}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{review.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{review.date}</Card.Subtitle>
                                            <Card.Text>{review.desc}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>

                        {/* add review field */}
                        <div className='client-review'>
                            <div className='review-form'>
                                <div className='review-title'>
                                    <h5>{reviewTitle}</h5>
                                </div>
                                <form action='action' className='row'>
                                    <div className='col-md-4 col-12'>
                                        <input type='text' name='name' placeholder='Full name*' className='form-control mb-3' />
                                    </div>
                                    <div className='col-md-4 col-12'>
                                        <input type='email' name='email' placeholder='Your Email' className='form-control mb-3' />
                                    </div>
                                    <div className='col-md-4 col-12'>
                                        <div className='rating mb-3'>
                                            <span className='me-2'>Your Rating</span>
                                            <Rating />
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-12'>
                                        <textarea name='message' rows='8' placeholder='Type Here Message' className='form-control mb-3'></textarea>
                                    </div>
                                    <div className='col-12'>
                                        <button type='submit' className='btn btn-primary'>
                                            Submit Review
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='description'>
                        <p>
                            description
                        </p>
                        <div className='post-item'>
                            <img src='/src/assets/images/shop/01.jpg' alt='' className='img-fluid mb-3' />
                            <ul className='lab-ul'>
                              bestsndkhis
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Review;
