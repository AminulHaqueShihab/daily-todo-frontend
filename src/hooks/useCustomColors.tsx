import { useColorModeValue } from '@chakra-ui/react';

type ColorType = {
	bgColor: string;
};

const useCustomColors: any = (): ColorType => {
	const bgColor = useColorModeValue('background.light', 'background.dark');
	

	const colors: ColorType = {
		bgColor,
	};
	return colors;
};

export default useCustomColors;
