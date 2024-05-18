const posts = [
    { id: 1, title: 'post one' },
    { id: 2, title: 'post two' }
];

const getPost = () => {
    return posts;
}

const getPostLength = () => {
    posts.length;
}

export { getPost, getPostLength };
export default getPost;
// export{
//     getPost,
// }