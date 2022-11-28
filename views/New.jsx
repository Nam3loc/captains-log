const React = require('react');


class New extends React.Component {
    render() {
        return (
            <form action="/logs" method="POST">
                <input type="text" name="title" value="Title of Log" /><br />
                <input type="textarea" name="entry" value="Log Entry" /><br />
                <input type="checkbox" name="shipIsBroken" /><br />
                <input type="submit" />
            </form>
        )
    }
}

module.exports = New;