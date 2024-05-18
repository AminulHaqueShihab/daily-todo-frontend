import Column from '@/components/reuseable-ui/column/Column';
import CustomInput from '@/components/reuseable-ui/inputs/CustomInput';
import InputField from '@/components/reuseable-ui/inputs/InputField';
import BodyText from '@/components/reuseable-ui/texts/BodyText';
import HeaderText from '@/components/reuseable-ui/texts/HeaderText';
import { useAppDispatch } from '@/hooks';
import useCustomToast from '@/hooks/useCustomToast';
import { useRegisterMutation } from '@/store/services/authApi';
import { login } from '@/store/slices/authSlice';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';

type SignupPageProps = {};

const SignupPage: FC<SignupPageProps> = ({}) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [trigger, result] = useRegisterMutation();
	useCustomToast(result, 'Registration Successful', 'Registration Failed');

	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const body = {
			name,
			email,
			phone,
			password,
			confirmPassword,
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
					<HeaderText>Sign Up</HeaderText>
					<InputField label='Enter Name'>
						<CustomInput
							value={name}
							onChange={(e: any) => setName(e.target.value)}
							placeholder='i.e John Doe'
						/>
					</InputField>
					<InputField label='Enter Email'>
						<CustomInput
							value={email}
							onChange={(e: any) => setEmail(e.target.value)}
							placeholder='i.e john@example.com'
							type='email'
						/>
					</InputField>
					<InputField label='Enter Phone'>
						<CustomInput
							value={phone}
							onChange={(e: any) => setPhone(e.target.value)}
							placeholder='i.e 017xxxxxxxx'
							type='number'
						/>
					</InputField>
					<InputField label='Enter Password'>
						<CustomInput
							value={password}
							onChange={(e: any) => setPassword(e.target.value)}
							placeholder='********'
							type='password'
						/>
					</InputField>
					<InputField label='Confirm Password'>
						<CustomInput
							value={confirmPassword}
							onChange={(e: any) => setConfirmPassword(e.target.value)}
							placeholder='********'
							type='password'
						/>
					</InputField>
					<Button
						isLoading={result.isLoading}
						colorScheme='purple'
						type='submit'
					>
						Sign Up
					</Button>
					<BodyText>
						Already have an account? <a href='/auth/login'>Sign In</a>
					</BodyText>
				</Column>
			</Column>
		</form>
	);
};

export default SignupPage;
