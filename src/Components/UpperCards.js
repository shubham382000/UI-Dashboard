import React from 'react';
import { HealthAndSafety } from '@mui/icons-material';
import { TwoWheelerSharp } from '@mui/icons-material';
import { NoCrashSharp } from '@mui/icons-material';
import { LocalTaxiSharp } from '@mui/icons-material';
import { LocalShippingSharp } from '@mui/icons-material';
import { LuggageSharp } from '@mui/icons-material';
import { SupportAgent } from '@mui/icons-material';
import { LocalPhone } from '@mui/icons-material';
import { EmailSharp } from '@mui/icons-material';
import { VolunteerActivism } from '@mui/icons-material';

function UpperCards() {
    return (
        <React.Fragment>

            <div className="row">

                <div className="col-xl-6 col-md-6 mb-4">
                    <div className="card shadow h-100 py-2" style={{ backgroundColor: '#f0f5f9' }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-lg mb-0 font-weight-bold text-gray-800 color"> <span className="bi bi-square-fill">
                                        <VolunteerActivism
                                            sx={{
                                                color: '#78b6c8',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '2em',
                                                width: '2em'
                                            }} />
                                    </span>My Relationship Manager</div>
                                    <div className="text-sm fw-bold  mb-1 ">Raghava Shree Raj - S18393</div>
                                    <div className="text-sm fw-medium mb-1"><span className="bi bi-square-fill">
                                        <LocalPhone
                                            sx={{
                                                color: '#bfc6cd',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '2em',
                                                width: '2em'
                                            }} />
                                    </span>9024882683</div>
                                    <div className="text-sm fw-medium mb-1"><span className="bi bi-square-fill">
                                        <EmailSharp
                                            sx={{
                                                color: '#b8c3cd',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '2em',
                                                width: '2em'
                                            }} />
                                    </span>testing@exportcover.in</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card shadow h-125 py-2" style={{ backgroundColor: '#f2eefc' }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <span className="bi bi-square-fill">
                                        <HealthAndSafety
                                            sx={{
                                                color: 'White',
                                                backgroundColor: '#8359d9',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '1.8em',
                                                width: '1.8em'
                                            }} />
                                    </span>
                                    <div className="text-sm mb-0 font-weight-bold" >Health Insurance</div>
                                    <div className="text-sm fw-medium mb-1">
                                        Click Here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card shadow h-125 py-2" style={{ backgroundColor: '#e9f8fd' }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <span className="bi bi-square-fill">
                                        <TwoWheelerSharp
                                            sx={{
                                                color: 'White',
                                                backgroundColor: '#33b7e8',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '1.8em',
                                                width: '1.8em'
                                            }} />
                                    </span>
                                    <div className="text-sm mb-0 font-weight-bold">Bike Insurance</div>
                                    <div className="text-sm fw-medium mb-1">
                                        Click Here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card shadow h-125 py-2" style={{ backgroundColor: '#e9f8f5' }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <span className="bi bi-square-fill">
                                        <NoCrashSharp
                                            sx={{
                                                color: 'White',
                                                backgroundColor: '#2cbf93',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '1.8em',
                                                width: '1.8em'
                                            }} />
                                    </span>
                                    <div className="text-sm mb-0 font-weight-bold">Car Insurance</div>
                                    <div className="text-sm fw-medium mb-1">
                                        Click Here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-6 col-md-6 mb-4">
                    <div className="card shadow py-2" style={{ backgroundColor: '#f0f5f9' }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-lg mb-0 font-weight-bold color">  <span className="bi bi-square-fill">
                                        <SupportAgent
                                            sx={{
                                                color: '#78b6c8',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '2em',
                                                width: '2em'
                                            }} />
                                    </span>Tele Relationship Manager</div>
                                    <div className="text-sm fw-bold mb-1">Venkestesh Reddy - S18393</div>
                                    <div className="text-sm fw-medium mb-1"><span className="bi bi-square-fill">
                                        <LocalPhone
                                            sx={{
                                                color: '#bfc6cd',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '2em',
                                                width: '2em'
                                            }} />
                                    </span>6376138595</div>
                                    <div className="text-sm fw-medium mb-1"><span className="bi bi-square-fill">
                                        <EmailSharp
                                            sx={{
                                                color: '#b8c3cd',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '2em',
                                                width: '2em'
                                            }} />
                                    </span>support@exportcover.in</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-2 col-md-6 pb-5">
                    <div className="card shadow h-125 py-2 shift" style={{ backgroundColor: '#fff9ed' }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <span className="bi bi-square-fill">
                                        <LocalTaxiSharp
                                            sx={{
                                                color: 'White',
                                                backgroundColor: '#f2b956',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '1.8em',
                                                width: '1.8em'
                                            }} />
                                    </span>
                                    <div className="text-sm mb-0 font-weight-bold">PCV Insurance</div>
                                    <div className="text-sm fw-medium mb-1">
                                        Click Here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card shadow h-125 py-2 shift" style={{ backgroundColor: '#f8f8f8' }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <span className="bi bi-square-fill">
                                        <LocalShippingSharp
                                            sx={{
                                                color: 'White',
                                                backgroundColor: '#bcbcbc',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '1.8em',
                                                width: '1.8em'
                                            }} />
                                    </span>
                                    <div className="text-sm mb-0 font-weight-bold">GCV Insurance</div>
                                    <div className="text-sm fw-medium mb-1">
                                        Click Here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-2 col-md-6 mb-4">
                    <div className="card shadow h-125 py-2 shift" style={{ backgroundColor: '#e5fffe' }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <span className="bi bi-square-fill">
                                        <LuggageSharp
                                            sx={{
                                                color: 'White',
                                                backgroundColor: '#26c2be',
                                                borderRadius: '15%',
                                                Size: 'large',
                                                padding: '0.6rem',
                                                height: '1.8em',
                                                width: '1.8em'
                                            }} />
                                    </span>
                                    <div className="text-sm mb-0 font-weight-bold">Travel Insurance</div>
                                    <div className="text-sm fw-medium mb-1">
                                        Click Here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='d-flex justify-content-end mb-1'>
                        <a href="/" className=" text-primary fw-bold">VIEW ALL</a>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default UpperCards; 