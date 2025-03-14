import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext)

    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData();
    }, [productId])

    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* ---------------------- Producsts Data ----------------------*/}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* ---------------------- products images ---------------------- */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
                    {/* ---------------------- List images ----------------------*/}
                    <div className="flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            productData.image.map((item, index) => {
                                <img onClick={() => setImage(item)} key={index} src={item} alt="product image" className='cursor-pointer w-[24%]  sm:w-full sm:mb-3 flex-shrink-0  object-cover' />
                            })
                        }
                    </div>

                    {/*---------------------- main img---------------------- */}

                    <div className='w-full sm:w-[80%]'>
                        <img src={image} alt="" className='w-full h-auto' />
                    </div>
                </div>

                {/* --------- Product Info ------------ */}

                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

                    <button onClick={() => addToCart(productData._id)} className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700 my-8">ADD TO CART</button>

                    <hr className='mt-6 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-4 flex flex-col gap-1'>
                        <p>100% Original Products</p>
                        <p>Cash on delivery is available on this product</p>
                        <p> Easy return and exchange policy within 7 days </p>
                    </div>
                </div>
            </div>

            {/* ---------------------- Products Description and review section ----------------------*/}

            <div className='mt-10'>
                <div className="flex">
                    <b className="px-5 py-3 text-sm border">Description</b>
                </div>
                <div className=" flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
                    <p>
                        Ane-commerce website is an online platform that facilitates the
                        buying and selling of products or services over the internet. It
                        serves as a vietual marketplace where businesses and individuals.com
                        showcase ther produch, interact with customers, and conduct
                        fransactions without the need for a physical presence. E-commerce
                        websites have goned immense popularity due to their convenience,
                        accessibility, and the global reach they offer.
                    </p>
                    <p>
                        E-commerce websites typically display products or services along
                        with defailed descriptions, images, prices, and any ovalable
                        variations (eg, sizes colors). Each product uwaly has its ww
                        dedicated page with relevant infurroution
                    </p>
                </div>
            </div>

             {/* ----------------------  Display Products  Products ----------------------*/}

             <RelatedProducts
        series={productData.series}
        length={productData.length}
      />

        </div>
    ) : <div className='opacity-0'></div>
}

export default Product