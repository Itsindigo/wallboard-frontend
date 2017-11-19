import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from '../actions/index';
import Project from '../components/project';

class ProjectDashboard extends Component {
    constructor(props) {
        super(props);
 
        let itemsPerPage = 4

        this.state = {
            cycle: 0,
            itemsPerPage: itemsPerPage,
            pageTimeOut: 2000,
            projects: props.fetchProjects()
        };
 
        this.onTimeOut = this.onTimeOut.bind(this);
    }
    
    
    componentDidMount() {
        this.setState({ totalPages: Math.ceil(this.state.projects.length / this.state.itemsPerPage) })
        setTimeout(this.onTimeOut, this.state.pageTimeOut);
    }

    onTimeOut() {
        if (this.state.cycle >= this.state.totalPages) {
            this.setState({ cycle: 0 });
        } else {
            this.setState({ cycle: this.state.cycle += 1 });
        }
        setTimeout(this.onTimeOut, 2000)
    }

    renderProjects() {
        return _.map(this.props.projects[this.state.cycle], project => {
            return (
                <div key={project.uuid} className="col-md-3">
                    <Project project={project} />
                </div>
            )
        })        
    }

    render() {
        if (this.props.projects) {
            return (
                <div className="row">
                    {this.renderProjects()}
                </div>
            );
        }
        return (
            <div>
                <span>Loading...</span>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectDashboard)