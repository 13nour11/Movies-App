import React from 'react'
import '@fortawesome/fontawesome-free'
import { useFormik } from 'formik'
export default function Register() {

  function handleSubmit(){

  }
  let formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      pass:'',
      rePass:''
    },
    onSubmit: handleSubmit
  })
  return <>
    <h1 className='text-blue-950 text-4xl font-bold mb-10'>Register </h1>
<form className="max-w-xl mx-auto mt-8" onSubmit={handleSubmit}>
    
    <div className="relative my-7">
        <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-40">
            <i className='fa-solid fa-user'></i>
        </span>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' type="text" id="floating-name" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
        <label for="floating-name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Name</label>

    </div>

    <div className="relative my-7">
        <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
            </svg>
        </span>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' type="text" id="floating-phone-number" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
        <label for="floating-phone-number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Phone</label>
        
    </div>

    <div className="relative my-7">
        <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
        <i className="fa-solid fa-envelope"></i>
        </span>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' type="email" id="floating-email" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
        <label for="floating-email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Email</label>
        
    </div>

    <div className="relative my-7">
        <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
        <i className="fa-solid fa-lock"></i>
        </span>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pass} name='pass' type="password" id="floating-pass" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
        <label for="floating-pass" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Password</label>
        
    </div>
    <div className="relative my-7">
        <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
        <i className="fa-solid fa-lock"></i>
        </span>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePass} name='rePass' type="password" id="floating-rePass" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
        <label for="floating-rePass" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Repassword</label>
        
    </div>

    <button type="submit" className=" w-full text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-950 dark:focus:ring-blue-800 ">Submit</button>

</form>

  </>
}
