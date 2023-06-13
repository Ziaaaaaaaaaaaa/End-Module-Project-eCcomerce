let removeBtns;

let arr = JSON.parse(localStorage.getItem('arr'));
let table = document.querySelector('#product-table');
function update() {
  table.innerHTML = '';
  arr.forEach((data) => {
    table.innerHTML += `
      <tr>
        <td>${data.id}</td>
        <td>${data.make}</td>
        <td>${data.specs}</td>
        <td>${data.Amount}</td>
        <td><img src="${data.img}" style="width: 5rem;" alt=""></td>
        <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-primary close-btn">Delete</button>
        </td>
      </tr>
    `;
  });
  deleteButtons()
  // objectArray.forEach((data) => {
  //   table.innerHTML += `
  //     <tr>
  //       <td>${data.id}</td>
  //       <td>${data.make}</td>
  //       <td>${data.specs}</td>
  //       <td>${data.Amount}</td>
  //       <td><img src="${data.img}" alt=""></td>
  //       <td>
  //         <button class="btn btn-primary">Edit</button>
  //         <button class="btn btn-primary close-btn">Delete</button>
  //       </td>
  //     </tr>
  //   `;
  // });

}
let btn = document.querySelector('#btn');
btn.addEventListener('click', addProducts);
function addProducts() {
  let make = document.querySelector('#make').value;
  let spec = document.querySelector('#spec').value;
  let amount = document.querySelector('#amount').value;
  let image = document.querySelector('#image').value;
  arr.push({
    make: make,
    specs: spec,
    Amount: amount,
    img: image
  });
  localStorage.setItem('arr', JSON.stringify(arr));
  update();
  console.log(arr);
}
console.log(arr);
function ObjectConstructor(id, make, specs, Amount, img) {
  this.id = id;
  this.make = make;
  this.specs = specs;
  this.Amount = Amount;
  this.img = img;
}
let object1 = new ObjectConstructor(6, 'Nux digital piano', 'weighted keys,3 pedals', 8800, 'https://i.postimg.cc/3xvW8TTb/Gn-Wf-C6g-G1620199833-420x420.jpg');
let object2 = new ObjectConstructor(7, 'Korg digital keyboard piano', 'touch sensitivity, no pedals', 4000, 'https://i.postimg.cc/85JTHdzX/KA370-247x247.jpg');
let object3 = new ObjectConstructor(8, 'Korg digital piano', 'weighted keys, 3 pedals', 19900, 'https://i.postimg.cc/Zn4DRZ2P/Korg-B1-Review-Featured.jpg');
let object4 = new ObjectConstructor(9, 'Yamaha digital piano', 'weighted keys, 3 pedals', 25000, 'https://i.postimg.cc/sfTJSphC/m-p-digitalpiano-clavinova-csp-150b.jpg');
let object5 = new ObjectConstructor(10, 'Yamaha Arius digital piano', 'weighted keys, 3 pedals', 30000, 'https://i.postimg.cc/cLB7xwZz/Yamaha-Arius-YDP-105-BDigital-2x.webp');
let objectArray = [object1, object2, object3, object4, object5];
let objectArrayString = JSON.stringify(objectArray);
localStorage.setItem('myObjectArray', objectArrayString);
update();

function deleteButtons(){
  removeBtns = [...document.querySelectorAll('.close-btn')];
  removeBtns.forEach((item)=>{
      item.addEventListener('click',deleteItem)
  })
}
function deleteItem(event){
  let startPoint = removeBtns.indexOf(event.target);
  arr.splice(startPoint, 1);
  localStorage.setItem('arr', JSON.stringify(arr))
  update();
}