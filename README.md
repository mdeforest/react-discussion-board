# React Discussion Board

This component creates a simple React Discussion Board. Posts include profile image, message, name, and date/time. New posts may be added and edited in Rich Text formatting.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [React Discussion Board](#react-discussion-board)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
    - [posts](#posts)
      - [post properties](#post-properties)
    - [onSubmit](#onsubmit)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and should be installed as one of your project's `dependencies`:

```
npm install react-discussion-board
```

> This package also depends on `react`. Please make sure you have it installed
> as well.

## Usage

```jsx
import React, { useState } from 'react'

import DiscussionBoard from 'react-discussion-board'

import 'react-discussion-board/dist/index.css'

const App = () => {
  const allPosts = [
    {
      profileImage:
        'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg,
      name: 'Jane Doe',
      content: '<p>Hello everyone!</p><p>How are you all doing?</p><p>-Jane</>',
      date: new Date('01 Jan 2020 01:12:00 GMT')
    },
    {
      profileImage:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'John Doe',
      content:
        '<p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects. Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything. Up help home head spot an he room in Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded companions her nor advantages sufficient put. John on time down give meet help as of. Him waiting and correct believe now cottage she another. Vexed six shy yet along learn maids her tiled. Through studied shyness evening bed him winding present. Become excuse hardly on my thirty it wanted. </p>',
      date: new Date('01 Jan 2020 09:12:00 GMT')
    }
  ]

  const [posts, setPosts] = useState(allPosts)

  const submitPost = (text) => {
    const curDate = new Date()

    setPosts([
      ...posts,
      {
        profileImage:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Jane Doe',
        content: text,
        date: curDate
      }
    ])
  }

  return (
    <div className='App'>
      <DiscussionBoard posts={posts} onSubmit={submitPost} />
    </div>
  )
}

export default App
```

`DiscussionBoard` is the only component exposed by this package.
`<DiscussionBoard posts={posts} onSubmit={onSubmit}>`

## Props

This is the list of props.

### posts

> `array` | defaults to `[]`

Pass an array of posts that should be available in discussion board.

Content is sanitized before being displayed on the page as a post.

#### post properties

Following are the fields that may be provided for posts in the `posts` prop array

<!-- This table was generated via http://www.tablesgenerator.com/markdown_tables -->

| Field        | Type   | Description                                      |
| ------------ | ------ | ------------------------------------------------ |
| profileImage | string | image url/path for profile photo                 |
| name         | string | display name of post author                      |
| content      | string | content string in rich text format (html string) |
| date         | Date   | post date                                        |

### onSubmit

> `function(text: string)` | _required_

Function that is called when a post is submitted, given the html text of the post.
