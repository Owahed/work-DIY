import React, { useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "./MainBody.css";

const MainBody = ({ selectedPictogramsImg, imgState, selectedImg }) => {
  let { id, item } = selectedImg;
  console.log(id);

  return (
    <div>
      {item == "02" && (
        <div className="mainBody-container">
          <div className="main-caution">
            {id == "06" && (
              <div className="templates-header caution-bg-color">
                <h1 className="templates-header-h1">CAUTION</h1>
              </div>
            )}

            {id == "07" && (
              <div className="templates-header danger-bg-color">
                <h1 className="templates-header-h1">Danger</h1>
              </div>
            )}
            {id == "09" && (
              <div className="templates-header small-notice-bg-color">
                <h1 className="templates-header-h1">Notice</h1>
              </div>
            )}
            {id == "08" && (
              <div className="templates-header big-notice-bg-color">
                <h1 className="templates-header-h1 templates-header-bold">
                  Notice
                </h1>
              </div>
            )}
            {id == "10" && (
              <div className="templates-header warning-bg-color">
                <h1 className="templates-header-h1 ">Warning</h1>
              </div>
            )}
            <div className="templates-body">
              <img src={selectedPictogramsImg.img} alt="" />
              <img width="100px" src={imgState.file} alt="" />
            </div>
            <div className="templates-footer">
              <h5>WRITE CONSEQUENCES OF NOT FOLLOWING</h5>

              <h6>WRITE PENALTY PROVISIONS</h6>
            </div>
          </div>
        </div>
      )}
      {item == "01" && (
        <div className="main-caution-second">
          {id == "01" && (
            <div className="templates-header caution-bg-color">
              <h1 className="templates-header-h1">CAUTION</h1>
            </div>
          )}
          {id == "02" && (
            <div className="templates-header danger-bg-color">
              <h1 className="templates-header-h1">DANGER</h1>
            </div>
          )}
          {id == "03" && (
            <div className="templates-header small-notice-bg-color">
              <h1 className="templates-header-h1">Notice</h1>
            </div>
          )}
          {id == "04" && (
            <div className="templates-header big-notice-bg-color">
              <h1 className="templates-header-h1 templates-header-bold">
                Notice
              </h1>
            </div>
          )}
          {id == "05" && (
            <div className="templates-header warning-bg-color">
              <h1 className="templates-header-h1 ">Warning</h1>
            </div>
          )}
          <div className="d-flex">
            <div className="second-templates-body">
              <div>
                <img src={selectedPictogramsImg.img} alt="" />
                <img width="100px" src={imgState.file} alt="" />
              </div>
            </div>
            <div>
              <div className="templates-footer">
                <h5>WRITE CONSEQUENCES OF NOT FOLLOWING</h5>

                <h6>WRITE PENALTY PROVISIONS</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBody;
