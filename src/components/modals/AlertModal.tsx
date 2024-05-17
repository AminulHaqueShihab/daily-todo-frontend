import {
	Flex,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type AlertModalProps = {
	button: ReactNode;
	handleClick?: () => void;
	children?: ReactNode;
};

const AlertModal: FC<AlertModalProps> = ({ button,  handleClick, children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleConfirm = () => {
		handleClick && handleClick();
		onClose();
	};
	return (
		<>
			<Flex onClick={onOpen}>{button}</Flex>

			<Modal onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Warning</ModalHeader>
					<ModalCloseButton />
					<ModalBody>{children && children}</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
						<Button onClick={handleConfirm} colorScheme='blue' ml={3}>
							Confirm
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AlertModal;
