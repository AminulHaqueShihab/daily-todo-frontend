import TaskCard from '@/components/card/TaskCard';
import PageLayout from '@/components/layouts/PageLayout';
import Column from '@/components/reuseable-ui/column/Column';
import BodyText from '@/components/reuseable-ui/texts/BodyText';
import HeaderText from '@/components/reuseable-ui/texts/HeaderText';
import { layout } from '@/lib/constants';
import { useGetAllTaskQuery } from '@/store/services/taskApi';
import { Center, Flex, IconButton, Spinner } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaTrash } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	const { data, isLoading, isError } = useGetAllTaskQuery({});
	return (
		<PageLayout title='Home Page'>
			<Column minH='100vh' pt={'6rem'} w='full' maxW={layout.MAX_W} mx='auto'>
				{isLoading && (
					<Center>
						<Spinner size='xl' colorScheme='black' />
					</Center>
				)}
				{data?.tasks?.length === 0 && (
					<Center>
						<HeaderText color='black'>
							No Task Available. Add new task
						</HeaderText>
					</Center>
				)}
				<Column gap={6}>
					{data?.tasks?.map((task: any, index: number) => (
						<TaskCard key={index} data={task} />
					))}
				</Column>
			</Column>
		</PageLayout>
	);
};

export default HomePage;
