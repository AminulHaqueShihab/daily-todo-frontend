import { register } from 'module';
import mainApi from './mainApi';

export const authApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation({
			query: body => ({
				url: `/auth/login`,
				method: 'POST',
				body,
			}),
		}),
		register: builder.mutation({
			query: body => ({
				url: `/auth/register`,
				method: 'POST',
				body,
			}),
		}),
		// getSelf: builder.query({
		// 	query: () => ({
		// 		url: '/auth/self',
		// 		method: 'GET',
		// 	}),
		// }),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export default authApi;
