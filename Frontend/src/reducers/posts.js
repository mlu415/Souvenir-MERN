export default (posts = [],action) =>{
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts,action.payload];    
        case "UPDATE":
            //returns updated post if existing otherwise returns post
            return posts.map((post)=>posts._id ===action.payload._id ? action.payload : post);    
        case "DELETE":
            //returns all posts except the one to be deleted
            return posts.filter((post)=> post._id !== action.payload)
        default:
            return posts;
    }
}