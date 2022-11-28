const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <DefaultLayout title="Logs Index Page">
                <h1>Logs Index Page</h1>
                <nav>
                    <a href="/new">Create Log</a>
                </nav>
                <ul>
                    {
                        logs.map((fruit, i) => {
                            return (
                                <li>
                                    {logs.title} <br />
                                    <form action={`/logs/${logs._id}?_method=DELETE`} method="POST">
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