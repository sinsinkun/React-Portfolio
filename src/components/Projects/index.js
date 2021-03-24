import ProjectEntry from "./ProjectEntry";
import jobsearchImg from "../../media/jobsearch.png";
import quizgameImg from "../../media/quizgame.png";
import schedulerImg from "../../media/scheduler.png";
import weatherImg from "../../media/weather.png";
import fluxImg from "../../media/fluxim.png";
import budgetImg from "../../media/budget.png";

const projects = [
  { name:"Flux IM", image:fluxImg, link:"https://flux-im.herokuapp.com/", gitLink:"https://github.com/Dragontalker/Project2_fluxIM" },
  { name:"Job Search Aggregator", image:jobsearchImg, link:"https://teamcirclealpha.github.io/GetMeEmployed/", gitLink:"https://github.com/TeamCircleAlpha/GetMeEmployed" },
  { name:"Budget Tracker", image:budgetImg, link:"https://jcx-budgettracker.herokuapp.com/", gitLink:"https://github.com/sinsinkun/UTOR-BudgetTracker" },
  { name:"Quiz Game", image:quizgameImg, link:"https://sinsinkun.github.io/UTOR-QuizGame/", gitLink:"https://github.com/sinsinkun/UTOR-QuizGame" },
  { name:"Scheduler", image:schedulerImg, link:"https://sinsinkun.github.io/UTOR-Scheduler/", gitLink:"https://github.com/sinsinkun/UTOR-Scheduler" },
  { name:"Weather dashboard", image:weatherImg, link:"https://sinsinkun.github.io/UTOR-WeatherApp/", gitLink:"https://github.com/sinsinkun/UTOR-WeatherApp" }
]

function Projects() {
  return (
    <div className="my-3">
      <div className="card card-md mx-auto">
        <div className="card-header">
          <h4 className="card-title">Past Projects</h4>
        </div>
        <div className="row card-body">
          {projects.map(
            project => <ProjectEntry name={project.name} link={project.link} image={project.image} gitLink={project.gitLink}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects;