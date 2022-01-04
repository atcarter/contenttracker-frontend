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


}