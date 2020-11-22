import { Card, makeStyles } from '@material-ui/core';
import React from 'react'
import BlueGraph from '../../assets/icons/blue_demo.png'

const styles = makeStyles((theme) => ({

    card: {
        borderRadius: 32,
        width: 270,
        height: 120,
        boxShadow: "-5px 8px 10px #727CCD"
    },
    heading: {
        marginTop: 10, marginLeft: 92, fontWeight: 300
    },
    value: {
        fontWeight: 700, fontSize: 25, marginTop: 20, marginLeft: 32, color: "rgba(15,38,242,1)", flexGrow: 1
    },
    image: {
        marginTop: 20, marginRight: 20
    },
    divider: {
        marginLeft: 8, marginRight: 8
    }
}));


export default function ThisMonthCard() {

    const style = styles()

    return (
        <div>
            <Card className={style.card} elevation="0">
                <div className={style.heading}>
                    This Month
                </div>
                <hr className={style.divider} />
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className={style.value}>
                        +7.8%
                    </div>
                    <div className={style.image}>
                        <img src={BlueGraph} alt={BlueGraph} />
                    </div>
                </div>
            </Card>
        </div>
    )
}
