// layout image
// const carousel = new bootstrap.Carousel('#myCarousel')

// danh sách sản phẩm

// let productList = [
//     {
//         name: "黒薩摩鳥ささみ生ハム",
//         price: "698円(税込)",
//         src: "../project/assets/sasami.jpeg",
//         stock: 50,
//     },
//     {
//         name: "牛レバーハム",
//         price: "819円(税込)",
//         src: "../project/assets/ギュレバ.jpeg",
//         stock: 50,
//     },
//     {
//         name: "牛ユッケ生ハム",
//         price: "819円(税込)",
//         src: "../project/assets/yuke.jpeg",
//         stock: 50,
//     },
//     {
//         name: "牛とろタルタル",
//         price: "819円(税込)",
//         src: "../project/assets/taru.jpeg",
//         stock: 50,
//     },
//     {
//         name: "さしみーと５種セット",
//         price: "3500円(税込)",
//         src: "../project/assets/5setto.jpeg",
//         stock: 50,
//     }
// ]
// lưu spham
// localStorage.setItem("productList", JSON.stringify(productList));
let products = JSON.parse(localStorage.getItem("productList"));
function renderProducts() {

    let text = "";
    for (let i = 0; i < products.length; i++) {
        text +=
            `
            <div class="product-item">
                <img src="${products[i].src}" alt="">
                <p>${products[i].name}</p>
                <p>${products[i].price}</p>
                <p><button onclick="addToCart()">カゴに入れる</button></p>
            </div>
        `
    }
    document.getElementsByClassName("product-list")[0].innerHTML = text
}
renderProducts()
// function gio hang
function addToCart() {
    let checkLogin = localStorage.getItem("userId");
    if (checkLogin) {

    } else {
        alert("購入を完了するにはログインする必要があります。")
    }

}

