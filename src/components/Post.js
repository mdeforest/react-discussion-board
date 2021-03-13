import React from 'react'

import DOMPurify from 'dompurify'
import ReactHtmlParser from 'react-html-parser'

import styles from './post.module.css'

const Post = ({ profileImage, name, content, date, time }) => {
  const clean = DOMPurify.sanitize(content)

  return (
    <div className='panel panel-default p-3'>
      <div className='panel-body'>
        <div className='row'>
          <div className='col-md-auto pr-0'>
            <img
              className={`img-thumbnail ${styles.profile}`}
              src={profileImage}
            />
          </div>
          <div className='col-9'>
            <p className={`mb-1 ${styles.name}`}>{name}</p>
            <div className={styles.text}>{ReactHtmlParser(clean)}</div>
          </div>
          <div className='col-md-auto'>
            <p className={`mb-0 text-right ${styles.dateTime}`}>{date}</p>
            <p className={`mb-0 text-right ${styles.dateTime}`}>{time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
