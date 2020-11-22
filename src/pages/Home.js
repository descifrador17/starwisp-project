import React from "react";
import Dashboard from "../containers/dashboard/Dashboard";
import Navbars from "../containers/navbars/Navbars";

const Home = () => {
    return (
        <div>
            <Navbars>
                <Dashboard />
            </Navbars>
        </div>
    );
};

export default Home;
