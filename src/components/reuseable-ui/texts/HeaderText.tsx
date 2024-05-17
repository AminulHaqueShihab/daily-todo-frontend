import useCustomColors from '@/hooks/useCustomColors';
import { fonts } from '@/lib/constants';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type HeaderTextProps = TextProps & {
	children?: ReactNode;
};

const HeaderText: FC<HeaderTextProps> = ({ children, ...props }) => {
	const { bgColor } = useCustomColors();
	return (
		<Text
			fontFamily={fonts.body}
			fontSize={{ base: '1.5rem', md: '2rem' }}
			fontWeight='700'
			lineHeight='120%'
			color={bgColor}
			{...props}
		>
			{children && children}
		</Text>
	);
};

export default HeaderText;
