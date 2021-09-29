import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div id="nav-div">
            <h1 ><Link id="sugiwon" to="/">Sugiwon</Link></h1>
            {/* <br />
            <br /> */}

            <div id="hamburger-div">
                <div class="pos-f-t">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                        <div id="nav-tabs">

                            <Link className="nav-item" to="/">Home</Link>
                            {/* <Link className="nav-item" to="/contact">Contact</Link> */}
                            {/* <a className="nav-item" href="https://fanlink.to/sugiwon" target="_blank" rel="noreferrer">Music</a> */}
                            {/* <Link className="nav-item" to="/store">Store</Link> */}
                            <Link className="nav-item" to="/discography">Music</Link>
                        </div>
                        {/* <h5 class="text-white h4">Collapsed content</h5> */}
                        {/* <span class="text-muted">Toggleable via the navbar brand.</span> */}
                        </div>
                    </div>
                    
                    <nav class="navbar navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
        
    )
}

export default Nav;