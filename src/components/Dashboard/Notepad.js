import { Card, CardActionArea, makeStyles } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';

const styles = makeStyles((theme) => ({

    card: {
        borderRadius: 15,
        width: 425,
        height: 385
    },
    heading: {
        color: 'rgba(89,54,54,1)',
        fontSize: 30,
        fontWeight: 100,
        marginTop: 29,
        marginLeft: 29,
        marginBottom: 50
    },
    notes: {
        marginLeft: 28,
        marginTop: 30,
        marginBottom: 30
    },
    notes_title: {
        fontSize: 20,
        fontWeight: 500
    },
    notes_desc: {
        fontSize: 20,
        color: "#a0a0a0",
        marginLeft: 5
    }

}));


export default function Notepad() {
    const history = useHistory();
    const style = styles()

    const cardClickHandler = (id) => {
        history.push(`/notepad`);
    };


    return (
        <div>
            <CardActionArea onClick={() => cardClickHandler()}>
                <Card className={style.card} elevation="0">
                    <div className={style.heading}>
                        Notepad
                </div>
                    <div className={style.notes}>
                        <span className={style.notes_title}>
                            Title
                    </span>
                        <span className={style.notes_desc}>
                            Lorem ipsum dolor sit am...
                    </span>
                    </div>
                    <div className={style.notes}>
                        <span className={style.notes_title}>
                            Title
                    </span>
                        <span className={style.notes_desc}>
                            Lorem ipsum dolor sit am...
                    </span>
                    </div>
                    <div className={style.notes}>
                        <span className={style.notes_title}>
                            Title
                    </span>
                        <span className={style.notes_desc}>
                            Lorem ipsum dolor sit am...
                    </span>
                    </div>
                    <div className={style.notes}>
                        <span className={style.notes_title}>
                            Title
                    </span>
                        <span className={style.notes_desc}>
                            Lorem ipsum dolor sit am...
                    </span>
                    </div>
                    <div className={style.notes}>
                        <span className={style.notes_title}>
                            Title
                    </span>
                        <span className={style.notes_desc}>
                            Lorem ipsum dolor sit am...
                    </span>
                    </div>
                </Card>
            </CardActionArea>

        </div>
    )
}
