import React from "react";

export const getSinglePost = async (post_id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    const data = await res.json();
    return data;
}
export async function generateMetadata({ params }) {
  const Post_id = (await params).id
 
  // fetch post information
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${Post_id}`).then((res) =>
    res.json()
  )
 
  return {
    title: post.title,
    description: post.description,
  }
}
 
export default async function singlePost({ params }) {
    const p = await params;
    const post = await getSinglePost(p.id);
    return (
        <div className="text-center mt-12">
            <h1 className="text-2xl font-bold">Post ID: {post.id}</h1>
            
            <p className="mt-4">{post.title}</p>
            <p className="mt-2">You can fetch and display more details about the post here.</p>
        </div>
    );
}