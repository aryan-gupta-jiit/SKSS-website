import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products,search,showSearch}=useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  const [series,setSeries]=useState([])
  const [length,setLength]=useState([]);
  const [sortType,setSortType]=useState('relavent')

  const toggleSeries=(e)=>{
    if(series.includes(e.target.value)){
        setSeries(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setSeries(prev=>[...prev,e.target.value])
    }
  }

  const toggleLength=(e)=>{
    if(length.includes(e.target.value)){
      setLength(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setLength(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice();

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(series.length>0){
      productsCopy=productsCopy.filter(item=>series.includes(item.series))
    }

    if(length.length>0){
      productsCopy=productsCopy.filter(item=>length.includes(item.length))
    }

    setFilterProducts(productsCopy)
  }

  const sortProducts=()=>{
    let fpCopy=filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[series,length,search,showSearch])
  
  useEffect(()=>{
    sortProducts();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10  border-t'>

      {/* filter options*/}

      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`}/>
        </p>

        {/* series filter  */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Series</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'A'} onChange={toggleSeries}/> A
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'B'} onChange={toggleSeries}/> B
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'D'} onChange={toggleSeries}/> D
            </p>
          </div>
        </div>
        {/* sub series filter  */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'long'} onChange={toggleLength}/> Long
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'short'} onChange={toggleLength}/> Short
            </p>
          </div>
        </div>
      </div>

      {/* right side  */}

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* product sort  */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>

        {/* map products  */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection