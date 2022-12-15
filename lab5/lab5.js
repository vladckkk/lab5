let imageOne = document.querySelector(".container .top-images .one");
let imageTwo = document.querySelector(".container .top-images .two");
let imageThree = document.querySelector(".container .top-images .three");

let newImage = document.querySelector(".container .selected-image img");

imageOne.addEventListener('click', function(){
    let imgOneAttr = imageOne.getAttribute('src');
    newImage.setAttribute('src', imgOneAttr)
})

imageTwo.addEventListener('click', function(){
    let imgTwoAttr = imageTwo.getAttribute('src');
    newImage.setAttribute("src", imgTwoAttr);
})

imageThree.addEventListener('click', function(){
    let imgThreeAttr = imageThree.getAttribute('src');
    newImage.setAttribute("src", imgThreeAttr);
})



































/*console.log(imgThreeAttr);*/