let checkoutArrData = JSON.parse(localStorage.getItem('data')) ?
JSON.parse(localStorage.getItem('data')) :
localStorage.setItem('data', JSON.stringify(checkoutArrData))
let table = document.querySelector('#table-cart')


function addToCheckout(product) {
    let checkoutTable = document.querySelector('#checkout-table');
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.make}</td>
      <td>${product.Amount}</td>
      <td>${product.specs}</td>
    `;
    checkoutTable.appendChild(row);
  }
  let card = document.querySelector('#products-card');
card.innerHTML = '';
arr.forEach((data) => {
  card.innerHTML += `
    <div class="card" style="width: 14rem;">
      <img src="${data.img}" class="card-img-top" style="width: 10rem" alt="...">
      <div class="card-body" style="width:10rem">
        <h5 class="card-title">${data.make}</h5>
        <p class="card-text">${data.specs}</p>
        <p class="card-text">${data.Amount}</p>
        <a href="#" class="btn btn-primary" onclick="addToCheckout(${JSON.stringify(data)})">Add to Checkout</a>
      </div>
    </div>
  `;
});



function renderCartData(){
    table.innerHTML = ''
    checkoutArrData.forEach((data) =>{
        table.innerHTML += 
        `
        <tr>
            <td>${data.make}</td>
            <td>${data.specs}</td>
            <td>${data.Amount}</td>
        </tr>
        `
    })
}

renderCartData()