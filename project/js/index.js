// slide anh-box
// let image = ['../project/assets/20230128_6545e7.png,../project/assets/20230126_7ee831.png,../project/assets/h.png'];

// / layout image
// const carousel = new bootstrap.Carousel('#myCarousel')

// danh sách sản phẩm

let productList = [
    {
        name: "黒薩摩鳥ささみ生ハム",
        price: 698,
        id:12345,
        src: "./assets/sasami.jpeg",
        stock: 50,
    },
    {
        name: "牛レバーハム",
        price: 819,
        id:123456,
        src: "./assets/ギュレバ.jpeg",
        stock: 50,
    },
    {
        name: "牛ユッケ生ハム",
        price: 819,
        id:3456,
        src: "./assets/yuke.jpeg",
        stock: 50,
    },
    {
        name: "牛とろタルタル",
        price: 819,
        id:456767,
        src: "./assets/taru.jpeg",
        stock: 50,
    },
    {
        name: "さしみーと５種セット",
        price: 3500,
        id:767897,
        src: "./assets/5setto.jpeg",
        stock: 50,
    }
]
// // lưu spham
// localStorage.setItem("productList", JSON.stringify(productList));
// let products=localStorage.getItem("productList")||[];
let products = JSON.parse(localStorage.getItem("productList"));
if(products==null){
    localStorage.setItem("productList", JSON.stringify(productList));
}
function renderProducts(products) {

    let text = "";
    for (let i = 0; i < products.length; i++) {
        text +=
            `
            <div class="product-item">
                <img src="${products[i].src}" alt="">
                <p class="text">${products[i].name}</p>
                <p>${products[i].price}円(税込)</p>
                <p><button class="btn btn-success" onclick="addToCart(${products[i].id})">カゴに入れる</button></p>
            </div>
        `
    }
    document.getElementsByClassName("product-list")[0].innerHTML = text
}
renderProducts(products)
// function gio hang
function addToCart(producId) {
    console.log("producId", producId);
    let logingId = localStorage.getItem("userId");
    // biến checklogin có giá trị của id của người dùng
    // lấy users ra
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // lay danh sach san pham
    let products = JSON.parse(localStorage.getItem("productList")) || [];

    if (logingId) {
        alert("カゴに追加しました！")
        // let cartUsers=users.filter((item)=>{
        //     return item.id==checkLogin;
        // })
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == logingId) {
                // lay gio hang cua user vua dang nhap
                // users[i].cart
                let data = {
                    id: null,
                    name: "",
                    price: null,
                    src: "",
                    stock: null,
                    quantity: 0,
                }
                products.forEach(item => {
                    if (item.id === producId) {
                        data = {
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            src: item.src,
                            quantity: 1,
                            stock: item.stock
                        }
                        let existingItem = users[i]?.cart.find(item => item.id === producId);
                        if (existingItem) {
                            existingItem.quantity+=1;
                
                            
                        }else{
                            users[i].cart.push(data);
                            
                    
                    
                        }
                    }
                })
                localStorage.setItem("users", JSON.stringify(users));

            }
            console.log("カゴ", users[i].cart);
        }
        showCount();
    } else {
        alert("購入を完了するにはログインする必要があります。")
    }
}
// hien thi gio hang
let showCount = () => {
    let checkLogin = localStorage.getItem('userId');
    let users = JSON.parse(localStorage.getItem('users'));
    if (checkLogin) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                let count = 0;
                for (let j = 0; j < users[i].cart.length; j++) {
                    count += users[i].cart[j].quantity;
                }
                document.getElementsByClassName('count')[0].innerHTML = count;
                users[i].count = count;
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    }
}
showCount();
// search
function debounce(func, delay) {
    let timeoutId;

    return function() {
      const context = this;
      const args = arguments;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
  }
let search = () => {
    let inputValue = document.getElementById('search').value;
    let result = products.filter((item) => {
        return item.name.indexOf(inputValue) != -1;
    })
    console.log(result);
    if (result.length != 0) {
        renderProducts(result);
    }
    else {
        renderProducts();
    }
}
let findItem = debounce(search,1000);
document.getElementById('search').addEventListener('keyup',findItem);
