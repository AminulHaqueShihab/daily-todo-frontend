'use client';
import SignupPage from '@/components/auth/signup/SignupPage';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { AuthStateProps } from '../login/page';
import { useAuth } from '@/hooks/useAuth';

type SignupProps = {};

const Signup: NextPage<SignupProps> = ({}) => {
	const router = useRouter();

	const { loading, isLoggedIn }: AuthStateProps = useAuth();

	// effects
	useEffect(() => {
		if (isLoggedIn && !loading) {
			router.replace('/');
		}
	}, [isLoggedIn, loading]);

	useEffect(() => {
		console.log('loading', loading);
		console.log('isLoggedIn', isLoggedIn);
	}, [loading, isLoggedIn]);

	if (loading) return null;

	if (!isLoggedIn) return <SignupPage />;

	return null;
};

export default Signup;
