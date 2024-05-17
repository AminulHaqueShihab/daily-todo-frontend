import { BORDER, fonts } from '@/lib/constants';
import { Input, InputProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomInputProps = InputProps & {};

const CustomInput: FC<CustomInputProps> = ({ ...props }) => {
	return (
		<Input
			variant='outline'
			w='full'
			border='none'
			_placeholder={{ color: 'gray.300' }}
			fontFamily={fonts.body}
			fontSize={{ base: '1rem', md: '1.5rem' }}
			fontWeight={700}
			borderRadius={0}
			borderBottom={BORDER.input}
			_focus={{
				border: 'none',
				borderBottom: BORDER.input,
				boxShadow: 'none',
			}}
			{...props}
		/>
	);
};

export default CustomInput;
