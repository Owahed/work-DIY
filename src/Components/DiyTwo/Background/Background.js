import React, { useState } from "react";
import { CirclePicker, ChromePicker } from "react-color";
import "./Background.css";

const Background = () => {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setColorPicker] = useState(false);

  return (
    <div>
      <div className="mt-5 pb-2">
        <h4 className="pictograms-h4">UPLOAD IMAGES</h4>
      </div>
      <div>
        <div className="row">
          <div className="col">
            <button
              className="color-picker-btn"
              onClick={() =>
                setColorPicker((showColorPicker) => !showColorPicker)
              }
            >
              {showColorPicker ? (
                "X"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.773"
                  height="27.773"
                  viewBox="0 0 27.773 27.773"
                >
                  <g
                    id="icons_Q2"
                    data-name="icons Q2"
                    transform="translate(-4 -4)"
                  >
                    <path
                      id="Path_9581"
                      data-name="Path 9581"
                      d="M30.246,6.777H16.29A4.3,4.3,0,0,0,12.332,4,4.166,4.166,0,0,0,8.444,6.777H5.528A1.458,1.458,0,0,0,4,8.166,1.458,1.458,0,0,0,5.528,9.555H8.444a4.166,4.166,0,0,0,3.888,2.777A4.3,4.3,0,0,0,16.29,9.555H30.246a1.458,1.458,0,0,0,1.528-1.389,1.458,1.458,0,0,0-1.528-1.389ZM12.332,9.555a1.389,1.389,0,1,1,1.389-1.389A1.389,1.389,0,0,1,12.332,9.555Z"
                      fill="#292929"
                    />
                    <path
                      id="Path_9582"
                      data-name="Path 9582"
                      d="M30.307,20.777H27.46A4.3,4.3,0,0,0,23.5,18a4.166,4.166,0,0,0-3.888,2.777H5.589a1.389,1.389,0,0,0,0,2.777H19.614A4.166,4.166,0,0,0,23.5,26.332a4.3,4.3,0,0,0,3.958-2.777h2.847a1.389,1.389,0,1,0,0-2.777Zm-6.8,2.777a1.389,1.389,0,1,1,1.389-1.389A1.389,1.389,0,0,1,23.5,23.555Z"
                      transform="translate(-0.061 -4.279)"
                      fill="#292929"
                    />
                    <path
                      id="Path_9583"
                      data-name="Path 9583"
                      d="M30.307,34.777H18.434A4.3,4.3,0,0,0,14.476,32a4.166,4.166,0,0,0-3.888,2.777h-5a1.389,1.389,0,0,0,0,2.777h5a4.166,4.166,0,0,0,3.888,2.777,4.3,4.3,0,0,0,3.958-2.777H30.307a1.389,1.389,0,1,0,0-2.777ZM14.476,37.555a1.389,1.389,0,1,1,1.389-1.389A1.389,1.389,0,0,1,14.476,37.555Z"
                      transform="translate(-0.061 -8.559)"
                      fill="#292929"
                    />
                  </g>
                </svg>
              )}
            </button>
            {showColorPicker && (
              <ChromePicker
                className="color-pic"
                color={color}
                onChange={(updateColor) => setColor(updateColor.hex)}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CirclePicker
              color={color}
              onChangeComplete={(updateColor2) => setColor(updateColor2.hex)}
            />
          </div>
        </div>
        <h2 className="text-white">You color{color}</h2>
      </div>
    </div>
  );
};

export default Background;
