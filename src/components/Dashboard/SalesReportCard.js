import { Card, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Chart, Dataset } from 'react-rainbow-components';
import CounterQuote from './CounterQuote';
import CounterRevenue from './CounterRevenue';

const styles = makeStyles((theme) => ({

    card: {
        borderRadius: 15,
        width: 1029,
        height: 495
    },
    chart: {
        marginTop: 21,
        marginLeft: 40,
        width: 755,
        height: 365
    }

}));

export default function SalesReportCard() {

    const style = styles()
    return (
        <div>
            <Card className={style.card} elevation="0">
                <div style={{ display: "flex" }}>
                    <div style={{ width: 825, marginLeft: 21, marginTop: 21 }}>
                        <span style={{ color: "#593636", fontWeight: 400, fontSize: 30 }}>
                            Sales Report
                        </span>
                        <span style={{ marginLeft: 5, color: "#aaaaaa", fontWeight: 400, fontSize: 30 }}>
                            September 2020
                        </span>
                        <Chart
                            labels={[' ', ' ', ' ', ' ']}
                            type="line"
                            className={style.chart}
                        >
                            <Dataset
                                title="Dataset 1"
                                values={[23, 45, 123, 56]}
                                backgroundColor="#1de9b6"
                                borderColor="#1de9b6"
                            />
                            <Dataset
                                title="Dataset 2"
                                values={[66, 100, 30, 156]}
                                backgroundColor="#01b6f5"
                                borderColor="#01b6f5"
                            />
                        </Chart>
                    </div>
                    <div style={{ backgroundColor: "#FF6C40" }}>
                        <div style={{ marginLeft: 21, paddingRight: 80, marginTop: 21 }}>
                            <Typography style={{ fontSize: 27, fontWeight: 300, color: "#ffffff", }} noWrap>17 Sep</Typography>
                        </div>
                        <CounterRevenue />
                        <CounterQuote />
                    </div>
                </div>
            </Card>
        </div>
    )
}
