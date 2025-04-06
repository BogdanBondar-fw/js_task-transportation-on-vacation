/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  let totalCost = days * pricePerDay;

  if (days >= 3 && days <= 6) {
    totalCost -= smallDiscount;
  } else if (days >= 7) {
    totalCost -= bigDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
