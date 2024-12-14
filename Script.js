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
    

    const data1 = await fetch('https://fakestoreapi.com/products/category/jewelery?limit=4');
    const response1 = await data1.json();
    console.log(response1);
    const Pinmg = document.getElementsByClassName('Pimg');
    const Ptitle = document.getElementsByClassName('title');
    const PPrice = document.getElementsByClassName('Price');
    const Pdescription = document.getElementsByClassName('description');
    for (let i = 0; i < 4; i++) {
        Pinmg[i].src = response1[i].image;
        Ptitle[i].textContent = response1[i].title;
        PPrice[i].textContent = `₹${Math.floor(response1[i].price)}`;
        Pdescription[i].textContent = response1[i].description;
    }

    const data2 = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4");
    const response2 = await data2.json();
    console.log(response2);
    const Mimg = document.getElementsByClassName('Mimg');
    const Mtitle = document.getElementsByClassName('Mtitle');
    const MPrice = document.getElementsByClassName('Mprice');
    const Mdescription = document.getElementsByClassName('Mdescription');
    for (let i = 0; i < 4; i++) {
        Mimg[i].src = response2[i].image;
        Mtitle[i].textContent = response2[i].title;
        MPrice[i].textContent = `₹${Math.floor(response2[i].price)}`;
        Mdescription[i].textContent = response2[i].description;
    }

    const data3 = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4");
    const response3 = await data3.json();
    console.log(response3);
    const Wimg = document.getElementsByClassName('Wimg');
    const Wtitle = document.getElementsByClassName('Wtitle');
    const WPrice = document.getElementsByClassName('Wprice');
    const Wdescription = document.getElementsByClassName('Wdescription');
    for (let i = 0; i < 4; i++) {
        Wimg[i].src = response3[i].image;
        Wtitle[i].textContent = response3[i].title;
        WPrice[i].textContent = `₹${Math.floor(response3[i].price)}`;
        Wdescription[i].textContent = response3[i].description;
    }


}
mob();