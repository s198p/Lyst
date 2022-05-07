var women=[
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/ruelala/6ea494e1/brunello-cucinelli-MF980R7716_C005-Silk-Tank.jpeg",
        title:"BRUNELLO CRUCINELLI",
        desc:"Silk Tank-White",
        price:"$312",
        strikeprice:"$1775",
        store:"Gilt",
        color:"white",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/mytheresa/553562c5/moncler-white-Logo-Cotton-Jersey-T-shirt.jpeg",
        title:"MONCLER",
        desc:"Logo cotton jersey Tshirt",
        price:"$164",
        strikeprice:"$529",
        store:"Mytheresa",
        color:"white",
        type:"tshirts",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/cettire/6740d1a2/moncler-Black-Logo-Print-Crewneck-T-shirt.jpeg",
        title:"MONCLER",
        desc:"Logo print crewneck Tshirt",
        price:"$231",
        strikeprice:"$320.44",
        store:"Cettire",
        color:"black",
        type:"tshirts"
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/theoutnet/3575329b/brunello-cucinelli-Marineblau-One-sleeve-tie-neck-fringed-silk-twill-top.jpeg",
        title:"BRUNELLO CRUCINELLI",
        desc:"One sleeve Tie Neck fringed",
        price:"$162",
        strikeprice:"$1560",
        store:"THE OUTNET.com",
        color:"offwhite",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/theoutnet/824bf8d4/brunello-cucinelli-Hellblauer-Denim-Jeansshorts-mit-gurtel.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Belted Denm Shorts",
        price:"$400",
        strikeprice:"$890",
        store:"THE OUTNET.COM",
        color:"offwhite",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/cettire/54b88c1c/brunello-cucinelli-Beige-Sleeveless-Maxi-Dress.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Sleeveless Maxi Dress",
        price:"$4403",
        strikeprice:"$6380",
        store:"Cettire",
        color:"offwhite",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/ruelala/6ea494e1/brunello-cucinelli-MF980R7716_C005-Silk-Tank.jpeg",
        title:"BRUNELLO CRUCINELLI",
        desc:"Silk Tank-White",
        price:"$312",
        strikeprice:"$1775",
        store:"Gilt",
        color:"white",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/mytheresa/553562c5/moncler-white-Logo-Cotton-Jersey-T-shirt.jpeg",
        title:"MONCLER",
        desc:"Logo cotton jersey Tshirt",
        price:"$164",
        strikeprice:"$529",
        store:"Mytheresa",
        type:"tshirts"
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/theoutnet/3575329b/brunello-cucinelli-Marineblau-One-sleeve-tie-neck-fringed-silk-twill-top.jpeg",
        title:"BRUNELLO CRUCINELLI",
        desc:"One sleeve Tie Neck fringed",
        price:"$162",
        strikeprice:"$1560",
        store:"THE OUTNET.com",
        color:"black",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/cettire/6740d1a2/moncler-Black-Logo-Print-Crewneck-T-shirt.jpeg",
        title:"MONCLER",
        desc:"Logo print crewneck Tshirt",
        price:"$231",
        strikeprice:"$320.44",
        store:"Cettire",
        color:"black",
        type:"tshirts"
    },
];
localStorage.setItem("womensD", JSON.stringify(women));

var allwomenData = JSON.parse(localStorage.getItem("womensD")) || []

function displayDatamen(allwomenData){
document.querySelector("#m1Products").innerHTML = ""
allwomenData.map(function(elem)
{
    var maindiv=document.createElement("div")
    maindiv.setAttribute("class","maindiv")
    var div1=document.createElement("div")
    div1.setAttribute("class","priceDiv")
    var div2=document.createElement("div")
    div2.setAttribute("id","infoDiv")
    var image=document.createElement("img")
    image.setAttribute("src",elem.image)
    image.addEventListener("click",function()
    {
        moreInfo(elem);
        window.location.href = "productdesc.html";
    })
    var brand=document.createElement("h3")
    brand.innerText=elem.title;
    brand.style.fontWeight="bold"

    var name=document.createElement("p")
    name.innerText=elem.desc;

    var price = document.createElement("p")
    price.innerText =elem.price;
    price.style.fontWeight="bold";
    price.style.color="red";

    var strikeprice = document.createElement("p")
    strikeprice.innerText = elem.strikeprice;
    strikeprice.style.textDecoration="line-through";

    var stores = document.createElement("p")
    stores.innerText =elem.store;
    stores.style.color="grey";

    div1.append(strikeprice , price)
    div2.append(brand,name,div1,stores)
    maindiv.append(image,div2)
    document.querySelector("#m1Products").append(maindiv)
})
}
displayDatamen(allwomenData)

