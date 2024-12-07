const mob = async () => {
    const data = await fetch('https://fakestoreapi.com/products?limit=20');
    const response = await data.json();
    console.log(response);
    document.getElementById('Pimg').src = response[0].image;
    document.getElementById('Pimg1').src = response[1].image;
    document.getElementById('Pimg2').src = response[2].image;
    document.getElementById('Pimg3').src = response[3].image;
    document.getElementById('title').textContent = response[0].title;
    document.getElementById('title1').textContent = response[1].title;
    document.getElementById('title2').textContent = response[2].title;
    document.getElementById('title3').textContent = response[3].title;
    document.getElementById('price').textContent = response[0].price;
    document.getElementById('description').textContent = response[0].description;
    document.getElementById('description1').textContent = response[1].description;
    document.getElementById('description2').textContent = response[2].description;
    document.getElementById('description3').textContent = response[3].description;
}
mob();