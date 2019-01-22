import React from 'react'

class StoryDetail extends React.Component {
    componentDidMount(){
        // fetch(`https://react-lne1nm.stackblitz.io/details/${this.props.match.params.id}`,{
        // mode: "no-cors", // no-cors, cors, *same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        // redirect: "follow", // manual, *follow, error
        // referrer: "no-referrer", // no-referrer, *client
        // })
        // .then( response => response.text())
        // .then(data => {
        //     console.log("new data incoming",data);
        // })
    }
    render() {
        return (<iframe src={`https://react-lne1nm.stackblitz.io/details/${this.props.match.params.id}`}>StoryDetails</iframe>)
    }
}

export default StoryDetail