let arr = JSON.parse(localStorage.getItem('arr'))

let table = document.querySelector('#product-table')

function update(){
    table.innerHTML = ''
    arr.forEach((data) =>{
        table.innerHTML +=
        `
        <tr>
            <td>${data.id}</td>
            <td>${data.make}</td>
            <td>${data.specs}</td>
            <td>${data.Amount}</td>
            <td><img src="${data.img}" alt=""></td>
            <td>
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-primary">Delete</button>
                    </td>
        </tr>
        `
    })
}

update()

let btn = document.querySelector('#btn')

btn.addEventListener('click', addProducts)

function addProducts(){
    let make = document.querySelector('#make').value
    let spec = document.querySelector('#spec').value
    let amount = document.querySelector('#amount').value
    let image = document.querySelector('#image').value

    arr.push({
        make: make,
        specs: spec,
        Amount: amount,
        img: image
    })

    localStorage.setItem('arr', JSON.stringify(arr))
    update()
    // alert('Updated')
    console.log(arr);
}

console.log(arr);
