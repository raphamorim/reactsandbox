# resandbox

```bash
yarn add resandbox
```

**Book.js**

```jsx
import React from 'react'
import withSandbox, { Types } from 'resandbox'

const Book = ({title, author}) =>
  <div className='book'>
    <div className='title'>{title}</div>
    <div className='author'>{author}</div>
    <div className='year'>{year}</div>
  </div>

const BookSandbox = withSandbox(Book, {
  title: Types.String('My HOC', 'Title of the book'),
  author: Types.String('Celio', 'Author of the book'),
  year: Types.Number(2017, 'Year of the book'),
})

export default Book
export BookSandbox
```
