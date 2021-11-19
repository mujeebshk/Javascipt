export function dayRate(ratePerHour) {
    let dayRate = 8 * ratePerHour;
    return dayRate
  }

  
  export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour))




  }export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const numMonths = Math.floor(numDays / 22);
    const monthlyRate = 22 * dayRate(ratePerHour);
    const monthlyDiscountedRate = (1 - discount) * monthlyRate;
  
    const numExtraDays = numDays % 22;
    const priceExtraDays = numExtraDays * dayRate(ratePerHour);
  
    return Math.ceil(numMonths * monthlyDiscountedRate + priceExtraDays);
  }