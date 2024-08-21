// function loadDesserts(e) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'data.json', true);

//     xhr.onload = function() {
//         if (this.status === 200) {
//             // console.log(this.responseText);
//             const desserts = JSON.parse(this.responseText);

//             let output = "";

//             desserts.forEach(d => {
//                 output = output + 
//                 `<div class="dessert">
//                     <img src=${d.image.desktop} />
//                     <div>
//                         <h3>${d.name}</h3>
//                         <p>${d.category}</p>
//                         <span>${d.price}</span>
//                     </div>
//                 </div>`;
//             });

//             document.querySelector('.col').innerHTML = output;
//         }
//     }

//     xhr.send();
// }

// loadDesserts();


