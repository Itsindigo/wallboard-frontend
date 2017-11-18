import _ from 'lodash';
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

    function renderBuildIcons(project) {
        return _.map(project.builds, build => {
            if (build.status === "SUCCESSFUL") {
                return (
                    <span key={build.date} className="glyphicon glyphicon-ok-sign"></span>
                )
            } 
            if (build.status === "FAILED") {
                return (
                    <span key={build.date} className="glyphicon glyphicon-remove-sign"></span>
                )
            }
            return (
                <span key={build.date} className="glyphicon glyphicon-question-sign"></span>
            )
        })
    }

    return (
        <div className={`panel card ${mostRecentBuildStatus(props.project)}`}>
            <div className="panel-body">
                <h2>{props.project.name}</h2>
                <h5>{getLatestBuildTime(props.project)}</h5>
                {renderBuildIcons(props.project)}
            </div>
        </div>
    );
}