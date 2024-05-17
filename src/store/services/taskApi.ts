import mainApi from './mainApi';

export const taskApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		getAllTask: builder.query({
			query: () => ({
				url: `/task`,
				method: 'GET',
			}),
			providesTags: ['task'],
		}),
		getTaskById: builder.query({
			query: (id: string) => ({
				url: `/task/${id}`,
				method: 'GET',
			}),
			providesTags: ['task'],
		}),
		deleteTask: builder.mutation({
			query: (id: string) => ({
				url: `/task/delete/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['task'],
		}),
		updateTask: builder.mutation({
			query: ({ id, body }) => ({
				url: `/task/update/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['task'],
		}),
		createTask: builder.mutation({
			query: body => ({
				url: `/task`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['task'],
		}),
		changeTaskStatus: builder.mutation({
			query: ({ id, body }) => ({
				url: `/task/update/status/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['task'],
		}),
	}),
});

export const {
	useGetAllTaskQuery,
	useGetTaskByIdQuery,
	useDeleteTaskMutation,
	useUpdateTaskMutation,
	useCreateTaskMutation,
	useChangeTaskStatusMutation,
} = taskApi;
export default taskApi;
