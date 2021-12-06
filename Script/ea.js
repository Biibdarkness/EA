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
var myVar = setInterval(function () { clock() });
function clock() {
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

function changeImgIn(id) {
    let icon = document.getElementById(`icon${id}`);
    document.getElementById(`label${id}`).style.color = "red";
    icon.src = `Images/pr${id}r.jpg`;


}
function changeImgOut(id) {
    let icon = document.getElementById(`icon${id}`);
    document.getElementById(`label${id}`).style.color = "#59260c";
    icon.src = `Images/pr${id}.jpg`;
}

function buy(operator, productId) {
    let buy = Number(document.getElementById(`buy${productId}`).value);
    console.log(buy);
    console.log(productId);
    if (operator == 1) {
        buy++;

    } else if (buy > 0) {
        buy--;
    }
    document.getElementById(`buy${productId}`).value = buy;
}

let categories = [];

let skinCares = new Category("SkinCare", 1);
let s1 = new Product(1, "Laco DNA Toner", "Images/toner2.jpg", "VietNam", "350.000vnđ");
skinCares.add(s1);
let s2 = new Product(2, "Laco Face Wash", "Images/cleanser2.jpg", "VietNam", "300.000vnđ");
skinCares.add(s2);
categories.push(skinCares);

let bodyCares = new Category("BodyCare", 2);
let b1 = new Product(3, "Laco Body Wash", "Images/st2.jpg", "VietNam", "400.000vnđ");
bodyCares.add(b1);
let b2 = new Product(4, "Laco Skin Exfoliating Scrub", "Images/srm3.jpg", "VietNam", "300.000vnđ");
bodyCares.add(b2);
categories.push(bodyCares);

let hairCares = new Category("HairCare", 3);
let h1 = new Product(5, "Laco Shampoo", "Images/dg1.jpg", "VietNam", "300.000vnđ");
hairCares.add(h1);
let h2 = new Product(6, "Laco AmConditioning", "Images/dg4.jpg", "VietNam", "300.000vnđ");
hairCares.add(h2);
categories.push(hairCares);

let lipCares = new Category("LipCare", 4);
let l1 = new Product(7, "Laco Lipstick", "Images/s2.jpg", "VietNam", "200.000vnđ");
lipCares.add(l1);
categories.push(lipCares);

let functionalFoods = new Category("FunctionalFoods", 5);
let f1 = new Product(8, "Collagen", "Images/collagen1.jpg", "Japan", "400.000vnđ");
functionalFoods.add(f1);
let f2 = new Product(9, "Collagen 82x", "Images/clg2.jpg", "Japan", "450.000vnđ");
functionalFoods.add(f2);
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

        showData += '<br><hr><br><table class="tablet center" ><thead><tr><th>Name</th><th>Picture</th><th>Origin</th><th>Price</th><th>Buy</th></tr>';
        cat.products.forEach(function (product, index) {
            showData += ` 
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
        showData += '</table><br><hr><br>';
        showData += "</td>";
        showData += "</td>";
    })
    showData += "</table>";
    document.getElementById("data").innerHTML = showData;
}

function setId(id) {
    localStorage.setItem("id", id);
    location.href = "product.html";
}

function ready() {
    show();
    // showProduct();
}
ready();