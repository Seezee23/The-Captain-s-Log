const React = require('react')

class Edit extends React.Component {
    render(){
        const{title, _id, entry, shipIsBroken} = this.props.log
        return (
            <>
            <h1>Edit This Log</h1>
            <nav>
                <a href="/logs"> Go Back To Logs Home Page</a>
            </nav>
            <form method="POST" action={`/logs/${_id}?_method=PUT`}>
                Title: <input type="text" title="title" defaultValue={title}></input><br/>
                Entry: <input type="text" title="entry" defaultValue={entry}></input><br/>
                shipIsBrokent: <input type="checkbox" title="shipIsBroken" defaultChecked={shipIsBroken}/><br/>
                <input type='submit' value="Edit Log" />
            </form>
            </>
        )
    }
}

module.exports = Edit