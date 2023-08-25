import React from 'react';
import { PercentSharp, ReceiptLongSharp, SettingsBackupRestore } from '@mui/icons-material';
import { NotificationsActiveSharp } from '@mui/icons-material';

function MainContent() {
    return (
        <React.Fragment>

            <div className="col-xl-4 col-lg-3">
                <div className="card shadow mb-4" style={{ backgroundColor: '#f0f5fb' }}>
                    <div
                        className="  py-1 m-3   d-flex flex-row">
                        <span className="bi bi-square-fill">
                            <NotificationsActiveSharp
                                sx={{
                                    color: '#1f5d80',
                                    Size: 'large',
                                    padding: '0.5rem',
                                    height: '1.5em',
                                    width: '1.5em'
                                }} />
                        </span>
                        <h6 className="lead font-weight-bold" style={{ color: '#1f5d80' }}>Notifications</h6>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                        <div className="chart-area">
                            <ul style={{ listStyle: 'circle' }}>
                                <li className="flexx">
                                    <div className="flex-auto ml-6 mt-0" style={{ color: '#1f5d80' }}>
                                        <p className=" text-lg fw-semibold mb-0 ml-4" >
                                            Married Woman Property Act</p>
                                        <div className="text-sm ml-4 fw-bold" >
                                            <a href="/" style={{
                                                color: '#1f5d80',
                                                textDecoration: 'underline'
                                            }}><p>View More</p></a>
                                        </div>
                                    </div>
                                </li>
                                {/* second */}
                                <li className="flexx mt-2">
                                    <div className="flex-auto ml-6 mt-0" style={{ color: '#1f5d80' }}>
                                        <h3 className=" text-lg fw-semibold mb-0 ml-4" >What is NO claim bonus?</h3>
                                        <div className="text-sm ml-4 fw-bold" >
                                            <a href="/" style={{
                                                color: '#1f5d80',
                                                textDecoration: 'underline'
                                            }}><p>View More</p></a>
                                        </div>
                                    </div>
                                </li>
                                {/* third */}
                                <li className="flexx mt-3">
                                    <div className="flex-auto ml-6 mt-0" style={{ color: '#1f5d80' }}>
                                        <h3 className=" text-lg mb-0 fw-semibold ml-4" >What is insured declared value?</h3>
                                        <div className="text-sm ml-4 fw-bold" >
                                            <a href="/" style={{
                                                color: '#1f5d80',
                                                textDecoration: 'underline'
                                            }}><p>View More</p></a>
                                        </div>
                                    </div>
                                </li>
                                {/* Fourth */}
                                <li className="flexx mt-3">
                                    <div className="flex-auto ml-6 mt-0" style={{ color: '#1f5d80' }}>
                                        <h3 className=" text-lg mb-0 fw-semibold ml-4" >What is Agreed value policy?</h3>
                                        <div className="text-sm ml-4 fw-bold" >
                                            <a href="/" style={{
                                                color: '#1f5d80',
                                                textDecoration: 'underline'
                                            }}><p>View More</p></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-5 col-lg-3">
                <div className="card shadow mb-4" style={{ backgroundColor: '#f0f5fb' }}>
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        className=" py-1 m-3 d-flex flex-row justify-content-center ">
                        <h6 className="mt-2 lead font-weight-bold text-dark">Earnings</h6>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                        <div className="chart-area">


                        </div>
                    </div>
                </div>
            </div>

            {/* THIRD */}
            <div className="col-xl-3     col-lg-3">
                <div className="card shadow mb-4" style={{ backgroundColor: '#f0f5fb' }}>
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        className=" py-1 m-3 d-flex flex-row justify-content-center ">
                        <h5 className="mt-1 font-weight-bold text-dark text-primary">Conversion Ratio</h5>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                        <div className="chart-area">
                            <li className="flexx">
                                <span className="bi bi-square-fill">
                                    <SettingsBackupRestore
                                        sx={{
                                            color: 'White',
                                            backgroundColor: '#32b6de',
                                            borderRadius: '15%',
                                            Size: 'large',
                                            padding: '0.6rem',
                                            height: '2.2em',
                                            width: '2.2em',
                                        }} />
                                </span>
                                <div className="flex-auto ml-6 mt-0" style={{ color: '#8d9194' }}>
                                    <h3 className=" mb-0 ml-4 fw-bold" >10</h3>
                                    <div className="text-sm ml-4 fw-medium" >
                                        <p>Conversion</p>
                                    </div>
                                </div>
                            </li>
                            {/* second */}
                            <li className="flexx mt-5">
                                <span className="bi bi-square-fill">
                                    <ReceiptLongSharp
                                        sx={{
                                            color: 'White',
                                            backgroundColor: '#f6b953',
                                            borderRadius: '15%',
                                            Size: 'large',
                                            padding: '0.6rem',
                                            height: '2.2em',
                                            width: '2.2em',
                                        }} />
                                </span>
                                <div className="flex-auto ml-6 mt-0" style={{ color: '#8d9194' }}>
                                    <h3 className=" mb-0 ml-4 fw-bold" >05</h3>
                                    <div className="text-sm ml-4 fw-medium" >
                                        <p>Quotation</p>
                                    </div>
                                </div>
                            </li>
                            {/* third */}
                            <li className="flexx mt-5">
                                <span className="bi bi-square-fill">
                                    <PercentSharp
                                        sx={{
                                            color: 'White',
                                            backgroundColor: '#806bcb',
                                            borderRadius: '15%',
                                            Size: 'large',
                                            padding: '0.6rem',
                                            height: '2.2em',
                                            width: '2.2em',
                                        }} />
                                </span>
                                <div className="flex-auto ml-6 mt-0" style={{ color: '#8d9194' }}>
                                    <h3 className=" mb-0 ml-4 fw-bold" >20</h3>
                                    <div className="text-sm ml-4 fw-medium" >
                                        <p>Ratio</p>
                                    </div>
                                </div>
                            </li>

                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default MainContent; 