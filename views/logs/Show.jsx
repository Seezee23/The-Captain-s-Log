const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {title, entry, shipIsBroken, _id} = this.props.logs
        const capTitle = title[0].toUpperCase() + title.substring(1)
        return(
        <Default title={`${capTitle} Show Page`} logs={this.props.logs}>
            <p>{capTitle} is {entry} and {shipIsBroken? 'it\'s broken': 'it\'s not broken'}</p>
        </Default>
        )
   } 
}

module.exports = Show