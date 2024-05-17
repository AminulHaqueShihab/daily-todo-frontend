import { fonts } from '@/lib/constants';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type LogoTextProps = TextProps & {
	children?: string;
};

const LogoText: FC<LogoTextProps> = ({ children, ...props }) => {
	return (
		<Text
			fontFamily={fonts.logo}
			fontSize={{ base: '1.5rem', md: '2rem' }}
			fontWeight='800'
			lineHeight='131.25%'
			color={'white'}
			{...props}
		>
			{children && children}
		</Text>
	);
};

export default LogoText;
