// 1
  // localStorage.setItem("fullName", "Đặng Phương Nam");

  // const fullName = localStorage.getItem("fullName");
  // const test = document.querySelector("#test");
  // test.innerHTML = fullName;


  // Change Mode
  // const currentMode = localStorage.getItem("mode");
  // if(currentMode) {
  //   const body = document.querySelector("body");
  //   body.classList.toggle(currentMode);
  // }

  // const buttonChangeMode = document.querySelector("#change-mode");
  // buttonChangeMode.addEventListener("click", () => {
  //   const body = document.querySelector("body");
  //   body.classList.toggle("dark");

  //   const currentMode = localStorage.getItem("mode");

  //   if(currentMode) {
  //     localStorage.setItem("mode", "");
  //   } else {
  //     localStorage.setItem("mode", "dark");
  //   }
  // });
  // End Change Mode


  // console.log(localStorage);
  // console.log(localStorage.abc);
  // console.log(localStorage.xyz);



// 2
  // // Change Mode
  // const currentMode = sessionStorage.getItem("mode");
  // if(currentMode) {
  //   const body = document.querySelector("body");
  //   body.classList.toggle(currentMode);
  // }

  // const buttonChangeMode = document.querySelector("#change-mode");
  // buttonChangeMode.addEventListener("click", () => {
  //   const body = document.querySelector("body");
  //   body.classList.toggle("dark");

  //   const currentMode = sessionStorage.getItem("mode");

  //   if(currentMode) {
  //     sessionStorage.setItem("mode", "");
  //   } else {
  //     sessionStorage.setItem("mode", "dark");
  //   }
  // });

  // const resetMode = document.querySelector("#reset-mode");
  // resetMode.addEventListener("click", () => {
  //   sessionStorage.removeItem("mode");
  //   const body = document.querySelector("body");
  //   body.classList.remove("dark");
  // });
  // // End Change Mode



  // const buttonClearAll = document.querySelector("#clear-all");
  // buttonClearAll.addEventListener("click", () => {
  //   sessionStorage.clear();
  // });



// 3
  // Ví dụ 1
    // let c = 30;
    // const tinhToan = (a, b) => {
    //   let c = 20;

    //   const tinhTong = () => {
    //     let c = 10;
        
    //     return a + b + c;
    //   }

    //   return tinhTong;
    // }

    // const tong = tinhToan(10, 20)();
    // console.log(tong);


  // Ví dụ 2
    // const tinhToan = (a, b) => {
    //   const tinhTong = () => {        
    //     return a + b;
    //   }

    //   const tinhHieu = () => {        
    //     return a - b;
    //   }

    //   const tinhTich = () => {        
    //     return a * b;
    //   }

    //   const tinhThuong = () => {        
    //     return a / b;
    //   }

    //   // const tong = tinhTong();
    //   // const hieu = tinhHieu();
    //   // const tich = tinhTich();
    //   // const thuong = tinhThuong();

    //   // return {
    //   //   tong: tong,
    //   //   hieu: hieu,
    //   //   tich: tich,
    //   //   thuong: thuong
    //   // };

    //   return {
    //     tong: tinhTong,
    //     hieu: tinhHieu,
    //     tich: tinhTich,
    //     thuong: tinhThuong
    //   };
    // }

    // const tinh = tinhToan(10, 20);

    // console.log(tinh);

    // const tong = tinh.tong();
    // console.log(tong);

    // const hieu = tinh.hieu();
    // console.log(hieu);

    // const tich = tinh.tich();
    // console.log(tich);

    // const thuong = tinh.thuong();
    // console.log(thuong);




// 4
  // Ví dụ 1: Gán mặc định tại vị trí khai báo.
    // const tong = (a = 0, b = 0) => {
    //   return a + b;
    // }

    // const ketQua = tong(10, 20);
    // console.log(ketQua);


  // Ví dụ 2: Gán bên trong function.
    // const tong = (a, b) => {
    //   a = a || 0;
    //   b = b || 0;
    //   return a + b;
    // }

    // const ketQua = tong(10, 20);
    // console.log(ketQua);



// 5
    // let listUserDB = [
    //   "Le Van A",
    //   "Nguyen Thi B",
    //   "Do Van C"
    // ];


    // const listUserFE = [
    //   "Nguyen Van D",
    //   "Do Thi E"
    // ];

    // listUserDB = [...listUserDB, ...listUserFE];
    // console.log(listUserDB);




    // const infoUserDB = {
    //   fullName: "Le Van A",
    //   email: "levana@gmail.com"
    // };


    // const infoUserFE = {
    //   phone: "0123456789",
    //   age: 18
    // };

    // const newInfoUserDB = {
    //   ...infoUserDB,
    //   ...infoUserFE,
    //   facebook: "fb.com/abc"
    // };

    // console.log(newInfoUserDB);


    
// 6
  // const tinhTong = (...numbers) => {
  //   let tong = 0;
  //   for (const number of numbers) {
  //     tong += number;
  //   }
  //   return tong;
  // }

  // const ketQua = tinhTong(10, 20, 30, 40, 50, 60);
  // console.log(ketQua);



// 7
  // const time = ["10", "24", "50"]; // ["giờ", "phút", "giây"]

  // const [hour, minute, second] = time;

  // // const hour = time[0];
  // // const minute = time[1];
  // // const second = time[2];

  // console.log(hour);
  // console.log(minute);
  // console.log(second);



  // const infoUser = {
  //   fullName: "Le Van A",
  //   email: "test@gmail.com",
  //   phone: "0123456789"
  // };

  // const { fullName, email, phone, test } = infoUser;

  // // const fullName = infoUser.fullName;
  // // const email = infoUser.email;
  // // const phone = infoUser.phone;

  // console.log(fullName);
  // console.log(email);
  // console.log(phone);
  // console.log(fullName);
  // console.log(fullName);
  // console.log(fullName);
  // console.log(fullName);
  // console.log(test);