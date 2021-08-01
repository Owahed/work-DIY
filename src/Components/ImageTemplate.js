import React from 'react';
import { useHistory } from 'react-router-dom';


const ImageTemplate = ({ img }) => {
    const allImg = img.img;
    const imgId = img.id;

    // const history = useHistory();
    const handelClick = (imgId) => {
        // history.push(`/home/${imgId}`)
    }
    return (
        <div className="col-6 ">
            <div className="image-template ">
                <div >
                <a  style={{ cursor: 'pointer' }} onClick={() => handelClick(imgId)}>
                    <img width="123px" height="123px" src={allImg} alt="" />
                </a>
                </div>
            </div>
        </div>
    );
};


export default ImageTemplate;