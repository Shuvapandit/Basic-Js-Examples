let  products=
[
    {name:'samsung',price:7000,model:"v79"},
    {name:'iphone',price:900000,model:"i11"},
    {name:'mi mobile' ,price:4000,model:"s70"},
    {name:'Nokia mobile',price:700,model:"1200"},
    {name:'oppo mobile',price:6000,model:"op20"},
    {name:'vivo',price:8000,model:"v9"},
]
function searchItems(products,searchText){
    for (const product  of products)
if(product.name.includes(searchText))
    {
        console.log(product.name)
    }

}
searchItems(products,'mobile')
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}

