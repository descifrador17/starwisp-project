import { Card, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const styles = makeStyles((theme) => ({
    card: {
        height: 60,
        width: 60,
        borderRadius: 15,
    },
    image: {
        height: 60,
        width: 60,
        objectFit: "cover"
    }
}));

export default function ProfilePic() {

    const classes = styles();

    return (
        <div>
            <Card className={classes.card} elevation="0">
                <img className={classes.image} src="https://images.unsplash.com/photo-1596920566403-2072ed25d7f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="None" />
            </Card>
        </div>
    )
}
