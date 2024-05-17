import { useToast } from '@chakra-ui/react';
import React from 'react';

/**
 * version : 0.1
 * Author: Abir
 * Date: 10 August 2023
 * changelog: version 0.1 {initial commit}
 */

interface Props {
	result: any;
}

const useCustomToast: any = (
	result: any,
	successMessage: string,
	onClose?: () => void | undefined,
	errorMessage?: string,
	alert?: string | undefined
): { setAlert: any } => {
	const [alart, setAlert] = React.useState<string | undefined>(alert || '');
	const toast = useToast();

	React.useEffect(() => {
		if (result.isSuccess) {
			toast({
				title: successMessage,
				status: 'success',
				duration: 2000,
			});

			// if (onClose) {
			// 	onClose();
			// }
		}
		if (result.isError) {
			toast({
				title: result?.error?.data?.message || errorMessage,
				status: 'error',
				duration: 2000,
			});
		}
	}, [result]);
	React.useEffect(() => {
		if (alart || alart !== '') {
			toast({
				title: alart,
				status: 'warning',
				duration: 3000,
			});
		}
	}, [alart]);
	return { setAlert };
};
export default useCustomToast;
