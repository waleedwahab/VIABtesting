"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { signupValidationSchema } from '../../validations/SignupValidation';
import signup1 from '../../../public/assets/images/loginimage1.png';
import facebookicon from '../../../public/assets/icons/png/facebookicon.png';
import githubicon from '../../../public/assets/icons/png/githubicon.png';
import googleicon from '../../../public/assets/icons/png/googleicon.png';
import './Register.css';
import { useRouter } from 'next/navigation';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  [key: string]: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setApiError('');
  setSuccessMessage('');
  setErrors({});

  try {
    await signupValidationSchema.validate(formData, { abortEarly: false });

    const { fullName, email, password } = formData;

    const res = await axios.post(
      "https://viabtesting.onrender.com/api/v1/users/registeruser",
      { fullName, email, password },
      { withCredentials: true } // ✅ Include cookies
    );

    // Store email only if needed
    sessionStorage.setItem('otpEmail', email);

    setSuccessMessage(res.data.message || 'Registered successfully!');
    router.push('/auth/otp');
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      const formErrors: Errors = {};
      err.inner.forEach((e: any) => {
        if (e.path) formErrors[e.path] = e.message;
      });
      setErrors(formErrors);
    } else if (err?.response?.data?.message) {
      setApiError(err.response.data.message);
    } else {
      setApiError('Something went wrong. Please try again.');
    }
  }
};


  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setApiError('');
  //   setSuccessMessage('');
  //   setErrors({});

  //   try {
  //     await signupValidationSchema.validate(formData, { abortEarly: false });

  //     const { fullName, email, password } = formData;

  //     const res = await axios.post(`${baseURL}/users/registeruser`, {
  //       fullName,
  //       email,
  //       password,
  //     });

  //     const token = res.data?.data?.token;

  //     if (token) {
  //       sessionStorage.setItem('otpToken', token);
  //       sessionStorage.setItem('otpEmail', email);
  //       setSuccessMessage(res.data.message || 'Registered successfully!');
  //       router.push('/auth/otp');
  //     } else {
  //       setApiError('OTP token not received from server.');
  //     }
  //   } catch (err: any) {
  //     if (err.name === 'ValidationError') {
  //       const formErrors: Errors = {};
  //       err.inner.forEach((e: any) => {
  //         if (e.path) formErrors[e.path] = e.message;
  //       });
  //       setErrors(formErrors);
  //     } else if (err?.response?.data?.message) {
  //       setApiError(err.response.data.message);
  //     } else {
  //       setApiError('Something went wrong. Please try again.');
  //     }
  //   }
  // };

  return (
    <div className="main-signup-div  w-100">
      
      <div className="container flex-div-cont">
        <div className=" images-bg-signup signup-cont-img">
        </div>
        <div className=" signup-cont-img">
          <div className="signup-form-container text-start pt-4 pb-3 ps-5 pe-5">
            <h2 className="signup-title">Signup</h2>
            <p className="signup-subtitle">Just some details to get you in</p>

            <form className="signup-form text-end" onSubmit={handleSubmit}>
              {apiError && <div className="alert alert-danger">{apiError}</div>}
              {successMessage && <div className="alert alert-success">{successMessage}</div>}

              <div className="mb-3">
                <input
                  type="text"
                  name="fullName"
                  className="form-control signup-input"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <div className="text-danger text-start">{errors.fullName}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control signup-input"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="text-danger text-start">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control signup-input"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="text-danger text-start">{errors.password}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control signup-input"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <div className="text-danger text-start">{errors.confirmPassword}</div>}
              </div>

              <button type="submit" className="btn btn-primary signup-button w-100 mt-3">
                Signup
              </button>

              <div className="d-flex align-items-center justify-content-center mt-3">
                <div className="border1 me-3"></div>
                <p className="mt-3">Or</p>
                <div className="border2 ms-3"></div>
              </div>

              <div className="signup-socials mt-4 d-flex align-items-center justify-content-center gap-3 text-center">
                <Image src={googleicon} alt="Google" width={42} height={42} className="login-icons" />
                <Image src={facebookicon} alt="Facebook" width={42} height={42} className="login-icons" />
                <Image src={githubicon} alt="GitHub" width={42} height={42} className="login-icons" />
              </div>

              <p className="signup-login-link text-center mt-4 pb-3">
                Already Registered? <a href="/auth/login" className="href-hover">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
