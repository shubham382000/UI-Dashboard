import React from 'react'

function SideNav() {
    return (

        <React.Fragment>

            {/* <!-- Sidebar --> */}
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{ backgroundColor: '#1dafc8' }}>

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-text mx-3">Expert Cover</div>
                </a>

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active p-3">
                    <span className="fw-bold text-white">Menu</span>
                </li>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Claim Assistance</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Offline Quote</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Endorsement Request</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Inspection Request</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Cancellation</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Renewal</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Raise Ticket</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Cases</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-table"></i>
                        <span>My Profile</span></a>
                </li>

                {/* <!-- Divider --> */}
                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        </React.Fragment>

    )
}

export default SideNav; 