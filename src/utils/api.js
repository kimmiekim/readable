
  // const url = `${process.env.REACT_APP_BACKEND}/categories`;
  const url = 'http://localhost:3001/posts'
  console.log('fetching from url', url);

  // export function fetchPosts(){
  //   fetch(url, { method: "GET", headers: { 'Authorization': 'bambambam', 'Content-type': 'application/json' },
  //   credentials: 'include' } )
  //   .then((res) => { return(res.json()) })
  //   .then((data) => {
  //     // this.setState({ backend:data });
  //     console.log("data", data)
  //   });
  // }

  export function fetchPosts(){
    fetch(url, { method: "GET", headers: { 'Authorization': 'bambambam', 'Content-type': 'application/json' },
    credentials: 'include' } )
    .then(function(resp){
      resp.json().then(function(data){
        console.log(data)
      })
    })
  }
