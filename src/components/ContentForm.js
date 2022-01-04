import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createContent } from '../actions/contentActions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function ContentForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  let history = useHistory()

  const onSubmit = data => {
    dispatch(createContent(data, history))
  }

  return(
    <div id='content-form-div'>
      <h2>New Content Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='title'>Title: </label>
        <input id='title' name='title' {...register("title", { required: true })} />
        {errors.title && "A title is required!"}<br/>

        <label htmlFor='year'>Year: </label>
        <input id='year' name='year' type="number" {...register("year", { required: true })} />
        {errors.year && "A year is required!"}<br/>

        <label htmlFor='content_type'>Content Type: </label>
        <input id='content_type' name='content_type' {...register("content_type", { required: true })} />
        {errors.content_type && "A content type is required!"}<br/>

        <label htmlFor='details'>Details: </label>
        <input id='details' name='details' {...register("details", { required: true })} />
        {errors.details && "Details are required!"}<br/>

        <input type="submit"/>

      </form>
    </div>
  )


}