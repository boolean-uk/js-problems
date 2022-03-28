const ratingsAdjuster = (ratings, minThreshold, maxThreshold) => {
  const adjustedRatings = [...ratings];
  
  for( let i = 0; i < adjustedRatings.length; i++ ) {
      if ( ratings[i] < minThreshold) {
          adjustedRatings[i] = minThreshold
      } else if (ratings[i] > maxThreshold ) {
          adjustedRatings[i] = maxThreshold
      } 
  }
  return adjustedRatings;
}

const ratings = [1,3,5,7,9];
const min = 3;
const max = 7;

console.log(ratingsAdjuster(ratings, min, max));
