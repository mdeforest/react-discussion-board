import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

import Post from './components/Post'
import PostEditor from './components/PostEditor'

import 'chart.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

import './shards-dashboards.1.1.0.min.css'
import './shards-dashboards.1.1.0.min.js'

import styles from './index.module.css'

const DiscussionBoard = ({ onSubmit, posts }) => {
  const [newPost, setNewPost] = useState(false)
  const [text, setText] = useState('')

  const perPage = 3
  const [pageCount, setPageCount] = useState(0)
  const [pagePosts, setPagePosts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setPageCount(Math.ceil(posts.length / perPage))

    if (posts.length % perPage !== 0 && posts.length > perPage) {
      setPagePosts(
        posts.slice(
          posts.length - (posts.length % perPage) - 1,
          posts.length - 1
        )
      )

      setCurrentPage(pageCount - 1)
    } else if (posts.length % perPage === 0 && posts.length > perPage) {
      setPagePosts(posts.slice(posts.length - perPage, posts.length))
      setCurrentPage(pageCount)
    } else {
      setPagePosts(posts.slice(0, perPage))
      setCurrentPage(0)
    }

    return () => {
      setPagePosts([])
    }
  }, [posts])

  const clickNewPost = () => {
    setNewPost(true)
  }

  const buildDate = (date) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    return (
      months[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear()
    )
  }

  const addZero = (i) => {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }

  const buildTime = (date) => {
    let hours = date.getHours()
    let mornOrNight = 'AM'

    if (hours > 12 && hours < 24) {
      hours -= 12
      mornOrNight = 'PM'
    }

    return (
      addZero(hours) +
      ':' +
      addZero(date.getMinutes()) +
      ' ' +
      mornOrNight +
      ' ' +
      date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]
    )
  }

  const submitPost = () => {
    onSubmit(text)
    setNewPost(false)
    setText('')
  }

  const onPageChange = ({ selected }) => {
    let offset = Math.ceil(selected * perPage)
    setPagePosts(posts.slice(offset, offset + perPage))
    setCurrentPage(selected)
  }

  const displayEditor = () => {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col'>
            <PostEditor text={text} setText={setText} />
          </div>
        </div>
        <div className='row pt-2'>
          <div className='col'>
            <button onClick={submitPost} className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className='container'>
      <a
        onClick={clickNewPost}
        className={`pl-3 text-decoration-none ${styles.newPost}`}
      >
        Add New Post
      </a>
      {pagePosts.map((post, idx) => {
        const newDate = buildDate(post.date)
        const newTime = buildTime(post.date)

        return (
          <React.Fragment key={idx}>
            <Post {...post} date={newDate} time={newTime} />
            <hr className={`mt-0`} />
          </React.Fragment>
        )
      })}

      {newPost ? displayEditor() : ''}

      <div className='d-flex justify-content-center mt-5'>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          previousLabel='Previous'
          nextLabel='Next'
          breakLabel='...'
          breakClassName='page-item'
          onPageChange={onPageChange}
          forcePage={currentPage}
          containerClassName='pagination'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          nextClassName='page-item'
          previousLinkClassName='page-link'
          nextLinkClassName='page-link'
        />
      </div>
    </div>
  )
}

DiscussionBoard.defaultProps = {
  posts: []
}

DiscussionBoard.propTypes = {
  posts: PropTypes.array,
  onSubmit: PropTypes.func
}

export default DiscussionBoard
