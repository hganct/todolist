import React from 'react';


class Title extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="page-header">
                <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
            </div>
        );
    }
}

export default Title;