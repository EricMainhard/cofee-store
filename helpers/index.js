const formatCurrency = (value) => {

    const options = { style: 'currency', currency: 'USD' };
    const valueToCurrency = new Intl.NumberFormat('en-US', options);

    return valueToCurrency.format(value);
}

const calcTotal = (order) => {
    let total = 0;
    order.map((prod) => {
      let totalProd = prod.quantity * prod.price;
      total += totalProd;
    });
    return total;
  };

export { formatCurrency, calcTotal }