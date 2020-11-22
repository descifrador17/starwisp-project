import { Card, makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles((theme) => ({

    card: {
        borderRadius: 15,
        width: 305,
        height: 103,
        marginTop: 45,
        display: "flex"
    },
    count: {
        marginTop: 28,
        marginLeft: 21,
        color: "rgba(89,54,54,1)",
        fontWeight: 400,
        fontSize: 40,
        marginRight: 30
    },
    tag: {
        marginTop: 43,
        marginLeft: 30,
        flexGrow: 1,
        color: 'rgba(89, 54, 54, 0.8)',
        fontSize: 20
    }

}));

export default function InboxCard() {

    const style = styles()

    return (
        <div>
            <Card elevation="0" className={style.card}>
                <div className={style.tag}>
                    Inbox
                </div>
                <div className={style.count}>
                    23
                </div>
            </Card>
        </div>
    )
}
