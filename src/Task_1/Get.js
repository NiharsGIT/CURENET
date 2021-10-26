import React from 'react'
import axios from 'axios'
class App extends React.Component
{
    constructor()
    {
        super();
        this.state={
            items:[],
            isloded:false,
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                items: res.data,
                isloded:true
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render()
     {
         const{isloded,items}=this.state
         if(!isloded)
         {
            console.log('Loading...')
            return(
                <div>Loading....</div>
            )
        }
        else
        {      
            console.log('Loaded Successfully')
            return(
            <div>
                {items.map(item => <div key={item.id}>{item.id} | {item.title}</div>)}
            </div>    
            )
        }
        
    }
}
export default App