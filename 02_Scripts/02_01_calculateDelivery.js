const summe = process.argv[2]
const summeAsNumber = summe * 1;

if (summeAsNumber >= 35) {
  console.log("keine Lieferkosten");
} else {
  const diffCost = 35 - summeAsNumber;
  const deliveryCost = 0.2 * diffCost;

  console.log("Lieferkosten", deliveryCost, "€");
}