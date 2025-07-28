import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data;
}
export default async function Posts() {
    const posts = await getPosts();
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul className="list-disc list-inside">
                {posts.map(post => (
                    <li key={post.id} className="mb-2">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className="btn" href={`/posts/${post.id}`}>Post Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}