import React from 'react'

const GifSearch = props => {
  return (
    <form onSubmit={props.fetchGifs}>
        <h2>Enter name</h2>
        <input type='text' name='name'/>
        <input type='submit' value='Submit' />
    </form>
  )
}



export default GifSearch


