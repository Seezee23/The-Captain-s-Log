const React = require('react');

class Default extends React.Component {
    render(){
        const {log, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <div>
                        <a href="/logs">Go to Home Page For Logs</a>
                        </div>
                        <div>
                        <a href="/logs/new">Create a New Log</a>
                        </div>
                        <div>
                        { log? <a href={`/logs/${log._id}/edit`}> {log.name} Edit Page </a> : ''}
                        </div>
                        <div>
                        { log? <a href={`/logs/${log._id}`}>{log.name} Show Page</a> : ''}
                        </div>
                    </nav>
                    <h1>
                        {this.props.title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default