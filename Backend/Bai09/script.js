// Lay theo id
// const h2_01 = document.getElementById("h2-01")
// console.log(h2_01)


// Lay theo tagName
// const listH2 = document.getElementsByTagName("h2")
// console.log(listH2)


//Lay theo class
// const listTitle = document.getElementsByClassName("title")
// console.log(listTitle)

//Lấy theo bộ chọn CSS
// const title = document.querySelector('.title')
// console.log(title)


// const tagA = document.querySelector('#menu li a')
// console.log(tagA)
// const tagA2 = document.querySelector('#menu li:nth-child(2) a')
// console.log(tagA2)


// //Lấy ra tất cả các phần tử theo bộ chọn
// const listTagA = document.querySelectorAll("#menu li a")
// console.log(listTagA)

// //Nếu làm theo 3 cách trên thì ko tiện bằng 2 cách dưới. VD cũng như trên:
// const menu = document.getElementById("menu")
// const listTagA2 = menu.getElementsByTagName("a")
// console.log(listTagA2)


// // Lấy ra nội dung thẻ
// const innerHTMLH2_01 = document.querySelector("#h2-01").innerHTML //Lấy tất cả nội dung trong thẻ , kể cả các thẻ chứa trong nó
// const innerTextH2_01 = document.querySelector("#h2-01").innerText //Lấy nội dung trong thẻ, chỉ phần chữ

// console.log(innerHTMLH2_01)
// console.log(innerTextH2_01)

//Lấy ra giá trị của thuộc tính
// const h2_03 = document.querySelector("#h2-03")
// const classH2_03 = h2_03.getAttribute("class")
// console.log(classH2_03)

//DOM CSS
// Thiết lập giá trị
const h2_02 = document.querySelector("#h2-02")
h2_02.style.fontSize = "20px"
h2_02.style.color = "blue"

// Lấy giá trị
const h2_02 = document.querySelector("#h2-02")
console.log(h2_02.style.fontSize)