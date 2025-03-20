// var button = document.querySelector("button");
// button.onclick = function () {
//     alert("Hello World 3!")
// }

// var result = confirm("Do you over 18 years old");
// console.log(result);

// var result = prompt("Nhap tuoi cua ban:");
// console.log(result);
// console.warn(result);
// console.error(result);


// setTimeout(function(){
//     console.log("Da duoc 5 giay")
// }, 5000)

// setInterval(function(){
//     console.log("Da duoc 1 giay")
// }, 1000)

//De dung ham setInterval
// var b = setInterval(function(){
//     console.log("Da duoc 1 giay")
// }, 1000)

// setTimeout(function(){
//     clearInterval(b);
//     console.log("Da dung setInterval8")
// },5000)


// var myString = "Xin chao. Toi ten la Nam. Toi nam nay 18 tuoi!"
// console.log(myString.indexOf("Toi"))
// console.log(myString.indexOf("Toi",11))

// var myString = "Xin chao. Toi ten la Nam. Toi nam nay 18 tuoi!"
// console.log(myString.lastIndexOf("Toi"))
// console.log(myString.lastIndexOf("Toi",9))

// var myString = "Xin chao. Toi ten la Nam. Toi nam nay 18 tuoi!"
// console.log(myString.replace("Toi","Minh"))
// console.log(myString.replace(/Toi/g,"Minh"))


// var myString = `HTML5, CSS3, Javascript`;
// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
// console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử


// var myString = `HTML5,    CSS3,       Javascript`;
// myString = myString.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
// console.log(myString);
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử

// var a = 12.5543
// console.log(a.toFixed())
// console.log(a.toFixed(2))


// Ví dụ 1: Chèn phần tử mới vào mảng
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
console.log(list);
// Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]

// Ví dụ 2: Xóa phần tử trong mảng
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
console.log(list); // Trả về: ["HTML5", "Javascript"]

// Ví dụ 3: Xóa phần tử và chèn phần tử mới vào mảng
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS"));
// // Trả về: ["Javascript"]
console.log(list);
// // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]