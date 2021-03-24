function ProjectEntry(props) {
  return(
    <div className="col-md-6">
      <div className="d-flex justify-content-center my-1">
        <a className="port-link" href={props.link} target="_blank" rel="noreferrer">
          <img className="img-fluid" src={props.image} alt={props.name} />
        </a>
      </div>
      <span className="d-flex justify-content-center">{props.name}</span>
      <span className="d-flex justify-content-center mb-2">
        <a href={props.gitLink} target="_blank" rel="noreferrer">Github Link</a>
      </span>
    </div>
  )
}

export default ProjectEntry;