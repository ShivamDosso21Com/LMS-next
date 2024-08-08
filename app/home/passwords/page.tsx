"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from "sweetalert2";
import { update_passoword } from '@/app/services/api/auth/Update_password';

const ChangePassword = () => {
  const [formValues, setFormValues] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const { old_password, new_password, confirm_password } = formValues;
    const noErrors = !errors.old_password && !errors.new_password && !errors.confirm_password;
    const allFieldsFilled = old_password && new_password && confirm_password;
    setIsSubmitDisabled(!(noErrors && allFieldsFilled));
  }, [formValues, errors]);

  const validatePassword = (value: any) => {
    if (value.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Validate the password fields on change
    if (name === 'old_password' || name === 'new_password') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validatePassword(value),
      }));
    }

    if (name === 'confirm_password') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirm_password: value !== formValues.new_password ? 'New password and confirmation must match' : '',
      }));
    }
  };
const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newErrors = {
      old_password: validatePassword(formValues.old_password),
      new_password: validatePassword(formValues.new_password),
      confirm_password: formValues.new_password !== formValues.confirm_password ? 'New password and confirmation must match' : '',
    };

    setErrors(newErrors);

    const noErrors = !newErrors.old_password && !newErrors.new_password && !newErrors.confirm_password;
    if (noErrors) {
      try {
        await update_passoword(formValues.old_password, formValues.new_password);
        // Clear the form fields
        setFormValues({
          old_password: '',
          new_password: '',
          confirm_password: '',
        });
        // Show success message
        Swal.fire({
          title: "Success!",
          text: "Password updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        }).then(()=>{
          router.push('/')
        });
      } catch (error) {
        console.error('Error updating password:', error);
        // Optionally, handle error (e.g., display an error message)
      }
    }
  };

  return (
    <div className='mt-16 px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='grid max-w-md mx-auto bg-white p-6 rounded-lg shadow-md w-full'>
        <h1 className='text-2xl font-bold mb-6'>Change Passwords</h1>
        <div className='mb-4'>
          <label htmlFor='old_password' className='block text-sm font-semibold mb-1'>
            Old Password:
          </label>
          <input
            type='password'
            id='old_password'
            name='old_password'
            value={formValues.old_password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300"
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='new_password' className='block text-sm font-semibold mb-1'>
            New Password:
          </label>
          <input
            type='password'
            id='new_password'
            name='new_password'
            value={formValues.new_password}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.new_password ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.new_password && <p className='text-red-500 text-sm'>{errors.new_password}</p>}
        </div>

        <div className='mb-6'>
          <label htmlFor='confirm_password' className='block text-sm font-semibold mb-1'>
            Confirm Password:
          </label>
          <input
            type='password'
            id='confirm_password'
            name='confirm_password'
            value={formValues.confirm_password}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.confirm_password ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.confirm_password && <p className='text-red-500 text-sm'>{errors.confirm_password}</p>}
        </div>

        <button
          type='submit'
          className={`w-full bg-color text-white p-2 rounded-md hover:bg-gray-600 ${isSubmitDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
