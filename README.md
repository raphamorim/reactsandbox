# reactsandbox

> Create a React Component Sandbox based on compositions

Integrate Live documentation on real-world components

![Example](assets/example.gif)

## Installing

```bash
yarn add reactsandbox
```

## Example

**Book.js**

```jsx
import React from 'react'
import withSandbox, { Types } from './index'

const Book = ({title, author, year, transparent, renderAvatar}) =>
  <div className={`book ${(transparent)? 'transparent' : ''}`}>
    <div className='cover'>{renderAvatar}</div>
    <div className='info'>
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
      <div className='year'>{year}</div>
    </div>
  </div>

const BookSandbox = withSandbox(Book, {
  transparent: Types.Boolean(false, 'Set if Book Card is Transparent'),
  title: Types.String('My Book Name', 'Description of Title'),
  author: Types.String('John Doe', 'Description of Author'),
  year: Types.Number(1995, 'Year of Publish'),
  renderAvatar: Types.ReactElement('<img src="assets/book-cover.jpg"/>', 'Render ReactElement as Author Avatar')
})

export default Book
export BookSandbox
```

## Types

#### Boolean

#### String

#### Number

#### ReactElement
