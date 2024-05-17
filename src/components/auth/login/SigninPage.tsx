import Column from '@/components/reuseable-ui/column/Column';
import CustomInput from '@/components/reuseable-ui/inputs/CustomInput';
import InputField from '@/components/reuseable-ui/inputs/InputField';
import BodyText from '@/components/reuseable-ui/texts/BodyText';
import HeaderText from '@/components/reuseable-ui/texts/HeaderText';
import { useAppDispatch } from '@/hooks';
import useCustomToast from '@/hooks/useCustomToast';
import { useLoginMutation } from '@/store/services/authApi';
import { login } from '@/store/slices/authSlice';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';

type SigninPageProps = {};

const SigninPage: FC<SigninPageProps> = ({}) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [trigger, result] = useLoginMutation();
	useCustomToast(result, 'Login Successful', 'Login Failed');

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const body = {
			email_phone: email,
			password,
		};
		trigger(body);
	};

	useEffect(() => {
		if (result.isSuccess) {
			dispatch(login(result.data?.token as string));
			router.push('/');
		}
	}, [result]);
	return (
		<form onSubmit={handleSubmit}>
			<Column h={'100vh'} w='full' bg='#818FB4'>
				<Column
					h='full'
					align={'center'}
					justify='center'
					w='full'
					maxW={'780px'}
					mx='auto'
					px={6}
					gap={5}
				>
					<HeaderText>Sign In</HeaderText>
					<InputField label='Enter Email'>
						<CustomInput
							value={email}
							onChange={(e: any) => setEmail(e.target.value)}
							placeholder='john@example.com'
							type='email'
						/>
					</InputField>
					<InputField label='Enter Password'>
						<CustomInput
							value={password}
							onChange={(e: any) => setPassword(e.target.value)}
							placeholder='password'
							type='password'
						/>
					</InputField>
					<Button colorScheme='purple' type='submit'>
						Sign In
					</Button>
					<BodyText>
						Don't have an account? <a href='/auth/signup'>Sign Up</a>
					</BodyText>
				</Column>
			</Column>
		</form>
	);
};

export default SigninPage;
