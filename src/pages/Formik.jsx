import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Formik = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }, onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: yup.object({
            firstName: yup.string("Input your first name").required('First name is required'),
            lastName: yup.string("Input your last name").required('Last name is required'),
            email: yup.string("Fix your Email").required('Email is required').email('Invalid email address'),
            password: yup.string("Put your password").required('Password is required').min(6, 'Password must be at least 6 characters'),
        })
        
    })
    console.log(formik.errors)
    console.log(formik.values);
    
    return (
        <span>
            <input type="text" name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.firstName && formik.errors.firstName ? <span>{formik.errors.firstName}</span> : <span>{formik.values.firstName}</span>}
            <input type="text" name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.lastName && formik.errors.lastName ? <span>{formik.errors.lastName}</span> : ""}
            <input type="text" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : ""}
            <input type="text" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : ""}

            <button type="button" onClick={formik.handleSubmit}>Submit</button>
        </span>
    )
}

export default Formik