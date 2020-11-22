import { InputAdornment, InputBase, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import GraphMonth from "../../components/Dashboard/GraphMonth";
import InboxCard from "../../components/Dashboard/InboxCard";
import LastMonth from "../../components/Dashboard/LastMonth";
import Notepad from "../../components/Dashboard/Notepad";
import NotifEventsCard from "../../components/Dashboard/NotifEventsCard";
import SalesReportCard from "../../components/Dashboard/SalesReportCard";
import ThisMonthCard from "../../components/Dashboard/ThisMonthCard";

const styles = makeStyles((theme) => ({
    search: {
        width: 836,
        height: 36,
        background: "#E2E2E2",
        borderRadius: 12
    }
}));

const Dashboard = (props) => {

    const classes = styles();

    return (
        <div>
            <InputBase className={classes.search}
                startAdornment={
                    <InputAdornment position="start">
                        <Search style={{ marginLeft: 10, color: "#9d9d9d" }} />
                    </InputAdornment>
                }
                placeholder="Search"
                variant="outlined"
                size="small"
            />
            <div style={{ marginTop: 28, display: "flex" }}>
                <div>
                    <SalesReportCard />
                    <div style={{ display: "flex", flexDirection: "row", marginTop: 34 }}>
                        <div><Notepad /></div>
                        <div style={{ marginLeft: 21 }}>
                            <GraphMonth />
                            <InboxCard />
                        </div>
                        <div style={{ marginLeft: 19 }}>
                            <ThisMonthCard />
                            <LastMonth />
                        </div>
                    </div>
                </div>
                <div>
                    <NotifEventsCard />
                </div>
            </div>

        </div>
    );
};

Dashboard.propTypes = {};

export default Dashboard;
