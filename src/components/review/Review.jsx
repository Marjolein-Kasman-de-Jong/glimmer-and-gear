// Helpers
import getDateString from '../../helpers/getDateString';

// Icons
import { TiStar } from 'react-icons/ti';

// Style
import './review.css';

const Review = ({ review }) => {
    let stars = [];

    // Create an array for rating-container to map
    for (let i = 0; i < review.rating; i++) {
        stars.push(i);
    }

    return (
        <blockquote className='review'>
            {/* Stars */}
            <div className='rating-container'>
                {
                    stars.map((star) => {
                        return <TiStar key={star} />;
                    })
                }
            </div>
            {/* Review */}
            <p>
                {review.content}
            </p>
            {/* Review data */}
            <div className='review-info'>
                <p className='review-author'>
                    {review.author}
                </p>
                <time className='review-date'>
                    {getDateString(review.reviewDate)}
                </time>
            </div>
        </blockquote>
    );
}

export default Review;