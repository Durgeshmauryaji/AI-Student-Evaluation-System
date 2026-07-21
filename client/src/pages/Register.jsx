import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";

import api from "../services/api";

function Register() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    name: "",

    email: "",

    password: "",

    role: "student",

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
      "/auth/register",
      formData
    );


    // Save user
    localStorage.setItem(
      "user",
      JSON.stringify(res.data)
    );


    // Save token
    localStorage.setItem(
      "token",
      res.data.token
    );



    // Role Based Navigation

    if(res.data.role === "teacher"){

      navigate("/teacher-dashboard");

    }
    else if(res.data.role === "student"){

      navigate("/student-dashboard");

    }
    else{

      navigate("/");

    }



  } catch (error) {


    alert(
      error.response?.data?.message ||
      "Registration Failed"
    );


  }

};



  return (

    <AuthLayout title="Create Account">


      <form onSubmit={handleSubmit}>


        <InputField

          label="Name"

          name="name"

          value={formData.name}

          onChange={handleChange}

        />



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



        {/* Role Selection */}

        <div className="mb-4">

          <label className="block mb-2 font-medium">

            Select Role

          </label>


          <select

            name="role"

            value={formData.role}

            onChange={handleChange}

            className="
              w-full
              border
              p-3
              rounded-lg
            "

          >

            <option value="student">

              Student

            </option>


            <option value="teacher">

              Teacher

            </option>


          </select>


        </div>



        <Button type="submit">

          Register

        </Button>


      </form>



      <p className="text-center mt-5">


        Already have an account?


        <Link

          to="/login"

          className="text-blue-600 ml-2"

        >

          Login

        </Link>


      </p>



    </AuthLayout>

  );

}


export default Register;