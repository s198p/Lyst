var mens=[
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/saksoff5th/c3352bdd/brunello-cucinelli-Burgundy-Corduroy-Cargo-Pants.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Corduroy Cargo Pants",
        price:"$75",
        strikeprice:"$723.60",
        store:"Saks OFF 5TH",
        color:"red",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/saksoff5th/891505ac/brunello-cucinelli-Light-Denim-Acid-washed-Skinny-Jeans.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Acid washed skinny jeans",
        price:"$358",
        strikeprice:"$895",
        store:"Sake OFF 5TH",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/saksoff5th/453f7410/brunello-cucinelli-Purple-Melange-Knit-Shawl-Beach-Sweater.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Melange knit shawl Beach sweater",
        price:"$1198",
        strikeprice:"$2996",
        store:"Mytheresa",
        color:"offwhite",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/eraldo/7c820e5c/moncler-999-Black-Logo-patch-Hooded-Jacket.jpeg",
        title:"MONCLER",
        desc:"",
        price:"$607",
        strikeprice:"$989",
        store:"Mytheresa",
        color:"black",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/mytheresa/7e419415/moncler-black-Short-sleeved-Cotton-T-shirt.jpeg",
        title:"MONCLER",
        desc:"Short sleeved cotton T-shirt",
        price:"$607",
        strikeprice:"$1304",
        store:"Mytheresa",
        color:"black",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/cettire/ce36a736/brunello-cucinelli-White-Drawstring-Bermuda-Shorts.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Bermuda",
        price:"$1198",
        strikeprice:"$2996",
        store:"Sake OFF 5TH",
        color:"offwhite",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/saksoff5th/891505ac/brunello-cucinelli-Light-Denim-Acid-washed-Skinny-Jeans.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Acid washed skinny jeans",
        price:"$358",
        strikeprice:"$895",
        store:"Sake OFF 5TH",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/saksoff5th/453f7410/brunello-cucinelli-Purple-Melange-Knit-Shawl-Beach-Sweater.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Melange knit shawl Beach sweater",
        price:"$1198",
        strikeprice:"$2996",
        store:"Mytheresa",
        color:"offwhite",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/saksoff5th/453f7410/brunello-cucinelli-Purple-Melange-Knit-Shawl-Beach-Sweater.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Melange knit shawl Beach sweater",
        price:"$1198",
        strikeprice:"$2996",
        store:"Mytheresa",
        color:"offwhite",
    },
    {
        image:"https://cdna.lystit.com/200/250/tr/photos/saksoff5th/c3352bdd/brunello-cucinelli-Burgundy-Corduroy-Cargo-Pants.jpeg",
        title:"BRUNELLO CUCINELLI",
        desc:"Corduroy Cargo Pants",
        price:"$75",
        strikeprice:"$723.60",
        store:"Saks OFF 5TH",
        color:"red",
    },
];

localStorage.setItem("mensD", JSON.stringify(mens));

var allmenData = JSON.parse(localStorage.getItem("mensD")) || []

function displayDatamen(allmenData){
document.querySelector("#m1Products").innerHTML = ""
allmenData.map(function(elem)
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
        window.location.href="productdesc.html";
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
    console.log("12345556")
})
}
displayDatamen(allmenData)
function moreInfo(elem)
{
    window.location.href="productdesc.html";
}



// ...............................................................filters
function black(){
    var value = document.querySelector("#black").checked;
    if (value == true) {
        var black = allmenData.filter(function (elem, index) {
            return elem.color == "black";
        });
        displayDatamen(black);
    }
    else{
        displayDatamen(allmenData)
    }
}

function offwhite(){
    var value = document.querySelector("#offwhite").checked;
    if (value == true) {
        var offwhite = allmenData.filter(function (elem, index) {
            return elem.color == "offwhite";
        });
        displayDatamen(offwhite);
    }
    else{
        displayDatamen(allmenData)
    }
}

function red(){
    var value = document.querySelector("#red").checked;
    if (value == true) {
        var red = allmenData.filter(function (elem, index) {
            return elem.color == "red";
        });
        displayDatamen(red);
    }
    else{
        displayDatamen(allmenData)
    }
}

function brunellocucinelli(){
    var value = document.querySelector("#brunellocucinelli").checked;
    if (value == true) {
        var brunellocucinelli = allmenData.filter(function (elem, index) {
            return elem.title == "BRUNELLO CUCINELLI";
        });
        displayDatamen(brunellocucinelli);
    }
    else{
        displayDatamen(allmenData)
    }
}

function moncler(){
    var value = document.querySelector("#brunellocucinelli").checked;
    if (value == true) {
        var moncler = allmenData.filter(function (elem, index) {
            return elem.title == "MOCLER";
        });
        displayDatamen(moncler);
    }
    else{
        displayDatamen(allmenData)
    }
}