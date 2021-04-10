function ProjectEntry(props) {
  return(
    <div className="row card-body">
      <div className="col-12">
        <h5 className="d-flex justify-content-center">{props.name}</h5>
      </div>
      <div className="col-12 col-sm-4">
        <div className="d-flex justify-content-center my-1">
          <img className="img-fluid" src={props.image} alt={props.name} />
        </div>
      </div>
      <div className="col col-sm-8">
        <p className="my-2">{props.description}</p>
        <p className="my-1">
          Live link:{" "} 
          <a className="port-link" href={props.link} target="_blank" rel="noreferrer">{props.link}</a>
        </p>
        <p className="my-1">
          Github link:{" "} 
          <a href={props.gitLink} target="_blank" rel="noreferrer">{props.gitLink}</a>
        </p>
      </div>
    </div>
  )
}

export default ProjectEntry;