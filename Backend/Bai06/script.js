//FOR IN
// var infoUser = {
//     fullname: "Tran Mai Huong",
//     email: "tranmaihuong@gmail.com",
//     age: 18,
//     phone: "0961573936"
// }

// for(key in infoUser){
//     console.log(key)
//     console.log(infoUser[key])
// }

// // var key = "fullname"
// // console.log(infoUser.fullname)
// // console.log(infoUser.key)   // undefind vi dang hieu key la string
// // console.log(infoUser[key])  


//FOR OF
var list = ["HTML5", "CSS3", "Javascript"];

console.log(list);
console.log(list.length);

for(var i = 0; i < list.length; i++) {
console.log(i);
console.log(list[i]);
}

for (var item of list) {
console.log(item);
}


// 9
  // Từ khóa var
    // var a = 10;

    // if(a == 10) {
    //   var b = 20;
    //   console.log(b);
    // }

    // if(true) {
    //   var b = 30;
    //   console.log(b);
    // }

    // console.log(b);



  // Từ khóa let
    // var a = 10;
    
    // if(a == 10) {
    //   let b = 20;
    //   b = 30;
    //   console.log(b);
    // }

    // if(true) {
    //   let b = 30;
    //   console.log(b);
    // }

    // console.log(b);




  // Từ khóa const
    // var a = 10;

    // if(a == 10) {
    //   const b = 20;
    //   // b = 30;
    //   console.log(b);
    // }

    // console.log(b);

    // if(true) {
    //   const PI = 3.14;
    //   // PI = 5; // Gán lại giá trị là sai
    //   console.log(PI);
    // }


    // let a = 10;

    // if(true) {
    //   a = 20;
    // }

    // console.log(a);






    // var a = 1;
    // let b = 2;

    // if(true){
    //     var a = 3;
    //     let b = 4;
    // }

    // console.log(a)
    // console.log(b)

    

    // Khai báo biến không cần dùng từ khóa
    // Không nên:
      // a = 10;
      // console.log(a);


    // Nên dùng
      // var b = 5;
      // b = 10;
      // console.log(b);