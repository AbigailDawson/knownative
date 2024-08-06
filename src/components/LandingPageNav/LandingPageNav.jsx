import { Link } from 'react-router-dom';
export default function LandingPageNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light mx-4 py-3">
      <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#page-top">KnowNative</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
              <li class="nav-item"><a class="nav-link" href="/">About</a></li>
              <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
              <li class="nav-item"><a class="nav-link" href="https://github.com/AbigailDawson/knownative">GitHub</a></li>
            </ul>
          </div>
      </div>
  </nav>
  )
}