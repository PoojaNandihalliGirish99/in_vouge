import React, {useState} from 'react'
import {
    Button,
    Input,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import {login} from "../../features/slices/authSlice"
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
    const initialState = {
        name: "",
        password: "",
        image:""
    }

    const [values, setValues]  = useState(initialState);
    const onChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})

    }
  return (
    <div className='grid grid-cols-1 items-center justify-items-center h-screen'>
      <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Name" size="lg" name='name' type='text' value={values.name} onChange={onChange} />
        <Input label="Password" size="lg" type='password' name='password' value={values.passwrod} onChange={onChange} placeholder='Example: abc#34'/>
        <Input label="Image URL address" size="lg" type='text' name='image' value={values.image} onChange={onChange}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth color='blue' onClick={() => dispatch(login(values))}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-left text-xs">
          Image is optional<br></br> 
          Password and Name must have minimum 5 letters<br></br> 
          Please include special characters and numbers
        </Typography>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login
