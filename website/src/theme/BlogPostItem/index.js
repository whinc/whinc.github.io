import BrowserOnly from '@docusaurus/BrowserOnly';
import BlogPostItem from '@theme-original/BlogPostItem';
import React from 'react';
import GiscusComment from '../../components/GiscusComment';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <BrowserOnly>
        {() => {
          const showComment = /\/blog\/.+$/.test(window.location.pathname)
          return showComment && <GiscusComment />
        }}
      </BrowserOnly>
    </>
  );
}
