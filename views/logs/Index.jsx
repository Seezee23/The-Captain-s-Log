const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.superman = props.superman
    }
    render(){
        const {logs} = this.props
        return(
            <Default title="Logs Index Page">
                <ul>
                    {
                        logs.map((log) => {
                            const {title, entry, shipIsBroken, _id} = log
                            return (
                                <li key={_id}>
                                    <a href={`/logs/${_id}`}>
                                    {title}</a> is {entry}
                                    
                                     <br/>
                                    {
                                        shipIsBroken? 
                                        'It\'s broken':
                                        'It\'s not broken'
                                    }
                                    <br/>
                                    <form method="POST" action={`/logs/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${entry} ${title}`}/>
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