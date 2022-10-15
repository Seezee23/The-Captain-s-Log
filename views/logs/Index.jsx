const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render() {
        const {logs} = this.props
        return(
            <Default title="Logs Index Page">
                <ul>
                    {
                        captains_log.map((logs) =>{
                            const {title, entry, shipIsBroken, _id} = logs
                            return (
                                <li key={_id}>
                                    <a href={`/logs/${_id}`}>
                                        {title} </a> is {entry}

                                        <br/>
                                        {
                                            shipIsBroken?
                                            'It\'s broken':
                                            'It\'s not broken'
                                        }
                                        <br/>
                                        <form method='POST' action={`logs/${_id}?_method=DELETE`}>
                                            <input type='submit' value={`Delete ${entry} ${title}`}/>
                                        </form>

                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }

}

module.exports = Index