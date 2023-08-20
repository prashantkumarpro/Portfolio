// hide the cross
document.querySelector('.cross').style.display = "none";

// click listen to hamebruger
document.querySelector('.hamebruger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('gosidebar');
    if (document.querySelector('.sidebar').classList.contains('gosidebar')) {
        document.querySelector('.cross').style.display = "none";
        document.querySelector('.hame').style.display = "inline";
    } else {
        document.querySelector('.hame').style.display = "none";
        setTimeout(() => {
            document.querySelector('.cross').style.display = "inline";
        }, 300)
    }
})













































// let submitBtn = document.querySelector("#submit");
// let clintPhone = document.querySelector("#clintphone").value;
// submitBtn.addEventListener("click", ()=>{
// if(clintPhone === Number(clintPhone)){
// console.log(clintPhone)
// }
// })
