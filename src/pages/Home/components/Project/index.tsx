import { Component } from 'react'
import './index.scss'
import ProjectCard from '@/components/ProjectCard'
import { Link } from 'react-router-dom'
import {featuredProjectList as allFeaturedProjectList} from '@/const/project'

export default class Project extends Component {
    render() {
        return (
            <section className="home-project">
                <h2 className="home-project-header header-font">
                    Our Featured Projects
                </h2>
                <div className="home-project-wrapper">
                    {
                        allFeaturedProjectList.map((item, index: number) => {
                            return (
                                <div className='home-project-wrapper-card' key={index}>
                                    <ProjectCard {...item}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="home-project-moreButton">
                    <Link className="home-project-moreButton-text poppins-font" to="/publication">
                        See More
                    </Link>
                </div>
            </section>

        )
    }
}