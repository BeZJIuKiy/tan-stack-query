// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { v4 as uuidv4 } from 'uuid';

// const POSTS = [
// 	{ id: 1, title: 'Post 1' },
// 	{ id: 2, title: 'Post 2' },
// 	{ id: 3, title: 'Post 3' },
// ];


// export default function App() {
// 	const queryClient = useQueryClient();
	
// 	const postsQuery = useQuery({
// 		queryKey: ['posts'],
// 		queryFn: (obj) => {
// 			console.log(obj);
// 			return wait(1000).then(() => [...POSTS]);
// 		},
// 		// queryFn: () => Promise.reject("Error Message"),
// 	});
	
// 	console.log(POSTS);
// 	const newPostMutation = useMutation({
// 		mutationFn: (title) => wait(1000).then(() => POSTS.push({ id: uuidv4(), title })),
// 		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
// 	})

// 	if (postsQuery.isLoading) return <h1>Loading...</h1>;
// 	if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;
	
// 	return (
// 		<div>
// 			{postsQuery.data.map((post) => (
// 				<div key={uuidv4()}>{post.title}</div>
// 				))}
			
// 			<button disabled={newPostMutation.isLoading} onClick={() => newPostMutation.mutate('New Post')}>New Post</button>
// 		</div>
// 	);
// }

// function wait(ms) {
// 	return new Promise((resolve) => setTimeout(resolve, ms));
// }

// /posts -> ['posts']
// /posts/1 -> ['posts', post.id]
// /posts?authorId=1 -> ['posts', { authorId: 1 }]
// /posts/2/comments -> ['posts', post.id, 'comments']

import { useState } from "react";
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostsList2";
import Post from "./Post";

export default function App() {
	const [currentPage, setCurrentPage] = useState(<PostsList1 />);

	return (
		<div>
			<button onClick={() => setCurrentPage(<PostsList1 />)}>Posts List 1</button>
			<button onClick={() => setCurrentPage(<PostsList2 />)}>Posts List 2</button>
			<button onClick={() => setCurrentPage(<Post id={1} />)}>First Post</button>
			
			<br />
			{currentPage}
		</div>
	);
}