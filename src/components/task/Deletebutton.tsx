import useCustomToast from '@/hooks/useCustomToast';
import { useDeleteTaskMutation } from '@/store/services/taskApi';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import AlertModal from '../modals/AlertModal';
import HeaderText from '../reuseable-ui/texts/HeaderText';

type DeletebuttonProps = {
	id: string;
};

const Deletebutton: FC<DeletebuttonProps> = ({ id }) => {
	const router = useRouter();
	const [trigger, result] = useDeleteTaskMutation();
	useCustomToast(result, 'Task Deleted Successfully', 'Task Deletion Failed');
	const handleDelete = () => {
		trigger(id);
	};

	useEffect(() => {
		if (result.isSuccess) {
			router.push('/');
		}
	}, [result]);
	return (
		<>
			<AlertModal
				handleClick={handleDelete}
				button={
					<Tooltip hasArrow label='Delete Task'>
						<span>
							<IconButton
								isLoading={result.isLoading}
								aria-label='icon'
								colorScheme='red'
								icon={<FaTrash />}
							/>
						</span>
					</Tooltip>
				}
			>
				<HeaderText color={'#435585'}>
					Are you sure you want to delete this task?
				</HeaderText>
			</AlertModal>
		</>
	);
};

export default Deletebutton;
