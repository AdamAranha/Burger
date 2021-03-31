window.onload = loadItems

let burgerList

async function loadItems() {
    let orderList = []
    let devourList = []

    burgerList = await fetch('/api/burgers/get', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then(e => e.json())


    burgerList.forEach(element => {
        if (element.devoured === 0) {
            console.log(element.name + ' was devoured')
            orderList.push({ name: element.name, id: element.id })
        } else {
            console.log(element.name + ' was not devoured')
            devourList.push({ name: element.name, id: element.id })
        }
    });

    document.querySelector('#devour').innerHTML = ``
    document.querySelector('#orderUp').innerHTML = ``


    for (let counter = 0; counter < orderList.length; counter++) {
        document.querySelector('#orderUp').innerHTML += `<li class="list-group-item">${orderList[counter].id}. ${orderList[counter].name}<button type="button" class=" btn btn-outline-primary float-end" onclick="devour('${orderList[counter].name}')">Devour</button></li>`

    }

    for (let counter = 0; counter < devourList.length; counter++) {
        document.querySelector('#devour').innerHTML += `<li class="list-group-item">${devourList[counter].name}</li>`

    }
    // orderList.forEach(element => {
    //     document.querySelector('#orderUp').innerHTML +=
    //         `<li class="list-group-item">${element.id}. ${element.name}<button type="button" class="float-end" onclick="devour()">Devour</button></li>`
}







async function devour(burger) {
    console.log('nom nom')
    await fetch('/api/burgers/eat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ name: burger })
    }).then(e => { location.reload() })



}

