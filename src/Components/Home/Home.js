import React from "react";
import SideNav from "../Navs/SideNav";
import Navbar from "../Navs/Navbar";
import UpperCards from "../UpperCards";
import Charts from "../Charts";
import MainContent from "../MainContent_between";
import Downcards from "../Downcards";
import Footer from "../Footer";


let Home = () => {

    return (

        <React.Fragment>
            <div id="wrapper">
                <SideNav />
                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        <Navbar />
                        <div className="container-fluid">

                            <UpperCards />

                            <div className="row">
                                <Charts />
                                <MainContent />
                            </div>

                            <div className="row">

                                <Downcards />
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home; 