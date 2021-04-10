function ContactMe() {

  return(
    <div className="my-3">
      <div className="card card-md mx-auto">
        <div className="card-header">
          <h4 className="card-title">Contact Information</h4>
        </div>
        <div className="card-body">
          <p className="mb-3 mx-2">
            Feel free to contact me through any of the channels listed below.<br />
            I look forward to hearing from you!
          </p>
          <ul>
            <li className="my-2"><b>Email:</b> chang.x1994@gmail.com</li>
            <li className="my-2"><b>Phone Number:</b> 416-834-7055</li>
            <li className="my-2"><b>Github:</b> <a href="https://github.com/sinsinkun" target="_blank" rel="noreferrer">https://github.com/sinsinkun</a></li>
            <li className="my-2"><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/jingchang-xiao/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/jingchang-xiao/</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;