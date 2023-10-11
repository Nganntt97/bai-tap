// function renderCart() {
//     let logingUserId = localStorage.getItem("userId");
//     let users = JSON.parse(localStorage.getItem("users"));
//     if (logingUserId != null) {
//         for (let i = 0; i < users.length; i++) {
//             if (users[i].id == logingUserId) {
//                 // cart laf user[i].cart
//                 // let total=0;
//                 // let text="";
//                 // for (let j = 0; j < users[i].cart.length; j++) {
//                 //         total+=
//                 //         users[i].cart[j].price * users[i].cart[j].quantity;
//                 //        text+=
//                 //        `
//                 //        <tr>
//                 //        <td>${j+1}</td>
//                 //        <td>
//                 //        <img src=".${users[i].cart[j].src}"</td>
//                 //        <td>${users[i].cart[j].id}</td>
//                 //        <td>${users[i].cart[j].name}</td>
//                 //        <td>${users[i].cart[j].price}</td>
//                 //        <td>
//                 //            <button>-</button>
//                 //            ${users[i].cart[j].quantity}    
//                 //            <button>+</button>
//                 //        </td>
//                 //        <td>${users[i].cart[j].price * users[i].cart[j].quantity}</td>
//                 //        <td>取消す</td>
//                 //    </tr>
//                 //        `  
//                 //     }
//                 //     document.getElementById("tbody").innerHTML=
//                 //     `${text}
//                 //     <tr>
//                 //     <td colspan="6">総価格</td>
//                 //     <td colspan="2">${total}7</td>
//                 //     </tr>`
//                 let tbody = document.getElementById("tbody");
//                     tbody.innerHTML = "";
//                 users[i]?.cart.forEach((item, index) => {
//                     console.log(item);
        
//                     let tr = document.createElement("tr");
//                     tr.innerHTML =` 
//                         <td>${index + 1}</td>
//                         <td><img src=${item.src} alt=""/>  </td>
//                         <td>${item.id}</td>
//                         <td>${item.name}</td>
//                         <td>${item.price}円(税込)</td>
//                         <td><input type="number" value="${item.quantity}"/></td>
//                         <td>${item.price*item.quantity}円(税込) </td>
//                         <td>取消す</td>`
//                     ;
//                     tbody.appendChild(tr);
//                 });

//             }
//         }
//     }
// }
// renderCart();

function renderCart(){
    let checkLogin = localStorage.getItem('userId');
    let users = JSON.parse(localStorage.getItem('users'));
    if (checkLogin != null) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                let total = 0;
                let text = '';
                for (let j = 0; j < users[i].cart.length; j++) {
                    total += users[i].cart[j].price * users[i].cart[j].quantity
                    text += `<tr>
                    <td>${j + 1}</td>
                    <td>
                    <img src='.${users[i].cart[j].src}'  class="rounded"
                    </td>
                    <td>${users[i].cart[j].id}</td>
                    <td>${users[i].cart[j].name}</td>
                    <td>${(users[i].cart[j].price)}円(税込)</td>
                    <td>
                        <button class="btn btn-secondary btn-sm" onclick ="decrease(${users[i].cart[j].id})">-</button>
                        ${users[i].cart[j].quantity}
                        <button class="btn btn-primary btn-sm" onclick ="increase(${users[i].cart[j].id})">+</button>
                    </td>
                    <td>${(users[i].cart[j].price * users[i].cart[j].quantity)}円(税込)</td>
                    <td><button class="btn btn-danger" onclick = "popup(${users[i].cart[j].id})">取消す</button></td>
                </tr>`
                }
                document.getElementById('tbody').innerHTML = `
                ${text}
                <tr class="table-dark">
                <td  colspan = '6'> 商品合計： </td>
                <td colspan = '2'> ${(total)}円(税込) </td>
                </tr>
                `
            }
        }
    }
}
renderCart();
