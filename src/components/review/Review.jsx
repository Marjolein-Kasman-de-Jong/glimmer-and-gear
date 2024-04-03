// Helpers
import getDateString from '../../helpers/getDateString';

// Icons
import { TiStar } from "react-icons/ti";

// Style
import './review.css';

const Review = ({ review }) => {
    let stars = [];
    
    for (let i = 0; i < review.rating; i++) {
        stars.push(i);
    }

    return (
        <blockquote className="review">
            <div className='rating-container'>
                {
                    stars.map((star) => {
                        return <TiStar key={star} />;
                    })                    
                }
            </div>
            <p>{review.content}</p>
            <div className='review-info'>
                <p className='review-author'>{review.author}</p>
                <time className='review-date'>{getDateString(review.reviewDate)}</time>
            </div>
        </blockquote>
    );
}

export default Review;