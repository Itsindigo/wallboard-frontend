import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from '../actions/index';

class ProjectDashboard extends Component {
    componentDidMount() {
        this.props.fetchProjects();
    }


    render() {
        return (
            <div>Dashboard</div>
        );
    }
}


function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectDashboard)