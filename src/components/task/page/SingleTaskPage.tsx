import PageLayout from '@/components/layouts/PageLayout';
import Column from '@/components/reuseable-ui/column/Column';
import BodyText from '@/components/reuseable-ui/texts/BodyText';
import HeaderText from '@/components/reuseable-ui/texts/HeaderText';
import { layout } from '@/lib/constants';
import { useGetTaskByIdQuery } from '@/store/services/taskApi';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import moment from 'moment';
import React, { FC } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import Deletebutton from '../Deletebutton';
import Link from 'next/link';

type SingleTaskPageProps = {
	id: string;
};

const SingleTaskPage: FC<SingleTaskPageProps> = ({ id }) => {
	// HOOKS
	const { data, isLoading, isError } = useGetTaskByIdQuery(id, { skip: !id });

	return (
		<PageLayout title='Single Task page'>
			<Column pt={'6rem'} h={'100vh'} w='full' maxW={layout.MAX_W} mx='auto'>
				<Column
					gap={6}
					w='full'
					maxW={'1080px'}
					mx='auto'
					minH={'500px'}
					bg={'#818FB4'}
					p={{ base: 4, md: 6 }}
					border={'1px solid #363062'}
					borderRadius={'0.5rem'}
					justify='space-between'
				>
					<Column gap={3}>
						<HeaderText>{data?.doc?.title}</HeaderText>
						<BodyText>{data?.doc?.description}</BodyText>
					</Column>
					<Flex justify='space-between' align='center' gap={6}>
						<Column gap={3}>
							<HeaderText fontSize='1rem'>
								{data?.doc?.isCompleted === true
									? 'Task Completed'
									: 'Not Done Yet'}
							</HeaderText>
							<BodyText>
								{moment(data?.doc?.deadline).format('MMMM Do YYYY, h:mm a')}
							</BodyText>
						</Column>
						<Flex gap={3} flexDir={{ base: 'column', md: 'row' }}>
							<Link href={`/edit/${id}`}>
								<Tooltip hasArrow label='Edit Task'>
									<span>
										<IconButton aria-label='icon' icon={<FaPencil />} />
									</span>
								</Tooltip>
							</Link>
							<Deletebutton id={id} />
						</Flex>
					</Flex>
				</Column>
			</Column>
		</PageLayout>
	);
};

export default SingleTaskPage;
