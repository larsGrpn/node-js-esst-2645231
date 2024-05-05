

process.stdin.on('data', data => {
  const orderCosts = data.toString();
  const orderCostsNumber = orderCosts * 1;

  if (Number.isNaN(orderCostsNumber)) {
    console.log(orderCosts, "ist keine Zahl");
  } else {
    if (orderCostsNumber >= 35) {
      console.log("keine Lieferkosten");
    } else {
      const diffCost = 35 - orderCostsNumber;
      const deliveryCost = 0.2 * diffCost;

      console.log("Lieferkosten", deliveryCost, "€");
    }
  }
})