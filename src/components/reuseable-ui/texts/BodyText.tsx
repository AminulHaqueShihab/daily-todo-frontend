import useCustomColors from '@/hooks/useCustomColors';
import { fonts } from '@/lib/constants';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type BodyTextProps = TextProps & {
	children?: ReactNode;
};

const BodyText: FC<BodyTextProps> = ({ children, ...props }) => {
	const { bgColor } = useCustomColors();
	return (
		<Text
			fontFamily={fonts.body}
			fontSize={{ base: '0.875rem', md: '1rem' }}
			fontWeight='400'
			lineHeight='normal'
			color={bgColor}
			{...props}
		>
			{children && children}
		</Text>
	);
};

export default BodyText;
