// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceProduct = price.innerText;
  const quantityProduct = quantity.valueAsNumber;
  const finalPrice = quantityProduct * priceProduct;
  product.querySelector('.subtotal span').innerText = finalPrice;

  return finalPrice;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  const subtotals = document.getElementsByClassName('product');
  let sumTotal = 0;
  for (let i = 0; i < subtotals.length; i++) {
    sumTotal += updateSubtotal(subtotals[i]);
  }

  return (document.querySelector('#total-value span').innerText = sumTotal);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
