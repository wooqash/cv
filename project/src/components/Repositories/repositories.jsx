import React from "react";
import jsonFetch from "simple-json-fetch";
import siteConfig from "../../../data/config";

import Loader from '../loader'

import "./repositories.scss";

const reposEndpoint =
    `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=pushed&per_page=5&page=1`;

class Repositories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: [],
            status: 'loading'
        }
    }
    async componentDidMount() {
        const repos = await jsonFetch(reposEndpoint);
        if (repos.json && repos.json.length) {
            this.setState({ repos: repos.json, status: 'ready' })
        }
    }
    render() {
        const { status } = this.state;
        return (
            <section className="section repositories">
                <h3 className="section__title">{this.props.title}</h3>
                {status === "loading" && <div className='repositories__loader'><Loader /></div>}
                {status === "ready" &&
                    this.state.repos && (
                        <React.Fragment>
                            <ul className="repositories__content">
                                {this.state.repos.map(repo => {
                                    if (!repo.archived) {
                                        return (<React.Fragment key={repo.name}>
                                            <li className="repositories__repo">
                                                <a className='repositories__repo-link' href={repo.html_url}>
                                                    <strong className="repositories__repo-name">{repo.name}</strong>
                                                    <p className="repositories__repo-desc">{repo.description}</p>
                                                </a>
                                                <span className="repositories__repo-date">
                                                    {this.props.updated} {new Date(repo.updated_at).toLocaleString()}
                                                </span>
                                                <div className={"repositories__repo-star " + (repo.stargazers_count < 10 ? 'hidden' : '')}>
                                                    ★ {repo.stargazers_count}
                                                </div>
                                            </li>
                                        </React.Fragment>)
                                    }
                                    return '';
                                })}
                            </ul>
                        </React.Fragment>
                    )}
            </section>
        )
    }
}

export default Repositories;
