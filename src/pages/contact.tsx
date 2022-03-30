import React,{useState} from "react";
// import Components
import Nav from "../components/nav";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type formInput = {
    firstName:string;
    lastName:string;
    email:string;

} 

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
});





const Contact = () => {
    const [users,setUsers] = useState<any>([])
    const {register, handleSubmit,setError,formState:{errors},watch} = useForm<formInput>({
            resolver: yupResolver(schema)
    });
    const watchFirstName = watch('firstName','');

    console.log(watchFirstName);
    console.log(users)
    return(
        <div className="contact bg-gradient-to-r from-[#7303c0] to-[#ec38bc] min-h-[100vh] w-full ">
            <Nav/>
            <div className="form flex justify-center  min-h-[40vh]  ">

                <form action="" onSubmit={handleSubmit(d => setUsers([...users, d]))} className="min-w-[50vh] flex flex-col items-center justify-center bg-[#000000] w-[25%] min-h-[40vh] rounded-[1rem] my-[5rem]">
                    <input className="m-[1rem] p-[0.2rem]" type="text" autoComplete="off"  placeholder="First Name" onSubmit={() =>setError('firstName',{
                        type: 'auto',
                        message: 'Please use a longer firstName'
                    })}  {...register('firstName')}  />
                    {  errors.firstName && watchFirstName.length < 4 && <p className="text-white">{errors.firstName.message}</p>}
                   
                   
                    <input className="m-[1rem] p-[0.2rem]" type="text"  placeholder="Last Name" {...register('lastName')}/>
                    <input className="m-[1rem] p-[0.2rem]" type="text" placeholder="Email" {...register('email')} />
                    <input className="m-[1rem]  bg-white text-black py-[0.5rem] px-[1rem] rounded-[1rem]" type="submit" name="submit"  />

                </form>
                
            </div>
            <div className="users w-full flex items-center flex-col">
                {users.map((user:any) => {
                    return(
                        <div className="user bg-black text-white p-[3rem] rounded-[1rem] m-[1rem]">
                            <div className="name flex">
                            <h3 className="pr-[0.5rem]">{`${user.firstName} `} </h3>
                            <h3>{user.lastName}</h3>
                            </div>
                            <p>{user.email}</p>

                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Contact;