// export function getPosts () {
//     return axios
//         .get('https://jsonplaceholder.typicode.com/posts', { params: { _sort: 'title' } })
//         .then(response => response.data);
// }

export async function getPosts() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts?_sort=title&_limit=10');
	const data = await response.json();
	return data;
}

export async function getUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await response.json();
	return data;
}

export async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await response.json();
	return data;
}

// export async functions getPostsPaginated(page) {
    
// }