//? el.textContent --> ichidagi so'z kontentini o'zgartitirish
//? el.innerHMTL --> ichidagi htmlni kontentini o'zgartitirish
//? el.addEven --> ichidagi htmlni kontentini o'zgartitirish

//! const student ={
//!     name: `Muhammad`,
//!     yosh: 17,
//!     qiziqishlar: `dasturlash`
//! };
//! console.log(student.qiziqishlar);

//! const student ={
//!     name: `Muhammad`,
//!     yili: 2005,
//!     yoshinihisobla: function() {
//!         console.log(2022 - this.yili);
//!     }
//! };
//! student.yoshinihisobla();

// const i = prompt(`Omadli raqam kiriting`);
// switch(i) {
//     case "1":
//         alert(`Omadsiz raqam`);
//         break;
//     case "2":
//         alert(`Omadsiz raqam`);
//         break;  
//     case "7":
//         alert(`Omadli raqam`);
//         break; 
//     default: 
//     alert(`Omadli raqam kiritmadingiz!`)
// }

const buton = document.querySelector(`#btn`);
// console.log(buton);  
// const cardd = document.querySelector(`#card`);
// console.log(cardd); 

const btnbosilganda = function() {
    alert(`Hello. Welcome`)
    buton.classList.add(`butn`);
}       
buton.addEventListener(`click`, btnbosilganda);


