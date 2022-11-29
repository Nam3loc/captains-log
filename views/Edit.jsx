const React = require('react');
const DefaultLayout = require('./layout/Default');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                <form action={`/logs/${this.props.logs._id}?_method=PUT`} method='POST'>
                    Title: <input type="text" name="title" defaultValue={this.props.logs.title} /><br />
                    Entry: <input type="text" name="entry" defaultValue={this.props.logs.entry} /><br />
                    Is the Ship Broken:
                    {this.props.logs.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken" /> } <br />
                    <input type="submit" value={`Edit ${this.props.logs.title}`} />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;