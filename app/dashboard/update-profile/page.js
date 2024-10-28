"use client"
import { useFormik } from "formik";
import * as yup from  "yup"
import { TextField, Buttton } from "@mui/material"
import { FaUserEdit } from "react-icons/fa";

const schema = yup.object().shape({
    firstName: yup.string().required().min(3),
    lastName: yup.string().required().min(3),


})

export default function UpdateProfile () {

    const { handleSubmit,handlechange,handleBlur,errors,touched,values } = useFormik({
        initialValues: { firstName:"",lastName:"",phone:"",address:""},
        onSumbit: () => {},
        validationScheme: null
    });

    console.log(values.first);


    return (
        <main className="min-h-screen flex flex justify-center px-2 md:px-16 lg:px-20 py-16 bg-gray-200">
            <div className="w-full md:w-[400px] p-4 rounded-md bg-gray-50">
                <blockquote className="flex items-center gap-2">
                    <FaUserEdit className="text-2xl"/>
                    <span className="block text-2xl">Update Your Profile</span>
                </blockquote>

                <form onSubmit={handleSubmit} className="mt-6"></form>
                    <div className="mb-3">
                        <TextField
                        type="text"
                        id="firstName"
                        label="first name"
                        variant="outlined"
                        value={values.firstName}
                        onChange={handlechange}
                        onBlur={handleBlur}
                        placeholder="eg. Ademola"
                        className="w-full"
                        />
                        {touched.firstName && errors.firstName ? <span className="text-xs text-red-500">{errors.lastName}</span> null}
                    </div>
                    <div className="mb-3">
                        <TextField
                        type="text"
                        id="firstName"
                        label="first name"
                        variant="outlined"
                        value={values.firstName}
                        onChange={handlechange}
                        onBlur={handleBlur}
                        placeholder="eg. Ademola"
                        className="w-full"
                        />
                        {touched.firstName && errors.firstName ? <span className="text-xs text-red-500">{errors.phone}</span> null}
                    </div>
                    <div className="mb-3">
                        <TextField
                        type="text"
                        id="firstName"
                        label="first name"
                        variant="outlined"
                        value={values.firstName}
                        onChange={handlechange}
                        onBlur={handleBlur}
                        placeholder="eg. Ademola"
                        className="w-full"
                        />
                        {touched.firstName && errors.firstName ? <span className="text-xs text-red-500">{errors.address}</span> null}
                    </div>
            </div>

        </main>
    )
}

// react -icons
// formik
// validatiom
// authentication
// autorization