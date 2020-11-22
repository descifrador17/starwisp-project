import { Card } from '@material-ui/core'
import React from 'react'
import ListViewCard from './ListViewCard'


export default function NotificationsCard() {
    return (
        <div>
            <Card style={{ borderRadius: 15, marginTop: 15, marginLeft: 15, width: 303, height: 599, background: "radial-gradient(#ffffff, #f3f3f3)" }} elevation="0">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <ListViewCard />
                        <hr style={{ marginLeft: 8, marginRight: 8, color: "rgba(236,236,236,1)" }} />
                        <ListViewCard />
                        <hr style={{ marginLeft: 8, marginRight: 8, color: "rgba(236,236,236,1)" }} />
                        <ListViewCard />
                        <hr style={{ marginLeft: 8, marginRight: 8, color: "rgba(236,236,236,1)" }} />
                        <ListViewCard />
                        <hr style={{ marginLeft: 8, marginRight: 8, color: "rgba(236,236,236,1)" }} />
                        <ListViewCard />
                    </div>
                    <div style={{ marginTop: 34, paddingTop: 2, paddingLeft: 24, fontSize: 12, marginLeft: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: "#eaeaea", width: 71, height: 21 }}>
                        View all
                    </div>
                </div>
            </Card>
        </div>
    )
}
