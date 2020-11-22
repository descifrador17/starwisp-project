import { Card, makeStyles } from '@material-ui/core';
import { Chart, Dataset } from 'react-rainbow-components';
import React from 'react'

const styles = makeStyles((theme) => ({

    card: {
        borderRadius: 50,
        width: 305,
        height: 234,
        boxShadow: "-5px 8px 10px #727CCD"
    }
}));


export default function GraphMonth() {

    const style = styles()

    return (
        <div>
            <Card className={style.card} elevation="0">
                <Chart
                    labels={['27', '28', '1', '2', '3', '4']}
                    type="line"
                    maintainAspectRatio="false"
                    style={{ marginTop: 40 }}
                >
                    <Dataset
                        title="Ratings"
                        values={[100, 500, 128, 1250, 456, 870]}
                        backgroundColor="#00FF11"
                        borderColor="#34A853"
                        fill="true"
                    />
                </Chart>
            </Card>
        </div>
    )
}
