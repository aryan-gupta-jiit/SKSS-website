import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

function Orders() {
    const {products,currency}=useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
        <div className='text-2xl'>
            <Title text1={'MY'} text2={'ORDERS'}/>
        </div>
        <div>
            {
                products.slice(1,4).map((item,index)=>(
                    <div key={index} className='flex flex-col border-b py-4 text-gray-700 md:flex-row md:items-center md:justify-between gap-4'>
                        <div className='flex items-start gap-6 text-sm'>
                            <img src={item.image[0]} alt="" className='w-16 sm:w-20'/>
                            <div>
                                <p className='sm:text-base font-medium'>{item.name}</p>
                                <div className='flex items-center gap-5 mt-2 text-base text-gray-700'>
                                    <p>{currency}{item.price}</p>
                                    <p>Quantity:1</p>
                                    <p>Length:Short</p>
                                </div>
                                <p className='mt-1'>Date:<span className='text-gray-400'>25, July , 2024</span></p>
                            </div>
                        </div>
                        <div className=' md:w-1/2 flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                <p>Ready to ship</p>
                            </div>
                            <button className='border px-4 py-2 text-sm font-medium rounded-sm cursor-pointer'>Track Order</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Orders