import { AuthStateProps } from '@/app/auth/login/page';
import { useAuth } from '@/hooks/useAuth';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import React, { FC, ReactNode, useEffect } from 'react';
import Navbar from '../nav/Navbar';
import Column from '../reuseable-ui/column/Column';
import useCustomColors from '@/hooks/useCustomColors';

type PageLayoutProps = {
	title?: string;
	children?: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
	const router = useRouter();
	const { bgColor } = useCustomColors();
	const { loading, isLoggedIn }: AuthStateProps = useAuth();

	useEffect(() => {
		if (!loading && !isLoggedIn) {
			router.replace('/auth/login');
		}
	}, [loading, isLoggedIn]);

	if (loading) return null;

	const head = (
		<Head>
			<title>{title || 'Daily Todo'}</title>
			<meta property='title' content='Daily Todo' />
			<link rel='icon' href='/favicon.ico' />

			<meta
				name='description'
				content='This is a simple todo app to keep track of your daily tasks.'
			></meta>
			<meta property='og:title' content='Daily Todo' key='ogtitle' />
			<meta
				property='og:description'
				content='This is a simple todo app to keep track of your daily tasks.'
				key='ogdesc'
			/>

			<meta property='og:image' content='/hero.jpeg' key='ogimage' />
			<meta property='og:site_name' content={'Daily Todo'} key='ogsitename' />
		</Head>
	);

	if (isLoggedIn) {
		return (
			<>
				{head}
				<Column bg={bgColor} px={4}>
					<Navbar />
					{children && children}
					{/* <Footer /> */}
				</Column>
			</>
		);
	}
	return null;
};

export default PageLayout;
