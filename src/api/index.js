export async function fetchPosts() {
    try {
      const rawPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
      const posts = await rawPosts.json()
      return posts
    }
    catch(e){
      console.log("error on getting data: ", e)
    }
}