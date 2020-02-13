var john = {
  restaurent1: 124,
  restaurant2: 48,
  restaurant3: 268
};

var discount = {
  lt_50: 20,
  lt_200: 15,
  gt_200: 10
};

var tips = [];

var final_bill = [];

let make_bill = amount => {
  if (amount < 50) {
    tips.push((discount.lt_50 * amount) / 100);
    final_bill.push(amount + (discount.lt_50 * amount) / 100);
  } else if (amount >= 50 && amount < 200) {
    tips.push((amount * discount.lt_200) / 100);
    final_bill.push(amount + (discount.lt_200 * amount) / 100);
  } else {
    tips.push((amount * discount.gt_200) / 100);
    final_bill.push(amount + (discount.gt_200 * amount) / 100);
  }
};

for (let key in john) {
  make_bill(john[key]);
}

console.log("array of tips ", tips);

console.log("array of final amount", final_bill);
