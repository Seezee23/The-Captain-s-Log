const React = require('react')

class Edit extends React.Component {
    render(){
        const{title, _id, entry, shipIsBroken} = this.props.logs
        return (
            <>
            <h1>Edit This Logs</h1>
            <nav>
                <a href="/logs"> Go Back To Captains_log Home Page</a>
            </nav>
            <form method="POST" action={`/logs/${_id}?_method=PUT`}>
                Title: <input type="text" name="title" defaultValue={title}></input><br/>
                Entry: <input type="text" name="entry" defaultValue={entry}></input><br/>
                shipIsBrokent: <input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken}/><br/>
                <input type='submit' value="Edit Logs" />
            </form>
            </>
        )
    }
}

module.exports = Edit