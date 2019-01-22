import React from 'react'

const Story = ({title}) => (
    <li>{title}</li>
)

class Stories extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    {this.props.hits.map((value,index)=>{
                            return <Story key={index} title={value.title} />
                    })}
                </ul>
            </div>
        )
    }
}

export default Stories