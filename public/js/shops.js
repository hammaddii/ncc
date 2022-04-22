window.onload = () => {
    getData()
}

const getData = () => {
    fetch('../js/shop.json').then((Response) => {
        return Response.json()
    }).then((data) => {
        buildData(data)
    })
}

const buildData = (shops) => {
    var buildShops = "";
    for (shop of shops) {
        buildShops += `
    <div class="shopBox">
        <img src="${shop.imgSrc}" alt="">
        <div class="content">
            <h2>${shop.name}</h2>
            <p>${shop.description}</p>
        </div>
        <div class="priceDetails">
            <p><span>$</span>${shop.price}</p>
        </div>
    </div>`;
    }

    document.querySelector('.shopCont').innerHTML = buildShops;
}