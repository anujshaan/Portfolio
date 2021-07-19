import "./project.css"
import project from "../../Img/project.png"

export default function Projects(){
    return(
        <div className="projectWrapper">
            <div className="projectHeading">
                <span>#2</span>
                Projects
                <hr />
            </div>
            <div className="project">
                <div className="projectDetails">
                    <div className="projectTitle">theSociAL</div>
                    <div className="projectDesc">
                        theSociAL is social media platform where user can upload/ update/ delete their own post also user can like/dislike and comment on someone else or on their own post .
                    </div>
                    <div className="projectStack">
                        <p>ReactJS</p>
                        <p>NodeJS</p>
                        <p>MongoDB(Atlas)</p>
                    </div>
                </div>
                <div className="projectImg">
                    <img src={project} alt="" />
                </div>
            </div>
                <div className="showMore">
                    <button>Show More</button>
                </div>
        </div>
    )
}