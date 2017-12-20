import React from 'react'
import ReactDOM from 'react-dom'
import withSandbox, { Types } from './index'

const Book = ({title, author}) =>
  <div className='book'>
    <div className='title'>{title}</div>
    <div className='author'>{author}</div>
  </div>

const BookSandbox = withSandbox(Book)

ReactDOM.render(<Book/>, document.querySelector('#root'));
