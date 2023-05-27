"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const PostCard = ({ post, handlTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex jusify-start items-center gap-3 cursor-pointer">
          <Image
            src={"/assets/images/profile.svg"}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post?.creator?.username}
              <p className="font-satoshi text-sm text-gray-700">{post?.post}</p>
            </h3>
          </div>
        </div>
      </div>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Editer
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Supprimer
          </p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
