import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          posts: [],
          errorMsf: ''
       }
     }

     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response => {
             console.log(response)
             this.setState({posts : response.data})
         })
         .catch(error => {
             console.log(error)
             this.setState({errorMsf : 'there is something wrong'})

         })
     }
  render() {
      const {posts , errorMsf} = this.state
    return (
        <div>list of posts
         {
             posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) :null
        }
        {
            errorMsf ? <div>{errorMsf}</div>  : null
        }
        </div>
     
    )
  }
}

export default PostList