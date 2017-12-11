import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProjects } from '../actions/index';
import Project from '../components/project';

class ProjectDashboard extends Component {
    constructor(props) {
        super(props);
        
        this.totalPages = this.totalPages.bind(this);

        this.state = {
            cycle: 0,
            pageTimeOut: 5000,
        };

        this.props.fetchProjects().then(() => {
            this.setState({
                totalPages: this.totalPages(this.props.projects),
                projects: this.props.projects
            })
        })

        this.onTimeOut = this.onTimeOut.bind(this);
        this.penultimatePage = this.penultimatePage.bind(this);
    }

    totalPages(obj) {
        return obj ? _.size(obj) : 1
    }

    componentDidMount() {
        setTimeout(this.onTimeOut, this.state.pageTimeOut);
    }

    penultimatePage() {
        return this.state.cycle >= (this.state.totalPages -1)
    }

    onTimeOut() {
        if (this.penultimatePage()) {
            this.setState({ cycle: 0 });
        } else {
            this.setState({ cycle: this.state.cycle += 1 });
        }
        setTimeout(this.onTimeOut, this.state.pageTimeOut);
    }

    renderProjects() {
        if (this.state.projects) {
            return _.map(this.state.projects[this.state.cycle], project => {
                return (
                    <div key={project.uuid} className="col-md-3">
                        <Project project={project} />
                    </div>
                )
            })        
        }
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