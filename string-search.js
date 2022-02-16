const products=[
    'i phone 1TB  camera phone',
    'dell hardcore i28 laptop',
    'red laptop eith back camera',
    'Walton LaptoP'
]
const searching='laptop'
const output=[]
for (const product of products)
{
    if(product.toLowerCase().indexOf(searching.toLocaleLowerCase())!=-1){
        output.push(product);
    }
}
console.log(output)