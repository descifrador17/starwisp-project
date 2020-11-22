import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/Notepad/CreatePost";
import OldPosts from "../../components/Notepad/OldPosts";
import RecentPost from "../../components/Notepad/RecentPost";

const styles = makeStyles((theme) => ({
    search: {
        width: 836,
        height: 36,
        background: "#E2E2E2",
        borderRadius: 12
    }
}));

const NotepadContainer = (props) => {

    const classes = styles();
    const notesData = useSelector((state) => state.notes);

    const showRecentPost = () => {
        if (notesData.state != null) {
            return (notesData.state.slice(-1)).map(note => <RecentPost data={note} />)
        }
    }

    const showOldPost = () => {
        if (notesData.state != null) {
            return notesData.state.reverse().slice(1).map(note => <OldPosts data={note} />)
        }
    }

    return (
        <div>
            <CreatePost />
            {showRecentPost()}
            {showOldPost()}
        </div>
    );
};

NotepadContainer.propTypes = {};

export default NotepadContainer;
