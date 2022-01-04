import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../actions/reviewActions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ReviewForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const { contentID } = useParams();
  const storeContents = useSelector((state) => state.contents)
  const parentContent = storeContents.filter(elem => elem.id === parseInt(contentID))

  const onSubmit = data => {
    dispatch(createReview(data))
  }

  if (parentContent.length < 1) {
    return(
      <div>
        <h1>THIS CONTENT DOESN'T EXIST</h1>
      </div>
    )
  } else {
    return(
      <div id='review-form-div'>
        <h2>New Review Form for {parentContent[0].title}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='username'>Username: </label>
          <input id='username' name='username' {...register("username", { required: true })} />
          {errors.username && "A username is required!"}<br/>
  
          <label htmlFor='rating'>Rating: </label>
          <input id='rating' name='rating' type="number" {...register("rating", { min: 1, max: 5 })} />
          {errors.rating && "A rating between 1-5 is required!"}<br/>
  
          <label htmlFor='description'>Description: </label>
          <input id='description' name='description' {...register("description", { required: true })} />
          {errors.description && "A description is required!"}<br/>
  
          {/* <label htmlFor='content_id'>Content Name: </label> */}
          <input type="hidden" id='content_id' name='content_id'  value={parentContent[0].id} {...register("content_id", { required: true })} />
          {/* {errors.content_id && "This cannot be changed"}<br/> */}
  
          <input type="submit"/>
  
        </form>
      </div>
    )
  }
}