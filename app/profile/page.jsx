"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await res.json();
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-post?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Voulez-vous supprimer ce post?");
    if(hasConfirmed){
        try {
            await fetch(`/api/posts/${post._id.toString()}`, {
                method: "DELETE",   
            })
            const filteredPosts = posts.filter((p) => p._id !== post._id);
            setPosts(filteredPosts);
        } catch (error) {
            
        }
    }
  };

  return (
    <Profile
      name="Mon"
      desc="Bienvenu sur votre profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
