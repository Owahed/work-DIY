import React from 'react';
import { Link } from 'react-router-dom';
import FakeData from '../FakeData/FakeData'
import ImageTemplate from './ImageTemplate';
import OnlyTemplate from './OnlyTemplate';

const ImageMap = () => {
    return (
        <div>

            {/* <div className="diy-h3 py-4">
                <h3 className="container">DIY</h3>

            </div>
            <div className="container">
                <div className="d-flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="331" height="75" viewBox="0 0 331 75">
                            <defs>
                                <filter id="Ellipse_3" x="0" y="0" width="75" height="75" filterUnits="userSpaceOnUse">
                                    <feOffset dx="3" dy="3" input="SourceAlpha" />
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feFlood flood-opacity="0.161" />
                                    <feComposite operator="in" in2="blur" />
                                    <feComposite in="SourceGraphic" />
                                </filter>
                            </defs>
                            <g id="Group_147" data-name="Group 147" transform="translate(-130 -250)">
                                <g transform="matrix(1, 0, 0, 1, 130, 250)" filter="url(#Ellipse_3)">
                                    <circle id="Ellipse_3-2" data-name="Ellipse 3" cx="28.5" cy="28.5" r="28.5" transform="translate(6 6)" fill="#003459" />
                                </g>
                                <text id="Title" transform="translate(204 293)" font-size="23" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0"><Link>Choose your Template</Link></tspan></text>
                                <path id="Path_9529" data-name="Path 9529" d="M8.726,20.832a1.345,1.345,0,1,0,1.345,1.345A1.345,1.345,0,0,0,8.726,20.832Zm16.223-5.381L26.6,13.8a4.035,4.035,0,0,0,0-5.7L22.8,4.3a4.035,4.035,0,0,0-5.7,0L15.452,5.955A4.035,4.035,0,0,0,11.416,2H6.035A4.035,4.035,0,0,0,2,6.035V24.868A4.035,4.035,0,0,0,6.035,28.9H24.868A4.035,4.035,0,0,0,28.9,24.868V19.487a4.036,4.036,0,0,0-3.956-4.035ZM12.761,24.868a1.345,1.345,0,0,1-1.345,1.345H6.035A1.345,1.345,0,0,1,4.69,24.868V6.035A1.345,1.345,0,0,1,6.035,4.69h5.381a1.345,1.345,0,0,1,1.345,1.345Zm2.69-15.12L19,6.2a1.345,1.345,0,0,1,1.9,0l3.807,3.874a1.345,1.345,0,0,1,0,1.9l-3.874,3.874h0l-5.381,5.313Zm10.761,15.12a1.345,1.345,0,0,1-1.345,1.345H15.209a4.2,4.2,0,0,0,.229-1.238l6.833-6.833h2.6a1.345,1.345,0,0,1,1.345,1.345Z" transform="translate(148.719 268.639)" fill="#56ccf2" />
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.973" height="19.946" viewBox="0 0 10.973 19.946">
                            <path id="Path_9535" data-name="Path 9535" d="M17.118,0,8.559,8.559,0,0" transform="translate(1.414 18.532) rotate(-90)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                        </svg>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
                            <defs>
                                <filter id="Ellipse_4" x="0" y="0" width="75" height="75" filterUnits="userSpaceOnUse">
                                    <feOffset dx="3" dy="3" input="SourceAlpha" />
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feFlood flood-opacity="0.161" />
                                    <feComposite operator="in" in2="blur" />
                                    <feComposite in="SourceGraphic" />
                                </filter>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_4)">
                                <circle id="Ellipse_4-2" data-name="Ellipse 4" cx="28.5" cy="28.5" r="28.5" transform="translate(6 6)" fill="#f4f3f4" />
                            </g>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30.967" height="30.97" viewBox="0 0 30.967 30.97">
                                <path id="Path_9530" data-name="Path 9530" d="M24.928,6.631h1.408V8.039a1.408,1.408,0,1,0,2.815,0V6.631h1.408a1.408,1.408,0,1,0,0-2.815H29.151V2.409a1.408,1.408,0,0,0-2.815,0V3.816H24.928a1.408,1.408,0,0,0,0,2.815ZM17.187,8.039H15.779a4.223,4.223,0,0,0-4.223,4.223v8.445a4.223,4.223,0,0,0,4.223,4.223h1.408a4.223,4.223,0,0,0,4.223-4.223V12.261a4.223,4.223,0,0,0-4.223-4.223Zm1.408,12.668a1.408,1.408,0,0,1-1.408,1.408H15.779a1.408,1.408,0,0,1-1.408-1.408V12.261a1.408,1.408,0,0,1,1.408-1.408h1.408a1.408,1.408,0,0,1,1.408,1.408ZM30,12.261a1.408,1.408,0,0,0-1.1,1.661A12.668,12.668,0,1,1,19.045,4.07a1.435,1.435,0,0,0,.563-2.815A15.2,15.2,0,0,0,16.483,1,15.483,15.483,0,1,0,31.966,16.484a15.2,15.2,0,0,0-.31-3.1A1.408,1.408,0,0,0,30,12.261Z" transform="translate(-1 -0.997)" fill="#56ccf2" />
                            </svg>

                        </svg>




                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-4" >
                    {
                        FakeData.map(img => <ImageTemplate img={img} />)
                    }
                </div>
            </div>
            <div className="my-4 place-order-link image-map-link order-link">
                <Link className="already-template-link " to="#">Already have a Template ?</Link>
                <Link className="link-class" to="#">Next</Link>
            </div>
            <div>
                <OnlyTemplate />
            </div> */}
        </div>
    );
};

export default ImageMap;