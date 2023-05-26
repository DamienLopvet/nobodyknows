"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import  Form  from "@components/Form";

const CreatPost = () => {
const [submitting, setSubmitting] = useState(false)
const [post, setPost] = useState({
    post:'',
    tag:'',
})

const createPost = async (e) => {
  e.preventDefault()
  setSubmitting(true)
  try {
    const res = await fetch('/api/posts/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {post: post.post,
          userId: session?.user.id,
          tag: post.tag,
        }),
    })
    if (res.ok) Router.push('/')
  } catch (e) {
    throw Error(e.message)
  }finally{
    setSubmitting(false)
  }
}

  return (
  <Form 
  type='Créer'
  post={post}
  setPost={setPost}
  submitting={submitting}
  handleSubmit={createPost}
  /> )
};

export default CreatPost;
