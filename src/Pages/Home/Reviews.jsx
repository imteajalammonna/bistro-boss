import { Rating, Star} from '@smastrom/react-rating';
import { useState } from 'react';

const includedShapesStyles = [Star].map(
  (itemShapes) => ({ itemShapes, activeFillColor: '#F59E0B', inactiveFillColor: '#F59E0B' })
);

function Reviews() {
  const [rating, setRating] = useState(3);

  return (
    <div    className='flex text-[#f59e0b] bg-[#f59e0b]'>
    {includedShapesStyles.map((itemStyles, index) => (
      <Rating
      className='w-10 text-[#f59e0b]'
        key={`shape_${index}`}
        value={rating}
        onChange={setRating}
        itemStyles={itemStyles}
      />
    ))}
    
    </div>
  )
}
export default Reviews;