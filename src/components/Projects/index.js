import ProjectEntry from "./ProjectEntry";
import socketIMImg from "../../media/socketim.png";
import budgetImg from "../../media/budget.png";
import burgerLoggerImg from "../../media/burgerlogger.png";
import googlebooksImg from "../../media/googlebooks.png";

const projects = [
  { name:"Socket IM", 
    image:socketIMImg, 
    description:"The focus of this project was to implement SocketIO under the react framework. I have implemented SocketIO in vanilla HTML before, but due to the nature of React's virtual DOM, SocketIO requires a different approach.",
    link:"https://react-im.herokuapp.com/", 
    gitLink:"https://github.com/sinsinkun/React-SocketIO" 
  },
  { name:"Google Books Search", 
    image:googlebooksImg, 
    description:"This project is to demonstrate a basic implementation of a full MERN stack. The search itself calls the Google Books API to obtain entries, which can be saved to the \"Saved\" tab for later access, implemented using MongoDB.",
    link:"https://jcx-googlebooksearch.herokuapp.com/", 
    gitLink:"https://github.com/sinsinkun/UTOR-Googlebooks" 
  },
  { name:"Budget Tracker", 
    image:budgetImg, 
    description: "This project focuses on the implementation of a Service Worker, which allows offline functionality in the event of internet interruption.",
    link:"https://jcx-budgettracker.herokuapp.com/", 
    gitLink:"https://github.com/sinsinkun/UTOR-BudgetTracker" 
  },
  { name:"Burger Logger", 
    image:burgerLoggerImg, 
    description: "This project is to showcase my familiarity with vanilla HTML/JS full stack implementation, utilizing a SQL DB backend for tracking information.",
    link:"https://jcx-burger.herokuapp.com/", 
    gitLink:"https://github.com/sinsinkun/UTOR-BurgerList" 
  }
]

function Projects() {
  return (
    <div className="my-3">
      <div className="card card-md mx-auto">
        <div className="card-header">
          <h4 className="card-title">Past Projects</h4>
        </div>
        {projects.map(
          project => <ProjectEntry name={project.name} link={project.link} 
            image={project.image} gitLink={project.gitLink} description={project.description} />
        )}
      </div>
    </div>
  )
}

export default Projects;