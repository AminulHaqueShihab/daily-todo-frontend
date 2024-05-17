import React, { FC } from 'react';
import {
	Button,
	Flex,
	Hide,
	IconButton,
	Show,
	Tooltip,
} from '@chakra-ui/react';
import { layout } from '@/lib/constants';
import LogoText from '../reuseable-ui/texts/LogoText';
import { FaPlus, FaPowerOff } from 'react-icons/fa';
import { useAppDispatch } from '@/hooks';
import { logout } from '@/store/slices/authSlice';
import Link from 'next/link';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<Flex w='full' justify='center' px={6}>
			<Flex
				w='full'
				maxW={layout.MAX_W}
				px={6}
				mx='auto'
				h={{ base: '4rem', md: '5rem' }}
				borderRadius={'0.5rem'}
				bg={'#363062'}
				position='fixed'
				top={0}
				align='center'
				justify='space-between'
			>
				<Link href='/'>
					<LogoText cursor='pointer'>Daily ToDo</LogoText>
				</Link>
				<Flex gap={3} align='center'>
					<Show above='md'>
						<Link href='/create'>
							<Button
								size={{ base: 'sm', md: 'md' }}
								colorScheme='whiteAlpha'
								leftIcon={<FaPlus />}
							>
								Add Task
							</Button>
						</Link>
					</Show>
					<Hide above='md'>
						<Link href='/create'>
							<IconButton
								aria-label='icon'
								colorScheme='whiteAlpha'
								icon={<FaPlus />}
							/>
						</Link>
					</Hide>
					<Tooltip hasArrow label='Logout'>
						<span>
							<IconButton
								aria-label='icon'
								onClick={handleLogout}
								icon={<FaPowerOff color='red' />}
							/>
						</span>
					</Tooltip>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Navbar;
