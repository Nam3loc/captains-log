const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <DefaultLayout>
                <h1>Logs Index Page</h1>
                <nav>
                    <a href="/logs/new">Create Log</a>
                </nav>
                <ul>
                    {
                        logs.map((log, i) => {
                            return (
                                <li>
                                    {log.title} <br />
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE" />
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;