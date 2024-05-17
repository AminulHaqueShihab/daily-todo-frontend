'use client';
import CreateTaskPage from '@/components/create-task/CreateTaskPage';
import { NextPage } from 'next';
import React, { FC } from 'react';

type CreateTaskProps = {};

const CreateTask: NextPage<CreateTaskProps> = ({}) => {
	return <CreateTaskPage />;
};

export default CreateTask;
