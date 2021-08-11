import React, { useState } from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import './MainBody.css'

const MainBody = ({ selectedPictogramsImg }) => {
    const [task, setTask] = useState("WRITE MANDATORY INSTRUCTION HERE");
    console.log(task)

    return (
        <div className="mainBody-container">
            <div className="main-caution">
                <div className="templates-header">
                    <h1>CAUTION</h1>
                </div>
                <div className="templates-body">
                    <img src={selectedPictogramsImg.img} alt="" />
                </div>
                <div className="templates-footer">
                    <React.Fragment>
                        <h4><EditTextarea
                            name="textbox1"
                            defaultValue={task}
                            // value={task}
        onChange={e => setTask(e.target.value)}
                        /></h4>
                    </React.Fragment>

                    <h5>WRITE CONSEQUENCES OF NOT FOLLOWING</h5>

                    <h6>WRITE PENALTY PROVISIONS</h6>
                </div>
            </div>
        </div>
    );
};

export default MainBody;