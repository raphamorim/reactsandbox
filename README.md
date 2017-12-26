# reactsandbox

[![CircleCI](https://circleci.com/gh/raphamorim/reactsandbox/tree/master.svg?style=svg)](https://circleci.com/gh/raphamorim/reactsandbox/tree/master)

> Create a React Component Sandbox based on compositions

Integrate Live documentation on real-world React components. 

Reasons to use `reactsandbox`:

- Fully Hackable (you can change everthing or create your own style, see [available CSS classes](https://github.com/raphamorim/reactsandbox/blob/master/styles/reactsandbox.css)).

- You can use with any Builder (Webpack, Rollup, Browserify, Parcel...). Because `reactsanbox` is only a HOC.

- Easy to add on existent component and fast update on documentation, it can be used with `PropTypes` or `Types`.

- Lightweight `~3.6K gzip`.

![Example](assets/example.gif)

## Installing

```bash
yarn add reactsandbox
```

## Example

**Book.js**

```jsx
import React from 'react'
import withSandbox, { Types } from 'reactsandbox'

// you can import styles or create your own
import 'reactsandbox/styles/default-theme.css'

const Book = ({title, author, year, transparent, renderCover}) =>
  <div className={`book ${(transparent)? 'transparent' : ''}`}>
    <div className='cover'>{renderCover}</div>
    <div className='info'>
      <div className='title'>{title}</div>
      <div className='author'>{author}</div>
      <div className='year'>{year}</div>
    </div>
  </div>

// Compose Sandbox for Book Component
const BookSandbox = withSandbox(Book, {
  transparent: Types.Boolean(false, 'Set Book Card as Transparent'),
  title: Types.String('My Book Name', 'Description of Title'),
  author: Types.String('John Doe', 'Description of Author'),
  year: Types.Number(1995, 'Year of Publication'),
  renderCover: Types.ReactElement('<img src="book-cover.jpg"/>', 'Render ReactElement as Cover Book')
})

export default Book
export BookSandbox // export Component Sandbox either
```

## Types

Note that `Type` is a custom object, then you can create your own.

### Custom Types

#### Boolean

Returns Type object from Boolean.

**default value**: `false`

```jsx
Types.Boolean(false, 'prop description') 
```

#### String

Returns Type object from String.

**default value**: `''`

```jsx
Types.String('prop value', 'prop description') 
```

#### Number

Returns Type object from Number.

**default value**: `0`

```jsx
Types.String(100, 'prop description') 
```

#### ReactElement (not stable, experimental)

Returns Type object from ReactElement.

**default value**: `null`

```jsx
Types.ReactElement('<img src="source-to-my-image.png"/>', 'prop description') 
```

## Run the Example:

```sh

```
