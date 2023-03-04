import BlogPostItem from '@theme-original/BlogPostItem';
import React from 'react';
import GiscusComment from '../../components/GiscusComment';

export default function BlogPostItemWrapper(props) {

  const showComment = window.location.pathname.startsWith('/blog/')
  return (
    <>
      <BlogPostItem {...props} />
      {showComment && <GiscusComment />}
    </>
  );
}
