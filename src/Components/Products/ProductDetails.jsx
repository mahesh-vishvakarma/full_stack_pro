import React from 'react'

const ProductDetails = () => {
    const selectedProduct = {
        name:"Stylish Jacket",
        price:120,
        originalPrice:150,
        description:"this is a stylish jacke perfect for any occation",
        brand:"fashion brand",
        material:"Leather",
        sizes:["S","M","X","XL"],
        colors:["Red","Black"],
        images:[
            {
                url:"https://picsum.photos/500/500?random=1",
                altName:"Stylish Jackat"
            },
             {
                url:"https://picsum.photos/500/500?random=2",
                altName:"Stylish T-Shirt"
            }
        ]
    }
  return (
    <div className='p-6'>
      <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
        <div className='flex flex-col md:flex-row'>
            <div className='hidden md:flex flex-col space-y-4 mr-6'>
               {selectedProduct?.map((item,idx)=>(
                <h1>{item.name}</h1>
               ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
