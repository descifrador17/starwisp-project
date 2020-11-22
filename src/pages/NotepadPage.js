import React from "react";
import Navbars from "../containers/navbars/Navbars";
import NotepadContainer from "../containers/notepad/NotepadContainer";

const NotepadPage = () => {
    return (
        <div>
            <Navbars>
                <NotepadContainer />
            </Navbars>
        </div>
    );
};

export default NotepadPage;
