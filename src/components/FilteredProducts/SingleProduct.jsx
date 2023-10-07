import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from '../../features/slices/cartSlice';

function SingleProduct() {
    const { id } = useParams();

    const product = useSelector((state) => state.product.singleProduct);
    const productSize = product[0].size ? product[0].size[0] : "";
    const productColor = product[0].color ? product[0].color[0] : "";
    const [size, setSize] = useState(productSize);
    const [color, setColor] = useState(productColor);

    const dispatch = useDispatch()

    return (
        <div>
            {product.filter((item) => item.id === id).map((item, index) => (
                <div key={index} className='flex justify-center items-center py-10'>
                    <div className='pl-44 grow-[2]'>
                        <img src={item.img} alt={item.name} className='h-[850px] rounded-lg' />
                    </div>
                    <div className='grow-[3]'>
                        <div className='max-w-lg'>
                            <h5 className='text-2xl font-inter font-bold tracing-normal leading-none pb-4'>{item.name}</h5>
                            <p className='text-orange-700 text-xl font-inter font-bold tracing-normal leading-none pb-4'>15% off</p>
                            <p className='text-orange6700 text-xl font-inter font-bold tracing-normal leading-none pb-4'>{item.text}</p>

                            <div className='pb-4'>
                                {item.size && (
                                    <div>
                                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                                        <select
                                            name='size'
                                            value={size}
                                            onChange={(e) => setSize(e.target.value)}
                                            id="size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            {item.size.map((size, index) => (
                                                <option key={index} value={size}>{size}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>

                            <div className='pb-4'>
                                <label htmlFor="colors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a color</label>
                                <select
                                    name='colors'
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    id="colors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {item.color.map((color, index) => (
                                        <option key={index} value={color}>{color}</option>
                                    ))}
                                </select>
                            </div>

                            <Tooltip content="Add to Cart" placement="bottom" className="pb-4">
                                <Button 
                                onClick={() => dispatch(addToCart({
                                    id: item.id,
                                    name: item.name,
                                    color: color,
                                    size: size,
                                    img: item.img,
                                    text: item.text,
                                    price:item.price,
                                    amount: 1,
                                    totalPrice: item.price,
                                }))}
                                color='gray' size='lg' variant='outlined' ripple={true}>Add to Cart</Button>
                            </Tooltip>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SingleProduct
