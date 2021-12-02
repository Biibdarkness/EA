function showdetail() {
    let detail = "";
    detail += `<table class="tablet" >`;
    categories.forEach(function (cat, index) {
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

        detail += '<br><hr><br><table class="tablet center" ><thead><tr><th>#ID</th><th>Name</th><th>Picture</th><th>Origin</th><th>Price</th></tr>';
        cat.products.forEach(function (product, index) {
            detail += ` 
                        <tr id='tr_${product.productId}'>
                            <td >${product.productId}</td>
                            <td>${product.name}</td>
                            <td >
                                <img class='img-sm' src='${product.pictures}'>
                            </td>
                            <td class="text-center">${product.origin}</td>
                            <td class="text-center">${product.price}</td>
                        </tr>`;
        });
        detail += '</table><br><hr><br>';
        detail += "</td>";
        detail += "</td>";
    })
    detail += "</table>";
    document.getElementById("detail").innerHTML = detail;

}
showdetail();