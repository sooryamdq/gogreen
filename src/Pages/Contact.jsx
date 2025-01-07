import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { add_query } from '../APIvarialbles/service';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  names: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobile: Yup.string().required('Mobile is required'),
  subjects: Yup.string().required('Subject is required'),
  messages: Yup.string().required('Message is required'),
});

const initialValues = {
  names: '',
  email: '',
  mobile: '',
  subjects: '',
  messages: '',
};

const handleSuccess = (message)=>{
  toast.success(message)
}

const handleError = (message)=>{
  toast.error(message)
}

const handleSubmit = async (values, { resetForm }) => {
  
  const { names, email, mobile, subjects, messages } = values;
  if (!names || !email || !mobile || !subjects || !messages) {
    handleError.error("Name, mobile number, email id, subjects and messages field should not be empty");
    return;
  }
  const formdata = new FormData()
  formdata.append("names",names)
  formdata.append("email",email)
  formdata.append("mobile",mobile)
  formdata.append("subjects",subjects)
  formdata.append("messages",messages)
  try{
  const response = await axios.post(add_query,formdata)
  console.log(response.data)
  handleSuccess(response.data.message)
  resetForm();
  }catch(error){
    handleError(response.data.message)
  }

};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when half of the form is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    }, options);

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div className="lg:px-20 px-2 lg:mt-8 my-16 relative roboto-regular" id="contact">
      <p ref={formRef} className={`text-primary roboto-regular lg:text-5xl text-3xl lg:pt-8 pt-2 px-4 lg:mt-4 my-0  ${isVisible?"heading":""}`}>LET’S BUILD THE FUTURE TOGETHER</p>
      <p ref={formRef} className={`text-base roboto-regular py-4 text-white px-4 ${isVisible?"contacttext":""}`}>Contact GoGreenVerz Tech Solutions For Personalized Consultations And<br />Visionary Development.</p>
      <div ref={formRef} className={`lg:w-[85%] w-full h-[637px] roboto-regular border flex justify-center items-center flex-col border-primary p-4 relative bg-[#F0F0F0] ${isVisible?"forms":""}`}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className=" w-full p-4 roboto-regular">
            <div className="mb-6 w-full">
              <label htmlFor="names" className="block text-primary text-sm font-bold mb-2">Name</label>
              <Field
                type="text"
                name="names"
                className={`bg-transparent border-b border-primary w-full py-2  text-primary leading-tight focus:outline-none `}
                
              />
              <ErrorMessage name="names" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-primary text-sm font-bold mb-2">Email</label>
              <Field
                type="email"
                name="email"
                className={` border-b bg-transparent border-primary w-full py-2 px-3 text-primary leading-tight focus:outline-none `}
                
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-6">
              <label htmlFor="mobile" className="block text-primary text-sm font-bold mb-2">Mobile</label>
              <Field
                type="number"
                name="mobile"
                className={`border-b bg-transparent border-primary w-full py-2 px-3 text-primary leading-tight focus:outline-none `}
                
              />
              <ErrorMessage name="mobile" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-6">
              <label htmlFor="subjects" className="block text-primary text-sm font-bold mb-2">Subject</label>
              <Field
                type="text"
                name="subjects"
                className={` border-b bg-transparent w-full py-2 px-3 text-primary leading-tight focus:outline-none border-primary`}
                
              />
              <ErrorMessage name="subjects" component="div" className="text-red-500 text-xs italic" />
            </div>

            <div className="mb-6">
              <label htmlFor="messages" className="block text-primary text-sm font-bold mb-2">Message</label>
              <Field
                as="textarea"
                name="messages"
                className={`appearance-none bg-transparent border-b w-full py-2 px-3 text-primary leading-tight focus:outline-none border-primary`}
                
              />
              <ErrorMessage name="messages" component="div" className="text-red-500 text-xs italic" />
            </div>
           <div className='flex justify-center'>
           <button type="submit" className="bg-primary text-white  rounded-full text-primary font-bold px-16  py-2 focus:outline-none focus:shadow-outline">
              Submit
            </button>
           </div>
           
          </Form>
          )}
        </Formik>
        <div className='lg:block hidden roboto-regular'>
        <p className={`text-primary roboto-regular lg:text-7xl text-sm py-8 px-4 my-4 absolute top-5 right-0 text-center transform -rotate-90  origin-top-right `}>KEEP IN TOUCH</p>
        </div>
       
      </div>
     
      <p className={`text-primary lg:text-7xl text-sm py-8 px-4 my-4 roboto-regular absolute -bottom-20 right-0 text-center transform -rotate-360  origin-top-right lg:hidden block`}>KEEP IN TOUCH</p>
    </div>
  );
};

export default Contact;
