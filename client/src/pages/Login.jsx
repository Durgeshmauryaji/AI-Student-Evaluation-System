import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import api from "../services/api";


function Login() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    email: "",

    password: "",

  });



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {


      const res = await api.post(
        "/auth/login",
        formData
      );



      localStorage.setItem(
        "token",
        res.data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );



      // Role Based Redirect

      if (res.data.role === "teacher") {

        navigate("/teacher-dashboard");

      } 
      else {

        navigate("/student-dashboard");

      }



    } catch (error) {


      alert(
        error.response?.data?.message ||
        "Login Failed"
      );


    }

  };



  return (

    <AuthLayout title="Login">


      <form onSubmit={handleSubmit}>


        <InputField

          label="Email"

          name="email"

          type="email"

          value={formData.email}

          onChange={handleChange}

        />



        <InputField

          label="Password"

          name="password"

          type="password"

          value={formData.password}

          onChange={handleChange}

        />



        <Button type="submit">

          Login

        </Button>



      </form>



      <p className="text-center mt-5">


        Don't have an account?


        <Link

          to="/register"

          className="text-blue-600 ml-2"

        >

          Register

        </Link>


      </p>



    </AuthLayout>

  );

}


export default Login;