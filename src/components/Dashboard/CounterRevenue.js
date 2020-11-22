import { Card, makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles((theme) => ({

    card: {
        borderRadius: 15,
        width: 141,
        height: 105,
        backgroundColor: "#FFE700",
        marginTop: 21,
        marginLeft: 21,
    },
    amount: {
        marginTop: 21,
        marginLeft: 21,
        color: "#593636",
        fontWeight: 400,
        fontSize: 20
    },
    tag: {
        marginTop: 21,
        marginLeft: 21,
        color: 'rgba(89, 54, 54, 0.8)'
    }

}));

export default function CounterRevenue() {

    const style = styles()

    return (
        <div>
            <Card elevation="2" className={style.card}>
                <div className={style.amount}>
                    $1,204.33
                </div>
                <div className={style.tag}>
                    Revenue
                </div>
            </Card>
        </div>
    )
}
