import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  gender?: string;
  height?: string;
  age?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

const Signup: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    height: '',
    age: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.phone) newErrors.phone = 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // Submit logic here
    try {
      const response = await axios.post('/api/register', form);
      console.log('Signup successful:', response.data);
      // Redirect to login page after successful signup
      navigate('/login', {
        state: { message: 'Signup successful! Please log in.' },
      });
    } catch (error) {
      console.error('Signup error:', error);
      const err = error as any;
      const message =
        err.response?.data?.message || 'Signup failed. Please try again.';
      alert(message);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
        <div className='text-2xl font-bold text-blue-600 w-full text-center mb-4'>
          <Link to='/'>Dribbio</Link>
          <h2 className='text-lg font-medium text-transparent bg-clip-text bg-[length:200%_100%] bg-[linear-gradient(45deg,_black_45%,_white_50%,_black_55%)] animate-text-flash-fast'>
            Elite sport life starts here
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Name *
            </label>
            <input
              name='name'
              value={form.name}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors.name && (
              <span className='text-sm text-red-500 mt-1 block'>
                {errors.name}
              </span>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Email *
            </label>
            <input
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors.email && (
              <span className='text-sm text-red-500 mt-1 block'>
                {errors.email}
              </span>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Password *
            </label>
            <input
              name='password'
              type='password'
              value={form.password}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors.password && (
              <span className='text-sm text-red-500 mt-1 block'>
                {errors.password}
              </span>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Phone Number *
            </label>
            <input
              name='phone'
              value={form.phone}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errors.phone && (
              <span className='text-sm text-red-500 mt-1 block'>
                {errors.phone}
              </span>
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Gender
            </label>
            <select
              name='gender'
              value={form.gender}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value=''>Select</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Height(cm)
            </label>
            <input
              name='height'
              value={form.height}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>Age</label>
            <input
              name='age'
              type='number'
              value={form.age}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Address
            </label>
            <input
              name='address'
              value={form.address}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>City</label>
            <input
              name='city'
              value={form.city}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              State
            </label>
            <input
              name='state'
              value={form.state}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Postal Code
            </label>
            <input
              name='postalCode'
              value={form.postalCode}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>
              Country
            </label>
            <input
              name='country'
              value={form.country}
              onChange={handleChange}
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
