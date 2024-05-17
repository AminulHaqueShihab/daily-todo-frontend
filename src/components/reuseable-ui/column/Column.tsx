import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type ColumnProps = FlexProps & {
	children?: ReactNode;
};

const Column: FC<ColumnProps> = ({ children, ...props }) => {
	return (
		<Flex flexDir='column' {...props}>
			{children && children}
		</Flex>
	);
};

export default Column;
