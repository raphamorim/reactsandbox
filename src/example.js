import React from 'react'
import ReactDOM from 'react-dom'
import withSandbox, { Types } from './index'

const Book = ({title, author}) =>
  <div className='book'>
    <div className='title'>{title}</div>
    <div className='author'>{author}</div>
  </div>

const BookSandbox = withSandbox(Book, {
  title: Types.String('My Book Name', 'Description of Title'),
  author: Types.String('John Doe', 'Description of Author'),
})

const App = (
  <div>
    <h3>Book Component</h3>
    {BookSandbox}
    {/*<h3>Book Component</h3>
    {BookSandbox}*/}
  </div>
);

ReactDOM.render(App, document.querySelector('#root'));
