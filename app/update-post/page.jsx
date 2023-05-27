"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditPost = () => {
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    post: "",
    tag: "",
  });
  useEffect(() => {
    const getPostDetails = async () => {
      const res = await fetch(`/api/posts/${postId}`);
      const data = await res.json();
      setPost({ body: data.post, tag: data.tag });
    };
    if (postId) getPostDetails();
  }, [postId]);

  const updatePost = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!postId) return alert("Post inconnu");

    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: post.body, tag: post.tag }),
      });
      if (res.ok) router.push("/");
    } catch (e) {
      throw Error(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Modifier"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePost}
    />
  );
};

export default EditPost;
