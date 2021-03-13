import React from 'react'

import ReactQuill from 'react-quill'

import './editor.css'
import 'react-quill/dist/quill.snow.css'

const PostEditor = ({ text, setText }) => {
  const handleChange = (newValue) => {
    setText(newValue)
  }
  return <ReactQuill value={text} onChange={handleChange} />
}

export default PostEditor
