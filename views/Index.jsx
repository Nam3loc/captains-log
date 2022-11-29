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
                                    <a href={`/logs/${log._id}`}>{log.title}</a><br />
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE" />
                                        <button><a href={`/logs/${log._id}/edit`}>EDIT THIS LOG</a></button>
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