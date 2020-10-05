var wrapperEle = document.body;

var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

var item = [];

function cart(obj) {
  
  var that = this;
  
  this.id = obj.id;
  this.image = obj.image;
  this.name = obj.name;
  this.price = obj.price;
  this.color = obj.color;
  
  this.ele = document.createElement("div");
  this.idEle = document.createElement("div");
  this.imageEle = document.createElement("img");
  this.nameEle = document.createElement("h2");
  this.priceEle = document.createElement("h3");
  this.colorEle = document.createElement("div");
  this.clicker = document.createElement("div");
  this.ele.classList.add("product");
  this.clicker.classList.add("popUp");
  
  this.imageEle.src=this.image
  this.nameEle.innerHTML = "Name: "+ obj.name;
  this.priceEle.innerHTML = "Price: $"+ obj.price;

  this.ele.appendChild(this.imageEle);
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.priceEle);

  document.body.appendChild(this.clicker);
  this.clicker.style.display = "none";

  this.ele.addEventListener("click", function(){
    if (obj.id === 0,1,2) {
      that.clicker.appendChild(that.imageEle);
      that.clicker.appendChild(that.nameEle);
      that.clicker.appendChild(that.priceEle);
      that.clicker.style.display = "flex";
    }
  });

  this.clicker.addEventListener("click", function(){
    if (obj.id === 0,1,2) {
      that.ele.appendChild(that.imageEle);
      that.ele.appendChild(that.nameEle);
      that.ele.appendChild(that.priceEle);
      that.clicker.style.display = "none";
    }
  });

  this.ele.addEventListener("mouseover", function(){
    that.ele.style.borderColor = obj.color
  });

  this.ele.addEventListener("mouseout", function(){
    that.ele.style.borderColor = ""
  });

  document.body.appendChild(this.ele);
}

for (var i=0; i<products.length; i++) {
  item.push(new cart(products[i]));
}