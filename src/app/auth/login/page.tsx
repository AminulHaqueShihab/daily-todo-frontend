'use client';
import SigninPage from '@/components/auth/login/SigninPage';
import { useAuth } from '@/hooks/useAuth';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type SignInProps = {};

export type AuthStateProps = {
	isLoggedIn: boolean | undefined;
	loading: boolean;
};

const SignIn: NextPage = () => {
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

	if (!isLoggedIn) return <SigninPage />;

	return null;
};

export default SignIn;
