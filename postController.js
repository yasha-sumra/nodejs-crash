const posts = [
    { id: 1, title: 'post one' },
    { id: 2, title: 'post two' }
];

 export const getPost = () => {
    return posts;
}

export const getPostLength = () => {
  return posts.length;
}


export default getPost;
