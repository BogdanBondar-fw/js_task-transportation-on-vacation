/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let totalCost = days * pricePerDay;

  if (days >= 3 && days <= 6) {
    totalCost -= 20;
  } else if (days >= 7) {
    totalCost -= 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
