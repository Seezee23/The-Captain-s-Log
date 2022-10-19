const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Log">
            <form method="POST" action="/logs">
                Title: <input type="text" name="title" placeholder="Title of Log Here"></input><br/>
                Entry: <input type="text" name="entry" placeholder='Entry of Log Here'></input><br/>
                shipIsBroken: <input type="checkbox" name="shipIsBroken"></input><br/>
                <input type='submit' value="Submit Log"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New