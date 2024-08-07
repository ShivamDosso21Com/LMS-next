import React from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormValues>();

  const validatePassword = (value: string) => {
    if (value.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return true;
  };

  const onSubmit = (data: FormValues) => {
    if (data.newPassword !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'New password and confirmation must match',
      });
      return;
    }

    // Clear the error if passwords match
    clearErrors('confirmPassword');

    console.log(data);
    // Add your submit logic here
  };

  return (
    <div className="mt-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Change Password</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="oldPassword">Old Password</label>
          <input
            id="oldPassword"
            type="password"
            {...register('oldPassword', {
              required: 'Old password is required',
              validate: validatePassword,
            })}
            className={`w-full p-2 border rounded-md ${errors.oldPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.oldPassword && <p className="text-red-500 text-sm">{errors.oldPassword.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="newPassword">New Password</label>
          <input
            id="newPassword"
            type="password"
            {...register('newPassword', {
              required: 'New password is required',
              validate: validatePassword,
            })}
            className={`w-full p-2 border rounded-md ${errors.newPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1" htmlFor="confirmPassword">Confirm New Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your new password',
            })}
            className={`w-full p-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Page;
