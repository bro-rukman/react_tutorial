import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';
// DELETE
const deleteNewsData=(id)=>Delete(`posts/${id}`, false);
// PUT
const putNewsData=(data,id)=> Put(`posts/${id}`,false,data);
// POST
const getPostBlog=(data)=> Post('posts', false,data);
// GET
const getNewsBlog = ()=> Get('posts?_sort=id&_order=desc', false);
const getPhotos=()=> Get('comments', true);
const API={
    deleteNewsData,
    putNewsData,
    getNewsBlog,
    getPhotos,
    getPostBlog
}

export default API;
