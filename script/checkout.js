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

}


let total = checkoutArrData.reduce((a,b) => a + b.Amount, 0)

function totalAmount(){
  totalPrice.innerHTML = "R" + total
}

totalAmount()

console.log("Total:",total);


renderCartData()



clearBtn.addEventListener('click', ()=>{
  localStorage.removeItem('data')
  location.reload()
})