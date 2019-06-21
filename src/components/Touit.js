import React from 'react';


class Touit extends React.Component {
    render() {
        return (
            <div className="Touit">
                <p>{this.props.message}</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
};

export default Touit;