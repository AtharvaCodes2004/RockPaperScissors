var randomNumber1 = Math.floor(Math.random()*3)+1

var randomImage1 = "image"+randomNumber1+".jpg"

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src" , randomImage1)

var randomNumber2 = Math.floor(Math.random()*3)+1

var randomImage2 = "image"+randomNumber2+".jpg"

var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src" , randomImage2)