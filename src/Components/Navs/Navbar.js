import React from 'react';
import { EmojiEventsSharp } from '@mui/icons-material';
import { HeadsetSharp } from '@mui/icons-material';
import { ShareSharp } from '@mui/icons-material';
import { NotificationsActiveSharp } from '@mui/icons-material';
import { PhoneAndroid } from '@mui/icons-material';

function Navbar() {
    return (
        <React.Fragment>

            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow" style={{ backgroundColor: '#f5f9fc' }}>

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}

                <div className="nav-item dropdown no-arrow pt-4  m-4">
                    <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <img className="img-profile rounded-circle"
                            src="img/undraw_profile.svg" alt="" />   */}
                        <li className="flexx mt-2">
                            <img className="img-profile rounded-circle"
                                src="img/undraw_profile.svg" alt="" style={{
                                    height: 50,
                                    width: 50
                                }} />
                            <div className="flex-auto ml-6 mt-0" style={{ color: '#1f5d80' }}>
                                <h3 className=" text-lg mb-0 fw-semibold ml-4" >Raghava Shree Raj</h3>
                                <div className="text-sm ml-4 fw-bold" >
                                    <p>6376138595</p>
                                </div>
                            </div>
                        </li>
                    </a>
                </div>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none mt-2">
                        {/* <!-- Dropdown - Messages --> */}
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* <!-- Nav Items > */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle pt-4" href="/" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="bi bi-square-fill">
                                <EmojiEventsSharp
                                    sx={{
                                        color: 'white',
                                        borderRadius: '50%',
                                        backgroundColor: '#1f5d80',
                                        Size: 'large',
                                        padding: '0.5rem',
                                        height: '1.5em',
                                        width: '1.5em'
                                    }} />
                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle pt-4" href="/" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="bi bi-square-fill">
                                <HeadsetSharp
                                    sx={{
                                        color: 'white',
                                        borderRadius: '50%',
                                        backgroundColor: '#1f5d80',
                                        Size: 'large',
                                        padding: '0.5rem',
                                        height: '1.5em',
                                        width: '1.5em'
                                    }} />
                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle pt-4" href="/" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="bi bi-square-fill">
                                <PhoneAndroid
                                    sx={{
                                        color: 'white',
                                        borderRadius: '50%',
                                        backgroundColor: '#1f5d80',
                                        Size: 'large',
                                        padding: '0.5rem',
                                        height: '1.5em',
                                        width: '1.5em'
                                    }} />
                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle pt-4" href="/" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="bi bi-square-fill">
                                <NotificationsActiveSharp
                                    sx={{
                                        color: 'white',
                                        borderRadius: '50%',
                                        backgroundColor: '#1f5d80',
                                        Size: 'large',
                                        padding: '0.5rem',
                                        height: '1.5em',
                                        width: '1.5em'
                                    }} />
                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle pt-4" href="/" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="bi bi-square-fill">
                                <ShareSharp
                                    sx={{
                                        color: 'white',
                                        borderRadius: '50%',
                                        backgroundColor: '#1f5d80',
                                        Size: 'large',
                                        padding: '0.5rem',
                                        height: '1.5em',
                                        width: '1.5em'
                                    }} />
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <!-- End of Topbar --> */}
        </React.Fragment>
    )
}

export default Navbar; 