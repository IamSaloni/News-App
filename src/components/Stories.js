import React from 'react'
import {Link} from 'react-router-dom'

const Story = ({title,id}) => (
    <li> <Link to={`/story/${id}`}>{title}</Link></li>
)


class Stories extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    {this.props.hits.map((value,index)=>{
                            return <Story key={index} title={value.title} id={value.objectID} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Stories