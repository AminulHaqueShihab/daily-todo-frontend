import { FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import BodyText from '../texts/BodyText';
import Column from '../column/Column';

type InputFieldProps = FlexProps & {
	label: string;
	children?: ReactNode;
	isRequired?: boolean;
};

const InputField: FC<InputFieldProps> = ({
	label,
	children,
	isRequired,
	...props
}) => {
	return (
		<Column gap={3} w='full' {...props}>
			<BodyText color='black' fontSize={{ base: '0.75rem', md: '1rem' }}>
				{label} {isRequired && <span style={{ color: '#ff0000' }}>*</span>}
			</BodyText>
			{children && children}
		</Column>
	);
};

export default InputField;
