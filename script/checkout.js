let clearBtn = document.querySelector('.clear-btn')

let checkoutArrData = JSON.parse(localStorage.getItem('data')) ?
JSON.parse(localStorage.getItem('data')) :
localStorage.setItem('data', JSON.stringify(checkoutArrData))
let table = document.querySelector('#table-cart')
let checkoutTable = document.querySelector('#table-cart');
let totalPrice = document.querySelector('#total')


function renderCartData(){
    table.innerHTML = ''
    checkoutArrData.forEach((data) =>{
        table.innerHTML += 
        `
        <tr>
            <td>${data.make}</td>
            <td>${data.specs}</td>
            <td>R${data.Amount}</td>
        </tr>
        `
    })
    // deleteButtons()
}


let total = checkoutArrData.reduce((a,b) => a + b.Amount, 0)

function totalAmount(){
  totalPrice.innerHTML = "R" + total
}

totalAmount()

console.log("Total:",total);


renderCartData()

// function clearButtons(){
//   clearBtns = [...document.querySelectorAll('.clear-btn')];
//   clearBtns.forEach((item)=>{
//       item.addEventListener('click',clearItem)
//   })
// }
// function clearItem(event){
//   let startPoint = clearBtns.indexOf(event.target);
//   arr.splice(startPoint, 1);
//   localStorage.setItem('arr', JSON.stringify(arr))
//   update();
// }

clearBtn.addEventListener('click', ()=>{
  localStorage.removeItem('data')
  location.reload()
})