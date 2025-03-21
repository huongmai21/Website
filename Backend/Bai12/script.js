// import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js";
// import { kiemTraChanLe } from "./helpers/kiemTraChanLe.js";
// import { tinhTong } from "./helpers/tinhTong.js";

// 1
  // Ví dụ 1
    // const congViec1 = () => {
    //   console.log("Công việc 1");
    // }

    // const congViec2 = (callback) => {
    //   // console.log(callback);

    //   console.log("Công việc 2");

    //   callback();
    // }

    // // congViec1();

    // congViec2(congViec1);



  // Ví dụ 2
    // tinhTong(10, 20, kiemTraSoDuong);
    // tinhTong(10, 20, kiemTraChanLe);

    // tinhTong(10, 20, (number) => {
    //   kiemTraSoDuong(number);
    //   kiemTraChanLe(number);
    // });



  // Ví dụ 3
    // const loginSuccess = () => {
    //   console.log("Đăng nhập thành công");
    // };

    // const checkLogin = (data, callback) => {
    //   const email = "namtest@gmail.com";
    //   const password = "2222";

    //   if(data.email === email && data.password === password) {
    //     callback();
    //   } else {
    //     console.log("Đăng nhập thất bại");
    //   }
    // }

    // let data = {
    //   email: "namtest@gmail.com",
    //   password: "2222"
    // };

    // checkLogin(data, loginSuccess);



// 2
  // var a = 10;

  // var promise = new Promise((resolve, reject) => {
  //   if(a === undefined) {
  //     reject();
  //   } else {
  //     resolve(a);
  //   }
  // });


  // promise
  //   .then((resultA) => {
  //     console.log(resultA);
  //     return resultA;
  //   })
  //   .then((resultA) => {
  //     const resultB = resultA + 10;
  //     console.log(resultB);
  //     return resultB;
  //   })
  //   .then((resultB) => {
  //     const resultC = resultB * 20;
  //     console.log(resultC);
  //   })
  //   .catch(() => {
  //     console.log("Thất bại!");
  //   })
    // .finally(() => {
    //   console.log("Luôn chạy vào đây!");
    // })


  
  // 3 Trạng thái
    // const promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // resolve(10);
    //     reject("Lỗi");
    //   }, 3000);
    // });


    // setTimeout(() => {
    //   console.log("Sau 1 giây: ", promise);
    // }, 1000);

    // setTimeout(() => {
    //   console.log("Sau 2 giây: ", promise);
    // }, 2000);

    // setTimeout(() => {
    //   console.log("Sau 3 giây: ", promise);
    // }, 3000);



  // 4
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then((data) => {
        // console.log(data.products);

        const newArray = data.products.map((item) => {
          return `
            <div class="product-item">
              <img src="${item.thumbnail}" />
              <h2>
                ${item.title}
              </h2>
              <h3>${item.price}$</h3>
            </div>
          `;
        });

        const htmls = newArray.join("");

        const productList = document.querySelector("#product-list");

        productList.innerHTML = htmls;
      });