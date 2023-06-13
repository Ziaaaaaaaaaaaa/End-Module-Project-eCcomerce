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


let card = document.querySelector('#products-card');
  card.innerHTML = '';
  arr.forEach((data) => {
    card.innerHTML += `
    <div class="card" style="width: 14rem;">
    <img src="${data.img}" class="card-img-top" style="width: 10rem" alt="...">
    <div class="card-body" style="width:10rem">
      <h5 class="card-title">${data.make}</h5>
      <p class="card-text">${data.Amount}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      `;
  });



// objectArray.forEach((data) => {
//     card.innerHTML += `
//     <img src="${data.img}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${data.make}</h5>
//       <p class="card-text">${data.Amount}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
    
//     `;
//   });
// function addProducts() {
//   let make = document.querySelector('#make').value;
//   let spec = document.querySelector('#spec').value;
//   let amount = document.querySelector('#amount').value;
//   let image = document.querySelector('#image').value;
//   arr.push({
//     make: make,
//     specs: spec,
//     Amount: amount,
//     img: image
//   });
//   localStorage.setItem('arr', JSON.stringify(arr));
//   update();
//   console.log(arr);
// }
// console.log(arr);
// function ObjectConstructor(id, make, specs, Amount, img) {
//   this.id = id;
//   this.make = make;
//   this.specs = specs;
//   this.Amount = Amount;
//   this.img = img;
// }
// let object1 = new ObjectConstructor(6, 'Nux digital piano', 'weighted keys,3 pedals', 8800, 'https://i.postimg.cc/3xvW8TTb/Gn-Wf-C6g-G1620199833-420x420.jpg');
// let object2 = new ObjectConstructor(7, 'Korg digital keyboard piano', 'touch sensitivity, no pedals', 4000, 'https://i.postimg.cc/85JTHdzX/KA370-247x247.jpg');
// let object3 = new ObjectConstructor(8, 'Korg digital piano', 'weighted keys, 3 pedals', 19900, 'https://i.postimg.cc/Zn4DRZ2P/Korg-B1-Review-Featured.jpg');
// let object4 = new ObjectConstructor(9, 'Yamaha digital piano', 'weighted keys, 3 pedals', 25000, 'https://i.postimg.cc/sfTJSphC/m-p-digitalpiano-clavinova-csp-150b.jpg');
// let object5 = new ObjectConstructor(10, 'Yamaha Arius digital piano', 'weighted keys, 3 pedals', 30000, 'https://i.postimg.cc/cLB7xwZz/Yamaha-Arius-YDP-105-BDigital-2x.webp');
// let objectArray = [object1, object2, object3, object4, object5];
// let objectArrayString = JSON.stringify(objectArray);
// localStorage.setItem('myObjectArray', objectArrayString);
// update();