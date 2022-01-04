import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createContent } from '../actions/contentActions';

export default function ContentForm() {

  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(createContent(data))
  }

  return(
    <div id='content-form-div'>
      <h2>New Content Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} />
        {errors.title && "A title is required!"}

        <input type="number" {...register("year", { required: true })} />
        {errors.year && "A year is required!"}

        <input {...register("content_type", { required: true })} />
        {errors.content_type && "A content type is required!"}

        <input {...register("details", { required: true })} />
        {errors.details && "Details are required!"}

        <input type="submit"/>

      </form>
    </div>
  )


}