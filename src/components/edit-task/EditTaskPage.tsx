import React, { FC, useEffect, useState } from 'react';
import PageLayout from '../layouts/PageLayout';
import Column from '../reuseable-ui/column/Column';
import { layout } from '@/lib/constants';
import InputField from '../reuseable-ui/inputs/InputField';
import { Button, Flex, Input, Textarea } from '@chakra-ui/react';
import {
	useGetTaskByIdQuery,
	useUpdateTaskMutation,
} from '@/store/services/taskApi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useCustomToast from '@/hooks/useCustomToast';

type EditTaskPageProps = {
	id: string;
};

const EditTaskPage: FC<EditTaskPageProps> = ({ id }) => {
	const router = useRouter();
	const { data, isLoading, isError } = useGetTaskByIdQuery(id, { skip: !id });
	const [trigger, result] = useUpdateTaskMutation();
  useCustomToast(result, 'Task Updated Successfully', 'Task Update Failed');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [deadline, setDeadline] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const body = {
			title,
			description,
			deadline,
		};
		trigger({ id, body });
	};

	useEffect(() => {
		if (data) {
			setTitle(data?.doc?.title);
			setDescription(data?.doc?.description);
			if (data?.doc?.deadline) {
				let date = new Date(data.doc.deadline);
				setDeadline(date.toISOString().substring(0, 16));
			}
		}
	}, [data]);
	useEffect(() => {
		if (result.isSuccess) {
			router.push('/');
		}
	}, [result]);

	return (
		<PageLayout title='Single Task page'>
			<Column pt={'6rem'} h={'100vh'} w='full' maxW={layout.MAX_W} mx='auto'>
				<form onSubmit={handleSubmit}>
					<Column gap={6}>
						<InputField label='Title'>
							<Input
								bg={'white'}
								value={title}
								onChange={e => setTitle(e.target.value)}
								isRequired={true}
								borderRadius={'0.5rem'}
								focusBorderColor='#363062'
								placeholder='Enter Title'
							/>
						</InputField>
						<InputField label='Description'>
							<Textarea
								minH={'200px'}
								bg={'white'}
								value={description}
								onChange={e => setDescription(e.target.value)}
								focusBorderColor='#363062'
								borderRadius={'0.5rem'}
								placeholder='Enter Description'
							/>
						</InputField>
						<InputField label='Deadline'>
							<Input
								bg={'white'}
								value={deadline}
								onChange={e => setDeadline(e.target.value)}
								focusBorderColor='#363062'
								type='datetime-local'
								borderRadius={'0.5rem'}
							/>
						</InputField>
						<Flex gap={3} justify='center'>
							<Link href={`/task/${id}`}>
								<Button colorScheme='red'>Cancel</Button>
							</Link>
							<Button
								colorScheme='blue'
								type='submit'
								isLoading={result.isLoading}
							>
								Update
							</Button>
						</Flex>
					</Column>
				</form>
			</Column>
		</PageLayout>
	);
};

export default EditTaskPage;
