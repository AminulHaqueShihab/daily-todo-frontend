import { URL } from '@/lib/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tags = ['task'];
export const mainApi = createApi({
	reducerPath: 'mainApi',
	tagTypes: tags,
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL.root}`,
		prepareHeaders: (headers, { getState }) => {
			const token: string = (getState() as any).auth?.token;
			headers.set('content-type', 'application/json');
			headers.set('accept', '*/*');
			if (token) {
				headers.set('authorization', token);
			}
			return headers;
		},
	}),
	endpoints: builder => ({}),
});

export const {} = mainApi;

export default mainApi;
