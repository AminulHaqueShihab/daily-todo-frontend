'use client'
import SingleTaskPage from '@/components/task/page/SingleTaskPage';
import React, { FC } from 'react';

type SingleTaskProps = {
	params: {
		id: string;
	};
};

const SingleTask: FC<SingleTaskProps> = ({ params }) => {
	const { id } = params;

	return <SingleTaskPage id={id} />;
};

export default SingleTask;
