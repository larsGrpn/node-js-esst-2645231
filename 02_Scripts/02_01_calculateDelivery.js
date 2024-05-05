const orderCosts = process.argv[2]
const orderCostsNumber = summe * 1;

if (Number.isNaN(orderCostsNumber)) {
  console.log(orderCosts, "ist keine Zahl");
} else {
  if (summeAsNumber >= 35) {
    console.log("keine Lieferkosten");
  } else {
    const diffCost = 35 - summeAsNumber;
    const deliveryCost = 0.2 * diffCost;

    console.log("Lieferkosten", deliveryCost, "€");
  }
}