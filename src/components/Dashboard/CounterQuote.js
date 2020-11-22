import { Card, makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles((theme) => ({

    card: {
        borderRadius: 15,
        width: 141,
        height: 105,
        backgroundColor: "rgba(31,253,119,1)",
        marginTop: 21,
        marginLeft: 21,
        marginBottom: 200
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

export default function CounterQuote() {

    const style = styles()

    return (
        <div>
            <Card elevation="2" className={style.card}>
                <div className={style.amount}>
                    33
                </div>
                <div className={style.tag}>
                    Quotations
                </div>
            </Card>
        </div>
    )
}
