import React from "react";
import PostCard from "./PostCard";
const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
 
  return (
    <section>
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          
        {name} Profil
        </span>
        </h1>
        <p className="desc text-left">
          {desc}
        </p>
        <div className="mt-10 prompt_layout">
    {data.map((post, index) => (
      <PostCard 
      key={index} 
      post={post} 
      handleEdit={()=> handleEdit && handleEdit(post)} 
      handleDelete={()=> handleDelete && handleDelete(post) }/>   
    ))}
  </div>
    </section>
  );
};

export default Profile;
