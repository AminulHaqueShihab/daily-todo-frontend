import { IconButton, Tooltip } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
import AlertModal from '../modals/AlertModal';
import { useChangeTaskStatusMutation } from '@/store/services/taskApi';
import useCustomToast from '@/hooks/useCustomToast';
import { MdOutlinePendingActions } from 'react-icons/md';
import { useRouter } from 'next/navigation';

type ChangeStatusButtonProps = {
	status: boolean;
	id: string;
};

const ChangeStatusButton: FC<ChangeStatusButtonProps> = ({ id, status }) => {
	const router = useRouter();
	const [trigger, result] = useChangeTaskStatusMutation();
	useCustomToast(
		result,
		'Task Status Changed Successfully',
		'Task Status Change Failed'
	);

	const [isCompleted, setIsCompleted] = useState(false);

	const handleClick = () => {
		const body = {
			isCompleted: !isCompleted,
		};
		trigger({ id, body });
	};

	useEffect(() => {
		setIsCompleted(status);
	}, [status]);

	return (
		<AlertModal
			handleClick={handleClick}
			button={
				<Tooltip label={isCompleted ? 'Mark Pending' : 'Mark Completed'}>
					<span>
						<IconButton
							isLoading={result.isLoading}
							aria-label='icon'
							icon={isCompleted ? <TiTick /> : <MdOutlinePendingActions />}
						/>
					</span>
				</Tooltip>
			}
		>
			Are you sure you want to change the status of this task?
		</AlertModal>
	);
};

export default ChangeStatusButton;
