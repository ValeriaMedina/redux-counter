export function increment() {
  return {
    type: "INCREMENT"
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

export function aumentar() {
  return{
    type:"AUMENTAR"
  }
};

export function reducir() {
  return {
    type:"REDUCIR"
  }
};

export function getPosts(){
  return {
    type: "START_GET_POSTS"
  };
}

export function getPostsSuccess(posts){
  return {
    type: "SUCCESS_GET_POSTS",
    payload: posts
  };
}

export function getPostsFailure(error){
  return {
    type: "ERROR_GET_POSTS",
    error
  };
}

// export function getPosts() {
//   return dispatch => {
//     dispatch({ type: "START_GET_DATA" });
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(res => {
//         if (res.error) {
//           throw res.error;
//         }
//         return dispatch({ type: "SUCCESS_GET_DATA", payload: res });
//       })
//       .catch(error => {
//         dispatch({ type: "ERROR_GET_DATA", error: error });
//       });
//   };
// }
