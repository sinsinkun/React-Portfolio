import imageURL from "../../media/profile.jpg";
import resumePDF from "../../media/JingChang_Xiao_Resume.pdf";

function Homepage() {

  return(
    <div className="my-3">
      <div className="card card-md mx-auto">
        <div className="card-header">
          <h4 className="card-title">About Me</h4>
        </div>
        <div className="card-body">
          <img src={imageURL} className="profile-image" alt="logo" style={{width:"200px", float:"left"}}/>
          <p className="card-text">
            My name is Jingchang Xiao, I am a graduate from the University of Toronto with a 
            Bachelor's degree in Mechanical Engineering. I've had personal projects in coding 
            on and off ever since University, and have recently gotten more serious about 
            finding a career in the Software Development industry.
          </p>
          <p class="card-text"><a href={resumePDF} target="_blank" rel="noreferrer">Click here</a>&nbsp;
            to open a copy of my resume. It covers in more detail my educational and professional background,
            as well as other skills that may be less relevant to developers.</p>
          <p className="card-text">
            Althought my formal experience is limited, I have spent a lot of time learning and growing 
            as a developer. I am familiar with a multitude of languages including Javascript, vanilla
            HTML and CSS, ReactJS, NodeJS, C#, C, and others. Beyond frontend experience, I have also 
            had experience with projects involving backend work with Express server management, 
            relational (SQL) and non-relational (MongoDB) database querying, and API handling both 
            client side and server side.
          </p>
          <p className="card-text">
            For some recent examples of my works, please refer to my "Past Projects" page where I have 
            included links to some projects I have worked on in the past few months. Please note that 
            most projects are meant to demonstrate a specific area of web functionality, and therefore
            a little barren in terms of actual content.
          </p>
          <p className="card-text">
            This is a small example website I put together to demonstrate my proficiency 
            with ReactJS, as well as general web development practices. The website is responsive, 
            meaning it will auto adjust the displayed media based on the size of the window
            the user is trying to use.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Homepage;