'use client'
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { set } from "mongoose";

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const handleSearchChange=(e)=>{

  }
const PostCardList = ({data, handleTagClick}) => {
  return <div className="mt-16 prompt_layout">
    {data.map((post, index) => (
      <PostCard key={index} post={post} handleTagClick={handleTagClick} />   
    ))}
  </div>
}
const fetchPosts = async () => {
  const res = await fetch('/api/posts')
  const data = await res.json()
  setPosts(data)
  console.log(data)
}
  useEffect(() => {
    fetchPosts()
}, [])

  return <section className="feed">
<form action="" className="relative w-full flex-center">
  <input type="text"
  placeholder="Chercher des posts"
  value={searchText}
  onChange={handleSearchChange}
  required
  className="search_input peer" />
</form>
<PostCardList 
data={posts}
handleTagClick={()=>{}}

/>
  </section>;
};

export default Feed;
