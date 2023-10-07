import React from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slices/cartSlice';
function ProductSectionItem({id, img, name, text, price, size, color, totalPrice}) {
    
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];
    return (
    <div>
        <Card className="w-96">
      <CardHeader floated={false} className="h-96">
        <img src={img} alt="profile" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          {text}
        </Typography>
        <div className='flex justify-between items-center pt-4'>
        <Typography color="gray" className="font-medium" textGradient>
          Size left: {defaultSize}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          Color: <span className='px-2 rounded-full ml-2' style={{backgroundColor: defaultColor}}></span>
        </Typography>

        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
       <Tooltip content="Add to cart" placement="bottom">
        <Button size='lg' color='gray' variant='outlined' ripple={true} onClick={() => dispatch(addToCart({
            id: id,
            text: text,
            name: name,
            size: defaultSize,
            color: defaultColor,
            price: price,
            img: img,
            amount: 1,
            totalPrice: totalPrice
        }))}>Add to cart</Button>
       </Tooltip>
      </CardFooter>
    </Card>
      
    </div>
  )
}

export default ProductSectionItem
