import React from 'react'
import ReactDOM from 'react-dom'
import withSandbox, { Types } from './index'

const Book = ({title, author, year, transparent, renderCover}) =>
  <div className={`book ${(transparent)? 'transparent' : ''}`}>
    <div className='cover'>{renderCover}</div>
    <div className='info'>
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
      <div className='year'>{year}</div>
    </div>
  </div>

const BookSandbox = withSandbox(Book, {
  transparent: Types.Boolean(false, 'Set Book Card as Transparent'),
  title: Types.String('My Book Name', 'Description of Title'),
  author: Types.String('John Doe', 'Description of Author'),
  year: Types.Number(1995, 'Year of Publication'),
  renderCover: Types.ReactElement('<img src="book-cover.jpg"/>', 'Render ReactElement as Cover Book')
})

const App = (
  <div>
    <h4>Book Component</h4>
    <BookSandbox/>
  </div>
);

ReactDOM.render(App, document.querySelector('#root'));
