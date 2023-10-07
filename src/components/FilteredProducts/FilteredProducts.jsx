import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Error from '../Error/Error';
import { filterByColor, filterByGender, filterBySize, filterProducts, sortByPrice } from "../../features/slices/productSlice"

function FilteredProducts() {
  //state.product, here the product is same as the name given in store.js file.
  const error = useSelector((state) => state.product.error);
  console.log(error)
  const products = useSelector((state) => state.product.filteredProducts)
  console.log("Filtered products component : ", products)
  const { type } = useParams();
  console.log(type)
  const genderButtons = ["male", "female"]
  const colorButtons = ["red", "brown", "green", "purple", "yellow", "black", "white", "blue"]
  const sizeButtons = ["S", "M", "L", "XL"]

  const dispatch = useDispatch();
  return (
    <div>
      <div className='pt-15'>
        <div className='pl-14'>
          <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
          <div className='flex items-center justify-between py-8'>
            <div className='flex items-center'>
              {genderButtons.map((item, index) => (
                <div key={index}>
                  <Button
                    onClick={() => dispatch(filterByGender(item))}
                    color='gray' size='lg' variant='outlined' ripple={true} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>{item}</Button>
                </div>
              ))}
              <Button
                onClick={() => dispatch(sortByPrice())}
                color='gray' size='lg' variant='outlined' ripple={true} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>High Price</Button>
              <Menu>
                <MenuHandler>
                  <Button color='gray' size='lg' variant='outlined' ripple={true} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>Select a color</Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => (
                    <MenuItem
                      onClick={() => dispatch(filterByColor(item))}
                      key={index} style={{ color: item }}>{item}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button 
                  disabled={type === 'Bags' ? true : false}
                  color='gray' size='lg' variant='outlined' ripple={true} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>Select a size</Button>

                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => (
                    <MenuItem key={index} onClick={() => dispatch(filterBySize(item))}>{item}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>
            <div className='pr-14'>
              <Button
                onClick={() => dispatch(filterProducts(type))}
                color='gray' size='lg' variant='outlined' ripple={true} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>Clear Filter</Button>
            </div>

          </div>
        </div>
        {error ? (<Error />) : (
          <div className='grid grid-cols-4 justify-tems-center py-8 gap-12'>
            {products.filter((product) => product.type === type).map((product, index) => (
              <div className='' key={index}>
                <ProductCard id={product.id} name={product.name} img={product.img} price={product.price} colors={product.color} text={product.text} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default FilteredProducts
