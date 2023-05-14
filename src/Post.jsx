import { useQuery } from '@tanstack/react-query';
import { getPosts, getUser } from './api/posts';

export default function Post({ id }) {
	const postQuery = useQuery({
		queryKey: ['post', id],
		queryFn: () => getPosts(id),
	});

	const userQuery = useQuery({
		queryKey: ['user', postQuery.data?.userId],
		enabled: !!postQuery.data?.userId,
		queryFn: () => getUser(postQuery.data?.userId),
	})

	if (postQuery.isLoading) return <h1>Loading...</h1>;
	if (postQuery.isError) return <h1>{JSON.stringify(postQuery.error)}</h1>;

	return (
		<>
			<h1>
				{postQuery.data.title}
				<br />

				<small>
					{userQuery.isLoading 
						? 'Loading...'
						: userQuery.isError
							? 'Error Loading User'
							: userQuery.data.name}
				</small>
			</h1>
			<p>{postQuery.data.body}</p>
		</>
	);
}