let arr = JSON.parse(localStorage.getItem('arr')) ? JSON.parse(localStorage.getItem('arr')) : localStorage.setItem('arr', JSON.stringify( [{
    id: 1,
    make: 'Acoustic piano',
    specs: '88-keys, 3 pedals, touch sensitivity keys',
    Amount: 30000,
    img: 'https://i.postimg.cc/sXVbkWp6/shopping.webp',
},{
    id: 2,
    make: 'Vintage upright Acoustic piano',
    specs: '88-keys, 3 pedals, touch sensitivity keys',
    Amount: 5000,
    img: 'https://i.postimg.cc/sXmsCb3d/rittmuller-up118-walnut-finish.webp',
},{
    id: 3,
    make: 'Yamaha Acoustic Grand piano',
    specs: '88-keys, 3 pedals, touch sensitivity keys',
    Amount: 35000,
    img: 'https://i.postimg.cc/prwtxv5T/0003317-yamaha-gb1k-pe-baby-grand-piano-incl-bench-400.jpg',
},{
    id: 4,
    make: 'Roland digital piano',
    specs: '88-keys, 3 pedals, touch sensitivity keys',
    Amount: 10000,
    img: 'https://i.postimg.cc/qqRFNvCw/328972-HP704-CH-Depth-jpg.webp',
},{
    id: 5,
    make: 'Casio Keyboard piano',
    specs: '61-keys, no pedals, no touch sensitivity keys',
    Amount: 2000,
    img: 'https://i.postimg.cc/ZRGCsCFs/casio-ctk-2500-1-KEY0004587-000.jpg',
}]))

let checkoutArrData = []

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
      <button class="btn btn-danger" onclick='addToCheckout(${JSON.stringify(data)})'>Add to Checkout</button>
      </div>
      </div>
      `;
  });



function addToCheckout(data){
    checkoutArrData.push(data)
    localStorage.setItem('data', JSON.stringify(checkoutArrData))
    console.log(checkoutArrData);
}