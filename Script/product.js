let id = 0;


function showdetail(i) {
    let catId = -1;
    if (i === 0) { 
        const check = localStorage.getItem("id");
        catId = +check
    } else {
        catId = i;
    }
    console.log(id)
    let detail = "";
    detail += `<table class="tablet" >`;
    categories.forEach(function (cat, index) {
        console.log(cat);
        if (cat.catId === catId) {

            detail += `  <tr>
            <td class="td3 " rowspan="2">
            <h1>${cat.name}</h1>
            </td>
            <td class="block-bot"></td>
            </tr>
            <tr>
            <td class="block-top"></td>
            </tr>`;

            detail += "<tr>";
            detail += "<td colspan='2'>";

            detail += '<br><hr><br><table class="tablet center" ><thead><tr><th>Name</th><th>Picture</th><th>Origin</th><th>Price</th><th>Buy</th></tr>';
            cat.products.forEach(function (product, index) {
                detail += ` 
                <tr id='tr_${product.productId}'>
                <td>${product.name}</td>
                <td >
                <img class='img-sm' src='${product.pictures}'>
                </td>
                <td class="text-center">${product.origin}</td>
                <td class="text-center">${product.price}</td>
                <td class="text-center"><input type="text" name="" id="buy${product.productId}" value="0">
                            <button id="plus" onclick="buy(1,${product.productId})">+</button>
                            <button id="sub" onclick="buy(2,${product.productId})">-</button></td>
                </tr>`;
            });
            detail += '</table><br><hr><br>';
            detail += "</td>";
            detail += "</td>";
        }
    })
    detail += "</table>";
    document.getElementById("detail").innerHTML = detail;
}

function checkId(i) {
    id = i;
    console.log(i);
    showdetail(i);
}


showdetail(0);