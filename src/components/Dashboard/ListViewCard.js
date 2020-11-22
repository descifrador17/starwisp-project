import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const styles = makeStyles((theme) => ({
    title: {
        color: 'rgba(72,72,72,1)',
        marginTop: 15,
        fontWeight: 400,
        fontSize: 15
    },
    message: {
        color: 'rgba(117,111,111,1)',
        marginTop: 3,
        fontWeight: 400,
        fontSize: 12
    },
    time: {
        color: 'rgba(117,111,111,1)',
        marginTop: 10,
        fontWeight: 400,
        fontSize: 9
    }
}));



const ListViewCard = (props) => {

    const classes = styles()

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <Paper style={{
                        background: `${getRandomColor()}`,
                        width: 46,
                        height: 54,
                        marginTop: 20,
                        marginLeft: 10,
                        marginBottom: 20
                    }}></Paper>
                </div>
                <div style={{ marginLeft: 16 }}>
                    <div className={classes.title}>
                        Admin
                    </div>
                    <div className={classes.message}>
                        Your faculty uploaded the syllabus.
                    </div>
                    <div className={classes.time}>
                        3 minutes ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListViewCard
