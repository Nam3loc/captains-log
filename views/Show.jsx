const React = require('react');
const DefaultLayout = require('./layout/Default');

class Show extends React.Component {
    render() {
        const {title, entry, shipIsBroken} = this.props.logs
        return (
            <DefaultLayout title={"Captain's Log"
                .toLowerCase() // Capitalizes every word
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            }>
                <div>
                    <p>{`Log: ${title}`}</p>
                    <p>{`Entry: ${entry}`}</p>
                    <p>{shipIsBroken? 'The ship is broken!' : "The ship is in good condition"}</p><br />
                    <button><a href="/logs">Back To Home Page</a></button>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show;