// console.log(window)
// console.log(window.innerHeight)
// console.log(window.innerWidth)

// var tab;
// const openTab = ()=>{
//     tab = window.open("https://khoahoc.28tech.com.vn/",
//         "_blank","width =1200,heigth=600, left=100,top=50")
// };

// const closeTab = () =>{
//     tab.close()
// }

// console.log(screen.width)
// console.log(screen.height)

// console.log(location)

// const reloadPage = ()=>{
//     location.reload()
// }

// setInterval(reloadPage,10000)


// console.log(history)

// console.log(navigator)


//Tạo cookie
// const fullname = "Tran Mai Huong"
// // console.log(fullname) // load lai tran thi mat du lieu bien
// document.cookie =  `fullname=${fullname}; expires=Thu, 01 Jan 2026 00:00:00 UTC` 

//Thiết lập giá trị cookie 
// function setCookie(cname, cvalue, exdays){
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60860*1000))
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }

// const fullname = prompt("Nhap ten cua ban");
// console.log(fullname);
// setCookie("fullname",fullname,3);\

//Lấy giá trị cookie
// const cookie = document.cookie;
// console.log(cookie);

//Hàm lấy giá trị cookie
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0;i<ca.length;++i){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1)
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length)
        }
    }
    return "";
}

const fullname  = getCookie("fullname")
console.log(fullname)

// Xoa  1 cookie
function deleteCookie(cname){
    document.cookie = `${cname}=; expires=Thu 01 Jan 1970 00:00:00 UTC`
}

deleteCookie(fullname)
