const mob = async () => {
    const data = await fetch('https://fakestoreapi.com/products/category/electronics?limit=4');
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
    document.getElementById('Price').textContent = `₹${Math.floor(response[0].price)}`;
    document.getElementById('Price1').textContent = `₹${Math.floor(response[1].price)}`;
    document.getElementById('Price2').textContent = `₹${Math.floor(response[2].price)}`;
    document.getElementById('Price3').textContent = `₹${Math.floor(response[3].price)}`;
    document.getElementById('description').textContent = response[0].description;
    document.getElementById('description1').textContent = response[1].description;
    document.getElementById('description2').textContent = response[2].description;
    document.getElementById('description3').textContent = response[3].description;
    

    const data1 = await fetch('https://fakestoreapi.com/products/category/jewelery?limit=10');
    const response1 = await data1.json();
    console.log(response1);

    const Pinmg = document.getElementsByClassName('Pimg');
    const Ptitle = document.getElementsByClassName('title');
    const PPrice = document.getElementsByClassName('Price');
    const Pdescription = document.getElementsByClassName('description');
    for (let i = 0; i < 7; i++) {
        Pinmg[i].src = response1[i].image;
        Ptitle[i].textContent = response1[i].title;
        PPrice[i].textContent = `₹${Math.floor(response1[i].price)}`;
        Pdescription[i].textContent = response1[i].description;
    }
}
mob();