import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from '../actions/index';
import Project from '../components/project';

class ProjectDashboard extends Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    renderProjects() {
        return _.map(this.props.projects, project => {
            return (
                <Project  key={project.uuid} project={project} />
            )
        })        
    }

    render() {
        if (this.props.projects) {
            return (
                <div className="col-md-3">
                    {this.renderProjects()}
                </div>
            );
        }
        return (
            <div>
                Loading...
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectDashboard)