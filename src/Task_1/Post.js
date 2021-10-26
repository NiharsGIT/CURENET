import React from 'react'
import axios from 'axios'
class Post extends React.Component
{
    constructor()
    {
        super();
        this.state={
               userId: '',
               title: '',
               body: '',
            
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
       })
    }
    handleSubmit = event =>
    {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
        
    }
    render()
     {
        const {userId,title,body} = this.state
            return(
                <div >
                    <form onSubmit={this.handleSubmit}>
                        <div><input type='text' name='userId' value={userId} onChange={this.handleChange}/></div>
                        <div><input type='text' name='title' value={title} onChange={this.handleChange}/></div>
                        <div><input type='text' name='body' value={body} onChange={this.handleChange}/></div>
                        <button type='submit'>ADD</button>
                    </form>
                 </div>
               );
        //}
    }
}
export default Post