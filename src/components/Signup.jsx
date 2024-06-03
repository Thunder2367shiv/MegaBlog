import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError('');
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-600'>
            <div className='max-w-md w-full p-8 bg-gray-800 text-gray-100 shadow-lg rounded-lg'>
                <div className='mb-4 flex justify-center'>
                    <Logo width='50px' />
                </div>
                <h2 className='text-2xl font-bold text-center mb-4'>Sign up to create an account</h2>
                <p className='text-center mb-4'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-primary hover:underline'>
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mb-4 text-center'>{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label='Full Name'
                            placeholder='Enter your full name'
                            {...register('name', {
                                required: true,
                            })}
                        />
                        <Input
                            label='Email'
                            placeholder='Enter your email'
                            type='email'
                            {...register('email', {
                                required: true,
                                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                            })}
                        />
                        <Input
                            label='Password'
                            type='password'
                            placeholder='Enter your password'
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <Button type='submit' className='w-full'>
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
