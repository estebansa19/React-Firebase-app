import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

export default function LinkForm({ addOrEditLink, currentId }) {
  const initialStateValues = {
    url: '',
    name: '',
    description: ''
  }

  const [state, setState] = useState(initialStateValues);
  
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    addOrEditLink(state);
    setState({ ...initialStateValues });
  }

  const getLinkById = async id => {
    const doc = await db.collection('links').doc(id).get();
    setState({ ...doc.data() });
  }

  useEffect(() => {
    if (currentId === '') {
      setState({...initialStateValues});
    } else {
      getLinkById(currentId);
    }
  }, [currentId]);

  return(
    <form className='card card-body' onSubmit={handleSubmit}>
      <div className='form-group input-group'>
        <div className='input-group-text bg-light'>
          <i className='material-icons'>insert_link</i>
        </div>

        <input 
          type='text' 
          className='form-control' 
          placeholder='https://someurl.com' 
          name='url'
          onChange={handleChange}
          value={state.url}
        />
      </div>

      <div className='form-group input-group'>
        <div className='input-group-text bg-light'>
          <i className='material-icons'>create</i>
        </div>

        <input 
          type='text' 
          name='name' 
          className='form-control' 
          placeholder='Website name'
          onChange={handleChange}
          value={state.name}
        />
      </div>

      <div className='form-group'>
        <textarea 
          name='description' 
          rows='3' 
          className='form-control' 
          placeholder='Write a description'
          onChange={handleChange}
          value={state.description}
        />
      </div>

      <button className='btn btn-primary btn-block'>
        {currentId === '' ? 'Save' : 'Update'}
      </button>
    </form>
  )
}