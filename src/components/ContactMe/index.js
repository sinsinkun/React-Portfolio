function ContactMe() {

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("submitted form");
  }

  return(
    <div className="my-3">
      <div className="card card-md mx-auto">
        <div className="card-header">
          <h4 className="card-title">Contact Me</h4>
        </div>
        <form className="card-body" onSubmit={e => handleFormSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input type="email" className="form-control" id="nameInput" placeholder="email@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="msgInput" className="form-label">Message</label>
            <textarea type="text" className="form-control" id="msgInput" rows="5" placeholder="Enter message here" />
          </div>
          <button type="submit" className="btn-lg btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe;