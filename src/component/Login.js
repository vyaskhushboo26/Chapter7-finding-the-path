import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

// custom validation
// const validate = (values) => {
// const error ={};
// if(!values.email){
//     error.email = "Required";
// }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//     error.email = "Invalid email address";
// }

// if(!values.password){
//     error.password="Required";
// }else if(values.password.length > 5){
//     error.password = "Must be 5 charater or less"
// }

// return error;
// }

const Login = () => {

const formik = useFormik({
    initialValues: {
        email: "",
        password: ""
    },
    // ,validate
    validationSchema: Yup.object({
        email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        password: Yup.string()
                    .max(5,'Must be 5 charactor or less')
                    .required('Required')
    })

   ,

    onSubmit: (values) => {
        console.log('Form Submitted',values);
        alert(JSON.stringify(values, null, 2));
    }
})

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>&nbsp;
            <input 
            type="email"
            id="email"
            // name="email"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps('email')}
            />&nbsp;&nbsp;&nbsp;&nbsp;

            { formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="password">Password</label>&nbsp;
            <input 
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />&nbsp;&nbsp;&nbsp;&nbsp;

            { formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <button type="submit" disabled={formik.isSubmitting}>Submit</button>
        </form>
    )
}


export default Login;




