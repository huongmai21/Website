// 1
  // Toàn cục
    // const a = 10;

    // function test() {
    //   console.log(a);
    // }

    // test();


  // Cục bộ

    // Ví dụ 1
      // function test() {
      //   var a = 10;
      //   console.log(a);
      // }

      // test();
      // console.log(a);


    // Ví dụ 2
      // function test1() {
      //   var a = 10;
      //   function test2() {
      //     var b = 20;
      //     console.log(a);
      //   }
      //   test2();
      //   console.log(b);
      // }

      // test1();
      // test2();

      // console.log(a);


// 2.1: biến trong hoisting
  // console.log(a); // Trả về undefind, ko báo lỗi
  // var a = "Hello world!";

  // Chuyển tương đương
  // var a;
  // console.log(a);
  // a = "Hello world!";
  // console.log(a);


// 2.2
  // console.log(a);
  // let a = 10;


  // console.log(a);
  // const a = 10;


// 2.3
  // Declaration Function
    // function test() {
    //   console.log("OK");
    // }

    // test();


  // Expression Function
    // var test;

    // test();

    // test = function() {
    //   console.log("OK");
    // }

    
  // Arrow Function
    // var test;

    // test();

    // test = () => {
    //   console.log("OK");
    // }


// 3.1
  // console.log(this);


// 3.2
  // const button = document.querySelector("#button");

  // button.addEventListener("click", function() {
  //   console.log(this); // Trả về nội dung thẻ button
  // });


// 3.3
  // var infoUser = {
  //   fullName: "Đặng Nam",
  //   email: "namtest@gmail.com",
  //   phone: "0123456789",
  //   getPhone: function () {
  //     console.log(this);
  //     console.log(this.phone);
  //     console.log(infoUser.phone);
  //   },
  //   getFullName: function () {
  //     console.log(this.fullName);
  //   },
  //   cccd: {
  //     fullName: "Đặng Phương Nam",
  //     getFullName: function () {
  //       console.log(this.fullName);
  //     },
  //   }
  // };

  // infoUser.getPhone();

  // infoUser.getFullName();
  // infoUser.cccd.getFullName();


// 3.4
  const button = document.querySelector("#button");

  // button.addEventListener("click", function () {
  //   console.log(this);
  // });

  // button.addEventListener("click", () => {
  //   console.log(this);
  //   console.log(button);
  // });




// 5
  // var objectJS = {
  //   fullName: "Đặng Phương Nam",
  //   phone: "0123456789",
  //   email: "namtest@gmail.com",
  // };

  // var objectJSON = `
  //   {
  //     "fullName": "Đặng Phương Nam",
  //     "phone": "0123456789",
  //     "email": "namtest@gmail.com"
  //   }
  // `;



  // Ví dụ 1: JSON có giá trị là Object

  var objectJS = {
    fullName: "Đặng Phương Nam",
    phone: "0123456789",
    email: "namtest@gmail.com",
    test(){
      console.log("test")
    }
  }

    // var objectJSON = `
    //   {
    //     "fullName": "Đặng Phương Nam",
    //     "phone": "0123456789",
    //     "email": "namtest@gmail.com"
    //   }
    // `;

    // console.log(objectJSON);

    // // Chuyển từ JSON sang JS
    // const objectJS = JSON.parse(objectJSON);
    // console.log(objectJS);

    // // Chuyển từ JS sang JSON
    // const objectJSON2 = JSON.stringify(objectJS);
    // console.log(objectJSON2);



  // Ví dụ 2:  JSON có giá trị là Number
    // var numberJSON = `10`;

    // console.log(numberJSON);

    // // Chuyển từ JSON sang JS
    // var numberJS = JSON.parse(numberJSON);
    // console.log(numberJS);

    // // Chuyển từ JS sang JSON
    // var numberJSON2 = JSON.stringify(numberJS);
    // console.log(numberJSON2);




  // Ví dụ 3:  JSON có giá trị là String
    // var stringJSON = `"abc"`;

    // // Chuyển từ JSON sang JS
    // var stringJS = JSON.parse(stringJSON);
    // console.log(stringJS);

    // // Chuyển từ JS sang JSON
    // var stringJSON2 = JSON.stringify(stringJS);
    // console.log(stringJSON2);



  // Ví dụ 4:  JSON có giá trị là Boolean
    // var booleanJSON = `true`;

    // // Chuyển từ JSON sang JS
    // var booleanJS = JSON.parse(booleanJSON);
    // console.log(booleanJS);

    // // Chuyển từ JS sang JSON
    // var booleanJSON2 = JSON.stringify(booleanJS);
    // console.log(booleanJSON2);


  // Ví dụ 5:  JSON có giá trị là Array
    // var arrayJSON = `[
    //   {
    //     "fullName": "Le Van A",
    //     "email": "levana@gmail.com"
    //   },
    //   {
    //     "fullName": "Le Van B",
    //     "email": "levanb@gmail.com"
    //   }
    // ]`;

    // // Chuyển từ JSON sang JS
    // var arrayJS = JSON.parse(arrayJSON);
    // console.log(arrayJS);

    // // Chuyển từ JS sang JSON
    // var arrayJSON2 = JSON.stringify(arrayJS);
    // console.log(arrayJSON2);



  // Ví dụ 6:  JSON có giá trị là Null
    // var nullJSON = `null`;

    // // Chuyển từ JSON sang JS
    // var nullJS = JSON.parse(nullJSON);
    // console.log(nullJS);

    // // Chuyển từ JS sang JSON
    // var nullJSON2 = JSON.stringify(nullJS);
    // console.log(nullJSON2);