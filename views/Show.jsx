const React = require('react');
const DefaultLayout = require('./layout/Default');

class Show extends React.Component {
    render() {
        const {title, entry, shipIsBroken} = this.props.logs
        return (
            <DefaultLayout title={`${title} Show Page`
                .toLowerCase() // Capitalizes every word
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            }>
                <div>
                    <p>{title}</p>
                    <p>{entry}</p>
                    <p>{shipIsBroken? 'The ship is broken!' : "The ship is in good condition"}</p>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show;