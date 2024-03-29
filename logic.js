let main = document.querySelector(".main")
console.log(main)


let data = async function (){
    let res= await fetch('https://fakestoreapi.com/products')
    // console.log(res)
    let value = res.json()
    return value;
}

data().then((res)=>{
  res.forEach(element => {
    
    let productCart = document.createElement("div")
    productCart.classList.add("product_cart")
    main.appendChild(productCart)

    let imageContent = document.createElement("div")
    imageContent.classList.add("image__content")
    productCart.appendChild(imageContent)

    let img = document.createElement("img")
    img.setAttribute("src",`${element.image}`)
    imageContent.appendChild(img)

    let aboutContent = document.createElement("div")
    aboutContent.classList.add("about__content")
    productCart.appendChild(aboutContent)

    let h3 = document.createElement("h3")
    h3.textContent=`${element.title}`
    aboutContent.appendChild(h3)

    let p = document.createElement("p")
    p.textContent=`${element.category}`
    aboutContent.appendChild(p)

    let productRating = document.createElement("div")
    productRating.classList.add("product__rating")
    productCart.appendChild(productRating)


    let ratingContent = document.createElement("div")
    ratingContent.classList.add("rating__content")
    productRating.appendChild(ratingContent)


    let ratingContentPara = document.createElement("p")
    let rating = `${element.rating.rate}`
    let ratingNumber = Number(rating)
    let actualRating = Math.floor(ratingNumber)
    
    let stars = '&star;';
    if(actualRating==1){
        stars=stars
    }else if(actualRating==2){
        stars += '&star;';
    }else if(actualRating==3){
        stars += '&star;&star;';
    }else if(actualRating==4){
        stars += '&star;&star; &star;';
    }else if(actualRating==5){
        stars += '&star;&star;&star;&star;';
    }
    
    ratingContentPara.innerHTML=stars
    ratingContent.appendChild(ratingContentPara)

    
    let para = document.createElement("p")
    para.textContent=`${'('+element.rating.rate+')'}`
    ratingContent.appendChild(para)

    let fixRate = document.createElement("p")
    fixRate.textContent=( '$'+`${element.price}`)
    productRating.appendChild(fixRate)
  });
})
















