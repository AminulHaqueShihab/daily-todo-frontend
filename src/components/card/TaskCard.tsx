import { Flex, IconButton } from '@chakra-ui/react';
import React, { FC } from 'react';
import Column from '../reuseable-ui/column/Column';
import HeaderText from '../reuseable-ui/texts/HeaderText';
import BodyText from '../reuseable-ui/texts/BodyText';
import { FaTrash } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';
import Deletebutton from '../task/Deletebutton';
import ChangeStatusButton from '../task/ChangeStatusButton';

type TaskCardProps = {
	data?: any;
};

const TaskCard: FC<TaskCardProps> = ({ data }) => {
	return (
		<Flex
			bg={'#818fb4'}
			gap={6}
			p={4}
			borderRadius='0.5rem'
			align='center'
			justify={'space-between'}
			cursor={'pointer'}
		>
			<Link href={`/task/${data?._id}`}>
				<Column gap={3}>
					<HeaderText>{data?.title}</HeaderText>
					<BodyText noOfLines={2}>{data?.description}</BodyText>
				</Column>
			</Link>
			<Flex gap={3} flexDir={{ base: 'column', md: 'row' }}>
				<ChangeStatusButton id={data?._id} status={data?.isCompleted} />
				<Deletebutton id={data?._id} />
			</Flex>
		</Flex>
	);
};

export default TaskCard;
