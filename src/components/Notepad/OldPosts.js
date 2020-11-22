import { Card, makeStyles } from '@material-ui/core'
import React from 'react'
import ProfilePic from './ProfilePic';

const styles = makeStyles((theme) => ({
    comment: {
        width: 1000,
        marginBottom: 50
    }
}));

const OldPosts = (props) => {

    const classes = styles();

    return (
        <div>
            <Card style={{ marginLeft: 60, marginTop: 30, width: 1083, borderRadius: 15 }} elevation="0">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ marginTop: 25, marginLeft: 25 }}>
                        <ProfilePic />
                    </div>
                    <div style={{ marginTop: 32, marginLeft: 24, marginBottom: 30 }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ marginRight: 800, fontSize: 17, fontWeight: 700 }}>
                                Teacher
                            </div>
                            <div style={{ color: "#868686", fontSize: 15 }}>
                                12:40 pm
                            </div>
                        </div>
                        <div style={{ marginTop: 24, marginRight: 45, textAlign: "justify" }}>
                            {props.data}
                        </div>
                    </div>
                </div>
            </Card>
        </div >
    )
}

export default OldPosts