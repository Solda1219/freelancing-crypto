export default function getBidAverage(bids) {
  let sum = 0;
  bids.map((bid) => {
    sum += bid.budget;
    return true;
  });
  return (sum / bids.length).toFixed();
}
