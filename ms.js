
// function darkmode(){
//    let body= document.querySelector("body")
//    body.style.backgroundColor="black"
//    body.style.color="white"

// }
// document.querySelector("button").addEventListener("click",darkmode)


// function button(){
//     let input= document.querySelector("input")
//     input.style.backgroundColor="red"
//     input.style.color="white"
    
// }




// document.querySelector("button").addEventListener("click",input)

let namebtn = document.querySelector('button');
namebtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Name of Student');
    namebtn.textcontent ='Roll NO. 1:' + name;

}



