# sandbox-react

```bash
yarn add sandbox-react
```

**Book.js**

```jsx
import React from 'react'
import withSandbox, { Types } from 'sandbox-react'

const Book = ({title, author}) =>
  <div className='book'>
    <div className='title'>{title}</div>
    <div className='author'>{author}</div>
  </div>

const BookSandbox = withSandbox(Book)

export default Book
export BookSandbox
```
