import React from 'react'

function Charts() {
    return (
        <React.Fragment>

            <div className="col-xl-6 col-lg-5">
                <div className="card shadow mb-4" style={{ backgroundColor: '#f0f5fb' }}>
                    <div
                        className=" py-1 m-3 d-flex flex-row justify-content-center ">
                        <h6 className="mt-2 lead font-weight-bold text-dark">Monthly Business</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-area">
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-5">
                <div className="card shadow mb-4" style={{ backgroundColor: '#f0f5fb' }}>
                    <div
                        className=" py-1 m-3 d-flex flex-row justify-content-center ">
                        <h6 className="mt-2 lead font-weight-bold text-dark">Business Bifurcation</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-area">
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Charts; 