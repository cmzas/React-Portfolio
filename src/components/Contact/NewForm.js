import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
}
const onSubmit = (values, submitProps) => {
    console.log('Form data', values)
    toast.info("Message Submit Sucessfully", {
        position: "top-center"
    });
    submitProps.setSubmitting(false)
    submitProps.resetForm()
}

const validationSchema = Yup.object({
    name: Yup.string().min(3,"name must be three or more characters").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required('name is required'),
    email: Yup.string().email('Invalid email format').required('email is required'),
    contactNumber: Yup.string().matches(/^[0-9\s]+$/, "Only number are allowed for this field ").required('number is required'),
    subject: Yup.string().required('subject is required'),
    message: Yup.string().required('message is required')
})

function Form() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    })

    //   console.log('formik.touched', formik.touched)

    return (
        <>
            <form className="pb-5" onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <div className="row mb-4">
                        <div className="col-6">
                            <input
                              
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Full Name'
                                autoComplete="off"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className='error' >{formik.errors.name}</div>
                            ) : null}

                        </div>
                        <div className="col-6">
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email'
                                autoComplete="off"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='error' >{formik.errors.email}</div>
                            ) : null}

                        </div>
                    </div>


                </div>
               
                <div className='form-group'>
                    <div className="row mb-4">
                        <div className="col-6">
                            <input
                                type='text'
                                id='contactNumber'
                                name='contactNumber'
                                placeholder='Number'
                                autoComplete="off"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.contactNumber}
                            />
                            {formik.touched.contactNumber && formik.errors.contactNumber ? (
                                <div className='error'>{formik.errors.contactNumber}</div>
                            ) : null}

                        </div>
                        <div className="col-6">
                            <input
                                type='text'
                                id='subject'
                                name='subject'
                                placeholder='Subject'
                                autoComplete="off"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                            />
                            {formik.touched.subject && formik.errors.subject ? (
                                <div className='error'>{formik.errors.subject}</div>
                            ) : null}

                        </div>
                    </div>


                </div>
              

                <div className='form-group'>

                    <textarea
                        type='text'
                        id='message'
                        name='message'
                        placeholder='message'
                        autoComplete="off"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className='error'>{formik.errors.message}</div>
                    ) : null}
                </div>
                {<div className="input-border mb-2"></div>}

                <button type='submit'>Submit</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default Form;