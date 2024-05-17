'use client';
import EditTaskPage from '@/components/edit-task/EditTaskPage';
import { NextPage } from 'next';
import React from 'react';

type EditTaskProps = {
	params: {
		id: string;
	};
};

const EditTask: NextPage<EditTaskProps> = ({ params }) => {
	const { id } = params;

	return <EditTaskPage id={id} />;
};

export default EditTask;
