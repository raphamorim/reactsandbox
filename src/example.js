import React from 'react'
import ReactDOM from 'react-dom'
import withSandbox, { Types } from './index'

import { Header } from 'playkit-header'
import 'playkit-header/bundle/styles.css'

const Book = ({title, author}) =>
  <div className='book'>
    <div className='title'>{title}</div>
    <div className='author'>{author}</div>
  </div>

const BookSandbox = withSandbox(Book, {
  title: Types.String('My Book Name', 'Description of Title'),
  author: Types.String('John Doe', 'Description of Author'),
})

const HeaderSandbox = withSandbox(Header, {
  transparent: Types.Boolean(false, 'Set if Header is Transparent'),
  themeName: Types.String('globoplay', 'Set theme reference'),
  renderAvatar: Types.ReactElement('<img src="https://avatars3.githubusercontent.com/u/3630346"/>', 'Render ReactElement as Avatar'),
})

const App = (
  <div>
    <h4>Header Component</h4>
    <HeaderSandbox/>
    <h4>Book Component</h4>
    <BookSandbox/>
  </div>
);

ReactDOM.render(App, document.querySelector('#root'));
