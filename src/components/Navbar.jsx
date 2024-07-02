const Navbar = ({setCategory}) => {
  return (
    <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg "data-bs-theme ="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><span className="badge bg-danger fs-4">खबरे</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="nav-link" onClick={() => {setCategory("technology")}}>Technology</div>
            </li>
            <li class="nav-item" onClick={() => {setCategory("entertainment")}}>
              <div  class="nav-link">Entertainmnet</div>
            </li>
            <li class="nav-item" onClick={() => {setCategory("business")}}>
              <div  class="nav-link">Business</div>
            </li>
            <li class="nav-item" onClick={() => {setCategory("health")}}>
              <div  class="nav-link">Health</div>
            </li>
            <li class="nav-item" onClick={() => {setCategory("sports")}}>
              <div  class="nav-link">Sports</div>
            </li>
            <li class="nav-item" onClick={() => {setCategory("science")}}>
              <div  class="nav-link">Science</div>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar