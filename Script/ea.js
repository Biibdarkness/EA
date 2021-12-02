class Category {
    constructor(name, catId) {
        this.catId = catId;
        this.name = name;
        this.products = [];
    }
    add(product) {
        this.products.push(product)
    }
}

class Product {
    constructor(id, name, pictures, origin, price) {
        this.productId = id;
        this.name = name;
        this.pictures = pictures;
        this.origin = origin;
        this.price = price;
    }
}
var myVar = setInterval(function () { Clock() });
function Clock() {
    a = new Date();
    w = Array("Chủ Nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy");
    var a = w[a.getDay()],
        w = new Date,
        d = w.getDate();
    m = w.getMonth() + 1;
    y = w.getFullYear();
    h = w.getHours();
    mi = w.getMinutes();
    se = w.getSeconds();
    if (10 > d) { d = "0" + d }
    if (10 > m) { m = "0" + m }
    if (10 > h) { h = "0" + h }
    if (10 > mi) { mi = "0" + mi }
    if (10 > se) { se = "0" + se }
    document.getElementById("clockDiv").innerHTML = "" + a + ", ngày " + d + " tháng " + m + " năm " + y + " - " + h + ":" + mi + ":" + se + "";
}

// function changeImgIn(){
//     let icon = document.getElementById("icon1");
//     icon.src = "Images/skin_care1-removebg-preview-removebg-preview.png";
// }
// function changeImgOut(){
//     let icon = document.getElementById("icon1");
//     icon.src = "Images/skin_care1-removebg-preview-no-color.png";
// }

let categories = [];

let skinCares = new Category("SkinCare", 1);
let s1 = new Product(1, "laco", "Images/cleanser1.jpg", "China", 100000);
skinCares.add(s1);
let s2 = new Product(2, "laco2", "Images/cleanser2.jpg", "Japan", 200000);
skinCares.add(s2);
categories.push(skinCares);

let bodyCares = new Category("BodyCare", 2);
let b1 = new Product(1, "Sake1", "Images/cleanser2.jpg", "Japan", 200000);
bodyCares.add(b1);
let b2 = new Product(2, "Sake2", "Images/cleanser2.jpg", "China", 400000);
bodyCares.add(b2);
categories.push(bodyCares);

let hairCares = new Category("HairCare", 3);
let h1 = new Product(1, "Amla1", "Images/cleanser2.jpg", "Japan", 200000);
hairCares.add(h1);
categories.push(hairCares);

let lipCares = new Category("LipCare", 4);
let l1 = new Product(1, "Laco1", "Images/cleanser2.jpg", "Japan", 200000);
lipCares.add(l1);
categories.push(lipCares);

let functionalFoods = new Category("FunctionalFoods", 5);
let f1 = new Product(1, "Collagen", "Images/cleanser2.jpg", "Japan", 200000);
functionalFoods.add(f1);
categories.push(functionalFoods);



// function showProduct() {
//     let listProduct = document.getElementById("skincare");
//     listProduct.innerHTML += '';
//     categories.forEach(function (cat, index) {
//         cat.name;
//         cat.forEach(function (product, index) {
//             listProduct.innerHTML += ` 
//                         <tr id='tr_${product.id}'>
//                             <td >${product.id}</td>
//                             <td>${product.name}</td>
//                             <td >
//                                 <img class='img-sm' src='${product.pictures}'>
//                             </td>
//                             <td class="text-center">${product.price}</td>
//                         </tr>`;
//         });
//     })
// }

function show() {
    let showData = "";
    showData += `<table class="tablet" >`;
    categories.forEach(function (cat, index) {

        showData += `  <tr>
        <td class="td3 " rowspan="2">
            <h1>${cat.name}</h1>
        </td>
        <td class="block-bot"></td>
    </tr>
    <tr>
        <td class="block-top"></td>
    </tr>`;

        showData += "<tr>";
        showData += "<td colspan='2'>";

        showData += '<br><hr><br><table class="tablet center" ><thead><tr><th>#ID</th><th>Name</th><th>Picture</th><th>Origin</th><th>Price</th></tr>';
        cat.products.forEach(function (product, index) {
            showData += ` 
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
        showData += '</table><br><hr><br>';
        showData += "</td>";
        showData += "</td>";
    })
    showData += "</table>";
    document.getElementById("data").innerHTML = showData;
}
function ready() {
    show();
    // showProduct();
}
ready();