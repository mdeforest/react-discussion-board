import React from 'react'

import DOMPurify from 'dompurify'
import ReactHtmlParser from 'react-html-parser'
import Avatar from 'react-avatar'

import styles from './post.module.css'

const Post = ({ profileImage, name, content, date, time }) => {
  const clean = DOMPurify.sanitize(content)

  return (
    <div className='panel panel-default p-3'>
      <div className='panel-body'>
        <div className='row'>
          <div className='col-2 pr-0'>
            <Avatar
              className='float-right'
              size={50}
              name={name}
              src={profileImage}
            />
          </div>
          <div className='col-7'>
            <p className={`mb-1 ${styles.name}`}>{name}</p>
            <div className={styles.text}>{ReactHtmlParser(clean)}</div>
          </div>
          <div className='col-3'>
            <p className={`mb-0 text-right ${styles.dateTime}`}>{date}</p>
            <p className={`mb-0 text-right ${styles.dateTime}`}>{time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
