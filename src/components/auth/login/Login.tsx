'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { useDispatch } from "react-redux";
// import { logIn } from "@/redux/Userslice";
import axios from 'axios';
import facebookicon from "../../../../public/assets/icons/png/facebookicon.png";
import githubicon from "../../../../public/assets/icons/png/githubicon.png";
import googleicon from "../../../../public/assets/icons/png/googleicon.png";
import './Login.css';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
// const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await axios.post("https://viabtesting.onrender.com/api/v1/users/user-login", formData, {
      withCredentials: true,
    });
    console.log("user dtaa info", res);
      const user = res.data?.data?.user;
      console.log("userink lcoallll ", user) 
 localStorage.setItem("userInfo", JSON.stringify(user));


  const storedUser = localStorage.getItem('userInfo');
  console.log("stored user", storedUser);
    
    // dispatch(logIn({
    //   user: res.data.user,      
    // }));

    router.push("/viab/home");
  } catch (err) {
    const error = err as unknown;

    if (axios.isAxiosError(error)) {
      console.error("Login Error:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Login failed");
    } else if (error instanceof Error) {
      console.error("Login Error:", error.message);
      setError(error.message);
    } else {
      console.error("Unknown error occurred");
      setError("Login failed due to an unknown error");
    }
  } finally {
    setLoading(false);
  }
};
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');

  //   try {
  //     await axios.post(
  //       `${baseURL}/users/user-login`,
  //       formData,
  //       { withCredentials: true }
  //     );
  //     router.push('/viab/home');
  //   } catch (err) {
  //     const error = err as unknown;

  //     if (axios.isAxiosError(error)) {
  //       console.error('Login Error:', error.response?.data?.message || error.message);
  //       setError(error.response?.data?.message || 'Login failed');
  //     } else if (error instanceof Error) {
  //       console.error('Login Error:', error.message);
  //       setError(error.message);
  //     } else {
  //       console.error('Unknown error occurred');
  //       setError('Login failed due to an unknown error');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className='main-signup-div '>
      <div className='container d-flex justify-content-between'>
        <div className=' signup-cont-img images-bg-signup'>
        </div>
        <div className='w-50 pt-2 height-main'>
          <div className=" signin-form-containers text-start pb-5 ps-5 pe-5">
            <h2 className="signup-title">Login</h2>
            <p className="signup-subtitle">Glad you&apos;re back</p>

            <form className="signup-form pt-1" onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  className="form-control signin-input"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control signin-input"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label text-white" htmlFor="rememberMe">Remember me</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary signin-button mt-3 w-100"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>

              <div className="signup-or text-center my-3">
                <a href="/auth/forgot-password" className='href-hover normal-color'>Forgot password?</a>
              </div>

              <div className='d-flex align-items-center justify-content-center'>
                <div className='border1 me-3'></div>
                <div><p className='mt-3'>Or</p></div>
                <div className='border2 ms-3'></div>
              </div>

              <div className="signup-socials d-flex align-items-center justify-content-center mt-3 gap-3 text-center">
                <Image
                  src={googleicon}
                  alt="Google"
                  width={42}
                  height={42}
                  className='login-icons'
                  style={{ cursor: "pointer" }}
                />
                <Image src={facebookicon} alt="Facebook" width={42} height={42} className='login-icons' />
                <Image src={githubicon} alt="GitHub" width={42} height={42} className='login-icons' />
              </div>

              <p className="signup-login-link text-center mt-3">
                Don&apos;t have an account? <a href="/auth/register" className='href-hover'>Signup</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
