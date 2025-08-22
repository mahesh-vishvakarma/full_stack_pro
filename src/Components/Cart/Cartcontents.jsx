import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const Cartcontents = () => {
    const cartProducts = [
        {
            productId : 1,
            name : "T-shirt",
            size : "M",
            color : "Red",
            price : 15,
            qty : 1,
            image : "https://picsum.photos/200?random=1",
        },
        {
            productId : 2,
            name : "jeans",
            size : "L",
            color : "Blue",
            price : 15,
            qty : 1,
            image : "https://picsum.photos/200?random=2",
        },
    ]
  return (
    <div>
     {
        cartProducts.map((product,index)=>(
            <div key={index} className='flex justify-between items-start border-b py-4'>
                <div className='flex item-start'>
                    <img src={product.image} alt={product.name} className='w-20 h-24 mr-4 object-cover rounded' />
                    <div className='mt-1.5'>
                        <h3>{product.name}</h3>
                        <p className='text-sm text-gray-500'>size :{product.size} | color: {product.color}</p>
                    <div className='flex items-center mt-2'>
                        <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                        <span className='mx-4'>{product.qty}</span>
                        <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>

                    </div>
                    </div>
                </div>
                <div>
                    <p className='font-medium'>$ {product.price.toLocaleString()}</p>
                    <button><RiDeleteBin3Line className='w-6 h-6 text-red-500 translate-y-2'/></button>
                </div>
            </div>
        ))
     }
      <h1>kdjfk</h1>
    </div>
  )
}

export default Cartcontents
