import React, { Component } from 'react';

export default (props) => {
    function mostRecentBuildStatus(project) {
        let build = project.builds[0]
        return build.status.toLowerCase()
    }

    function getLatestBuildTime(project) {
        let build = project.builds[0]
        return build.date
    }

    return (
        <div className={`panel card ${mostRecentBuildStatus(props.project)}`}>
            <div className="panel-body">
                <h2>{props.project.name}</h2>
                <h5>{getLatestBuildTime(props.project)}</h5>
            </div>
        </div>
    );
}