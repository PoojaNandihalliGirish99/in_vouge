import { Button } from '@material-tailwind/react'
import React from 'react'
import clothes from "../../assets/images/clothes.jpg"
import { filterProducts } from '../../features/slices/productSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



function NavigateButtons() {
    const buttons = ['Hoodies', 'Dresses', 'Suites', 'Shoes', 'T-Shirts', 'Jeans', 'Jackets', 'Bags']
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex items-center justify-center py-8'>
                {buttons.map((button, index) => (
                    <div key={index} className='mr-4'>
                        <Link to={"/filteredProducts/" + button}>
                            <Button
                                onClick={() => dispatch(filterProducts(button))}
                                color='gray' size='lg' variant='outlined' ripple={true} className='hover:bg-green-300 ease-in-out '>{button}</Button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='bg-green-300 p-2 w-[52%] rounded-md mx-auto'>
                <h3 className='text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>SALES UP TO 50%</h3>
            </div>
            <div className='flex justify-center py-4'>
                <img src={clothes} alt='clothes' className='h-[600px] w-[70%] rounded-md shadow-gray-600' />
            </div>
        </>
    )
}

export default NavigateButtons
