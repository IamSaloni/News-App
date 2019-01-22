import React from 'react'
import {Link} from 'react-router-dom'

const Story = ({title,id,author}) => (
    <li> <Link to={`/story/${id}`}>{title}</Link> - {author}</li>
)


class Stories extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    {this.props.hits.map((value,index)=>{
                            return <Story key={index} title={value.title} id={value.objectID} author={value.author} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Stories