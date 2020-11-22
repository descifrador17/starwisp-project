import { Button, Card, IconButton, InputBase, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { createNote } from '../../actions/notesActions';
import { useDispatch, useSelector } from 'react-redux';

const styles = makeStyles((theme) => ({
    input: {
        width: 1032,
        height: 98,
        background: "#FAFAFA",
        borderRadius: 12,
        marginLeft: 25,
        marginTop: 20,
        paddingLeft: 20,
    },
    share_button: {
        marginRight: 30,
        width: 180,
        paddingLeft: 20,
        color: "#ffffff",
        borderRadius: 11,
        textTransform: "capitalize",
        fontSize: 20,
        fontWeight: 300,
        background: "linear-gradient(90deg, rgba(255,108,64,1) 70%, rgba(255,196,128,1) 70%)"
    },
    attach_button: {
        marginRight: 24,
        backgroundColor: "rgba(255,196,128,1)",
    },
    cancel_button: {
        color: "rgba(239,62,54,1)",
        fontSize: 17,
        marginLeft: 60
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 18,
        alignItems: "center"
    }

}));

const CreatePost = () => {

    const classes = styles();
    const [note, setNote] = useState('');
    const dispatch = useDispatch();
    const notesData = useSelector((state) => state.notes);
    const [allNotes, setNotes] = useState(notesData)


    const handleSubmit = (event) => {
        event.preventDefault();
        setNotes(currNotes => [...currNotes, note])
        dispatch(createNote(allNotes))
    }

    const handleChange = (msg) => {
        setNote(msg.target.value)
    }

    return (
        <div>
            <Card style={{ marginLeft: 60, marginTop: 30, width: 1083, height: 204, borderRadius: 15 }} elevation="3">
                <InputBase className={classes.input}
                    multiline
                    rowsMax="4"
                    placeholder="Share something with your class.."
                    variant="outlined"
                    size="small"
                    inputProps={{ 'aria-label': 'notes', 'type': 'text' }}
                    onChange={(msg) => handleChange(msg)}
                />
                <div className={classes.footer}>
                    <Button variant="text" className={classes.cancel_button}>
                        Cancel
                    </Button>
                    <div style={{ flexGrow: 1 }} />
                    <IconButton className={classes.attach_button} color="secondary">
                        <AttachFileIcon style={{ transform: "rotateY(0deg) rotate(45deg)" }} />
                    </IconButton>
                    <Button className={classes.share_button} onClick={handleSubmit}
                        endIcon={<ExpandMoreIcon style={{ marginLeft: 50, color: "#FF6C40" }} />}>
                        Share
                    </Button>
                </div>
            </Card>
        </div >
    )
}

export default CreatePost