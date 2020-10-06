var products = [
    {
      id:1,
      name:"Zectra",
      photo:"src/img/categorias/bones.jpg",
      category:["bonés"],
      description:"Boné em algodão penteado",
      price: 0.86
    },
    {
        id:2,
        name:"Shorthandle",
        photo:"src/img/categorias/sacos.jpg",
        category:["sacos","viagem"],
        description:"Saco de asas curtas algodão",
        price: 0.79
      },
      {
        id:3,
        name:"Himmy",
        photo:"src/img/categorias/verao.jpg",
        category: ["verão","viagem","sacos"],
        description:"Geleira em TNT 80gr, 6 latas",
        price: 1.13
      },
      {
        id:4,
        name:"Bampen",
        photo:"src/img/categorias/escrita.jpg",
        category: ["escrita","escolar"],
        description:"Esferográfica em bamboo",
        price: 0.47
      },
      {
        id:5,
        name: "Colornote A5",
        photo: "src/img/categorias/escritorios.jpg",
        category: ["escritorios","escolar"],
        description:"Bloco ecológico A5",
        price: 0.76
      },
      {
        id:6,
        name: "Syncphonic",
        photo: "src/img/categorias/tecnologia.jpg",
        category: ["casa","tecnología"],
        description:"Relógio despertador com Bluetooth",
        price: 0.00
      },
      {
        id:7,
        name: "Holdycard",
        photo: "src/img/categorias/inverno.jpg",
        category: ["tecnología","pessoal"],
        description:"Porta-cartão em aluminio",
        price: 0.10
      },
      {
        id:6,
        name: "Stoprai",
        photo: "src/img/categorias/inverno.jpg",
        category: ["inverno"],
        description:"Guarda-chuva automático em P-190T",
        price: 5.40
      },
  ]


/*
var nameProduct = $("#nameProduct").text(product.name)
var photoProduct = $("#photoProduct").attr("src", product.photo);
var categoryProduct = $("#categoryProduct").text(`${product.category[0]}, ${product.category[1]}`);
var descriptionProduct = $("#descriptionProduct").text(product.description);
var priceProduct = $("#priceProduct").text(product.price)



function add = $("#description-product-card").append(
  `<div class="column"><h6 class="mb-2"><a href="">${products.category[0]}</a></h6><h4><a href="">${products[0].name}</a></h4><p>${products.description}</p></div><p class="p-0 m-0">a partir de</p><h4>${products.price}</h4>`
)
*/

var listaTeste = ["a","b","c","d","e"]

var elementosCard = $(".description-product-card > div > h6 > a")
elementosCard.each(function(i){
  var lista = elementosCard.text()
  console.log(lista)
});