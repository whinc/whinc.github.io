import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={'https://avatars3.githubusercontent.com/u/5096493'}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          业精于勤荒于嬉，行成于思毁于随。
          {/* <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a> */}
        </p>
      </div>
    )
  }
}

export default Bio
