import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FakeData from "../FakeData/FakeData";
import OnlyTemplate from './OnlyTemplate';

const Template = () => {
    const { imgId } = useParams();

    if (imgId !== undefined) {
        var templateData = FakeData.find((data) => data.id == imgId);
    }
    console.log(templateData);

    return (
        <div>
            <div className="diy-h3 py-4">
                <h3 className="container default-color">DIY</h3>
            </div>
            <div className="d-flex container mt-4">
                <div className="border border-2 rounded m-2 text-center  d-flex justify-content-center align-items-center main-diy-left">
                    {imgId ?
                        <div className="main-diy-left d-flex justify-content-center align-items-center">
                            <img width="350px" src={templateData.img} alt="" />
                        </div>
                        :
                        <div className="">
                            <div>
                                <svg className="local-svg" xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112">
                                    <g id="layout_29" data-name="layout 29" transform="translate(-2 -2)">
                                        <path id="Path_9548" data-name="Path 9548" d="M3,92.6V14.2A11.2,11.2,0,0,1,14.2,3H53.4V103.8H14.2A11.2,11.2,0,0,1,3,92.6Z" transform="translate(4.6 4.6)" fill="#dadde2" />
                                        <path id="Path_9549" data-name="Path 9549" d="M12,3H51.2A11.2,11.2,0,0,1,62.4,14.2V92.6a11.2,11.2,0,0,1-11.2,11.2H12Z" transform="translate(46 4.6)" fill="#56ccf2" />
                                        <path id="Path_9550" data-name="Path 9550" d="M2,18.8V97.2A16.8,16.8,0,0,0,18.8,114H97.2A16.8,16.8,0,0,0,114,97.2V18.8A16.8,16.8,0,0,0,97.2,2H18.8A16.8,16.8,0,0,0,2,18.8ZM102.8,52.4H63.6V13.2H97.2a5.6,5.6,0,0,1,5.6,5.6ZM63.6,102.8V63.6h39.2V97.2a5.6,5.6,0,0,1-5.6,5.6Zm-50.4-84a5.6,5.6,0,0,1,5.6-5.6H52.4v89.6H18.8a5.6,5.6,0,0,1-5.6-5.6Z" transform="translate(0 0)" fill="#003459" />
                                    </g>
                                </svg>

                                <h3 className="fw-bold my-2">Choose Your Template</h3>

                                <div className="my-5">
                                    <Link className="link-class" to="/imageMap">Template</Link>
                                </div>
                            </div>
                        </div>


                    }

                </div>
                <div className="container border border-2 rounded m-2 main-diy-right">
                    <div className="d-flex align-items-center">
                        <h5>Change Template</h5>
                        <Link className="link-class" to="/imageMap">Template</Link>
                    </div>
                    <div>
                        <div className="d-flex">
                            <div>
                                <label className="fw-bold" for="font">Font</label>
                                <br />
                                <select className="option font-option" id="font">
                                    <option value="Open Sans">| Open Sans</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div>
                                <label className="fw-bold" for="size">Size</label>
                                <br />
                                <select className="option size-option" id="size">
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="39" viewBox="0 0 43 39">
                                    <g id="Group_174" data-name="Group 174" transform="translate(-1108.002 -442)">
                                        <g id="Rectangle_68" data-name="Rectangle 68" transform="translate(1108.002 442)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.2">
                                            <rect width="43" height="39" rx="7" stroke="none" />
                                            <rect x="0.5" y="0.5" width="42" height="38" rx="6.5" fill="none" />
                                        </g>
                                        <text id="B" transform="translate(1120.002 472)" font-size="28" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">B</tspan></text>
                                    </g>
                                </svg>



                            </div>
                            <div className="m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="40" viewBox="0 0 43 40">
                                    <g id="Group_159" data-name="Group 159" transform="translate(-1108.002 -441)">
                                        <g id="Rectangle_68" data-name="Rectangle 68" transform="translate(1108.002 442)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.2">
                                            <rect width="43" height="39" rx="7" stroke="none" />
                                            <rect x="0.5" y="0.5" width="42" height="38" rx="6.5" fill="none" />
                                        </g>
                                        <text id="I" transform="translate(1125.002 471)" font-size="28" font-family="OpenSans-Italic, Open Sans" font-style="italic"><tspan x="0" y="0">I</tspan></text>
                                    </g>
                                </svg>
                            </div>
                            <div className="m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="40" viewBox="0 0 43 40">
                                    <g id="Group_160" data-name="Group 160" transform="translate(-1146 -441)">
                                        <g id="Rectangle_69" data-name="Rectangle 69" transform="translate(1146 442)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.2">
                                            <rect width="43" height="39" rx="7" stroke="none" />
                                            <rect x="0.5" y="0.5" width="42" height="38" rx="6.5" fill="none" />
                                        </g>
                                        <text id="U" transform="translate(1157 472)" font-size="29" font-family="OpenSans-Bold, Open Sans" font-weight="700"><tspan x="0" y="0">U</tspan></text>
                                    </g>
                                </svg>
                            </div>
                            <div className="m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40">
                                    <g id="Group_161" data-name="Group 161" transform="translate(-1185 -442)">
                                        <g id="Rectangle_70" data-name="Rectangle 70" transform="translate(1185 442)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.2">
                                            <rect width="44" height="40" rx="7" stroke="none" />
                                            <rect x="0.5" y="0.5" width="43" height="39" rx="6.5" fill="none" />
                                        </g>
                                        <path id="Path_9540" data-name="Path 9540" d="M30.488,23.334H2.025a1.525,1.525,0,1,0,0,3.05H30.488a1.525,1.525,0,1,0,0-3.05ZM2.32,17.539a1.525,1.525,0,1,0,0,3.05H24.685a1.525,1.525,0,1,0,0-3.05Zm-.3-2.746H30.488a1.525,1.525,0,1,0,0-3.05H2.025a1.525,1.525,0,1,0,0,3.05ZM2.025,9h22.66a1.525,1.525,0,1,0,0-3.05H2.025a1.525,1.525,0,1,0,0,3.05Z" transform="translate(1190.125 446.19)" />
                                    </g>
                                </svg>

                            </div>
                            <div className="m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40">
                                    <g id="Group_162" data-name="Group 162" transform="translate(-1223 -442)">
                                        <g id="Rectangle_71" data-name="Rectangle 71" transform="translate(1223 442)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.2">
                                            <rect width="44" height="40" rx="7" stroke="none" />
                                            <rect x="0.5" y="0.5" width="43" height="39" rx="6.5" fill="none" />
                                        </g>
                                        <path id="Path_9542" data-name="Path 9542" d="M9.46,22.919H35.732a1.46,1.46,0,0,0,0-2.919H9.46a1.46,1.46,0,1,0,0,2.919Zm2.919,2.919a1.46,1.46,0,1,0,0,2.919H32.813a1.46,1.46,0,0,0,0-2.919Zm23.353,5.838H9.46a1.46,1.46,0,1,0,0,2.919H35.732a1.46,1.46,0,1,0,0-2.919Zm-2.919,5.838H12.379a1.46,1.46,0,1,0,0,2.919H32.813a1.46,1.46,0,1,0,0-2.919Z" transform="translate(1222.031 432.14)" />
                                    </g>
                                </svg>

                            </div>
                            <div className="m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40">
                                    <g id="Group_163" data-name="Group 163" transform="translate(-1261 -442)">
                                        <g id="Rectangle_72" data-name="Rectangle 72" transform="translate(1261 442)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.2">
                                            <rect width="44" height="40" rx="7" stroke="none" />
                                            <rect x="0.5" y="0.5" width="43" height="39" rx="6.5" fill="none" />
                                        </g>
                                        <path id="Path_9541" data-name="Path 9541" d="M2.03,9.009H30.591a1.53,1.53,0,0,0,0-3.06H2.03a1.53,1.53,0,1,0,0,3.06Zm28.265,2.754H7.853a1.53,1.53,0,0,0,0,3.06H30.295a1.53,1.53,0,0,0,0-3.06Zm.3,5.815H2.03a1.53,1.53,0,1,0,0,3.06H30.591a1.53,1.53,0,0,0,0-3.06Zm0,5.814H7.853a1.53,1.53,0,1,0,0,3.06H30.591a1.53,1.53,0,0,0,0-3.06Z" transform="translate(1266.652 446.19)" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <h6 className="fw-bold">Pictograms</h6>
                            <p className="pictograms-text"> (Drag the Pictograms)</p>
                        </div>
                        <div className="d-flex">
                            <button type="button" className=" btn-class ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35.302" height="24.827" viewBox="0 0 35.302 24.827">
                                    <path id="road" d="M20.929,14.353v-.078l-.466-6.207a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H16.2a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.437l-.466,6.207v.078a.445.445,0,0,0,.155.388.593.593,0,0,0,.407.155h4.733a.593.593,0,0,0,.407-.155.445.445,0,0,0,.155-.388Zm14.722,9.058q0,1.416-.892,1.416H21.1a.567.567,0,0,0,.427-.184.544.544,0,0,0,.155-.436L21.3,19.241a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H15.362a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.436l-.388,4.966a.549.549,0,0,0,.155.436.565.565,0,0,0,.427.184H1.241q-.892,0-.892-1.416a5.846,5.846,0,0,1,.5-2.25L8.942.912a1.583,1.583,0,0,1,.5-.64A1.188,1.188,0,0,1,10.183,0h6.575a.629.629,0,0,0-.446.184A.653.653,0,0,0,16.1.621l-.291,3.724a.546.546,0,0,0,.155.446.584.584,0,0,0,.427.175h3.22a.581.581,0,0,0,.427-.175.543.543,0,0,0,.155-.446L19.9.621a.653.653,0,0,0-.213-.436A.634.634,0,0,0,19.241,0h6.575a1.181,1.181,0,0,1,.737.272,1.592,1.592,0,0,1,.5.64l8.088,20.25a5.846,5.846,0,0,1,.5,2.25Z" transform="translate(-0.349)" fill="#56ccf2" />
                                </svg>
                                <p className="">Road</p>
                            </button>
                            <button type="button" className="btn-class ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.331" height="26.43" viewBox="0 0 20.331 26.43">
                                    <path id="md-flame" d="M25.634,14.432l-.013.66c-.051.743-.5,2.757-1.4,3.474a8.887,8.887,0,0,0,.648-5.253C23.621,7.121,18.914,4.491,12.911,3.5l-1.092-.14c2.509,3,3.564,5.19,3.157,7.419a7.6,7.6,0,0,1-.889,2.007,9.752,9.752,0,0,0,.127-1.823A3.37,3.37,0,0,0,13.071,8.45a4.177,4.177,0,0,1-.578,3.03c-1.569,2.68-5.425,3.671-5.742,8.625v.241a9.034,9.034,0,0,0,4.363,7.94,5.505,5.505,0,0,1-.362-3.824,7.342,7.342,0,0,0,1.582,3.29,4.445,4.445,0,0,0,2.1,1.582,8.381,8.381,0,0,0,3.043.457c3.544,0,5.806-1.15,7.565-3.208s2.039-4.319,2.039-6.758a9.473,9.473,0,0,0-1.448-5.393Z" transform="translate(-6.751 -3.361)" fill="#56ccf2" />
                                </svg>

                                <p>Flammable </p>

                            </button>
                        </div>
                        <div className="d-flex">
                            <button type="button" className="btn-class">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.827" height="24.827" viewBox="0 0 24.827 24.827">
                                    <path id="emergency" d="M21.738,24.826H3.118a2.992,2.992,0,0,1-2.194-.909,2.984,2.984,0,0,1-.908-2.194V3.1A2.992,2.992,0,0,1,.924.909,2.987,2.987,0,0,1,3.119,0h18.62a2.992,2.992,0,0,1,2.194.909A2.987,2.987,0,0,1,24.842,3.1v18.62a3.1,3.1,0,0,1-3.1,3.1Zm0-13.965A1.532,1.532,0,0,0,20.186,9.31H15.531V4.655A1.532,1.532,0,0,0,13.98,3.1h-3.1A1.532,1.532,0,0,0,9.324,4.655V9.309H4.67a1.51,1.51,0,0,0-1.091.449,1.48,1.48,0,0,0-.46,1.1v3.1a1.48,1.48,0,0,0,.46,1.1,1.51,1.51,0,0,0,1.091.449H9.324v4.655a1.48,1.48,0,0,0,.46,1.1,1.51,1.51,0,0,0,1.091.449h3.1a1.532,1.532,0,0,0,1.552-1.552V15.516h4.655a1.532,1.532,0,0,0,1.552-1.552v-3.1Z" transform="translate(-0.015)" fill="#56ccf2" />
                                </svg>
                                <p>Emergency</p>
                            </button>
                            <button type="button" className="btn-class">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.851" height="24.827" viewBox="0 0 24.851 24.827">
                                    <path id="radioactive" d="M12.425,24.827A12.189,12.189,0,0,1,7.6,23.844,12.158,12.158,0,0,1,.983,17.231a12.326,12.326,0,0,1,0-9.647A12.189,12.189,0,0,1,7.6.983a12.355,12.355,0,0,1,9.659,0,12.189,12.189,0,0,1,6.613,6.6,12.326,12.326,0,0,1,0,9.647,12.158,12.158,0,0,1-6.613,6.613,12.221,12.221,0,0,1-4.829.983Zm0-3.106V15.508a2.97,2.97,0,0,1-1.529-.413A3.139,3.139,0,0,1,9.78,14l-5.339,3.2A9.233,9.233,0,0,0,7.8,20.495,9.08,9.08,0,0,0,12.425,21.72Zm0-18.638A9.019,9.019,0,0,0,7.8,4.32a9.327,9.327,0,0,0-3.361,3.3l5.339,3.2A3.076,3.076,0,0,1,10.9,9.708a2.977,2.977,0,0,1,1.529-.413Zm-.012,7.766a1.466,1.466,0,0,0-1.092.461,1.527,1.527,0,0,0-.449,1.1,1.532,1.532,0,0,0,1.541,1.541,1.532,1.532,0,0,0,1.1-.449,1.465,1.465,0,0,0,.461-1.092,1.574,1.574,0,0,0-1.566-1.566Zm8-3.228-5.339,3.2a2.953,2.953,0,0,1,.024,3.131l5.388,3.106a9.231,9.231,0,0,0-.073-9.441Z" fill="#56ccf2" />
                                </svg>
                                <p>Radiation</p>
                            </button>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="pictograms-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="157" height="142" viewBox="0 0 157 142">
                                    <g id="Group_155" data-name="Group 155" transform="translate(0 -4)">
                                        <g id="Rectangle_67" data-name="Rectangle 67" transform="translate(0 4)" fill="#fff" stroke="#003459" stroke-width="2">
                                            <rect width="157" height="142" rx="7" stroke="none" />
                                            <rect x="1" y="1" width="155" height="140" rx="6" fill="none" />
                                        </g>
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="115.79" height="106.655" viewBox="0 0 115.79 106.655">
                                            <g id="bxs-radiation" transform="translate(-3.03 -5.446)">
                                                <path id="Path_9544" data-name="Path 9544" d="M48.852,33.9,32.645,6.877a2.911,2.911,0,0,0-4.088-.964A57.958,57.958,0,0,0,3.033,50.064a2.934,2.934,0,0,0,2.888,3.066l31.477.523A23.469,23.469,0,0,1,48.856,33.9ZM95.933,7.713a2.926,2.926,0,0,0-4.231.875L75.483,35.633A23.4,23.4,0,0,1,84.46,53.7l31.462-.523a2.942,2.942,0,0,0,2.9-3.077A57.981,57.981,0,0,0,95.929,7.713ZM72.317,74.55a22.787,22.787,0,0,1-22.791,0l-15.34,27.61a2.9,2.9,0,0,0,1.2,4.018,57.988,57.988,0,0,0,51.068,0,2.9,2.9,0,0,0,1.2-4.018L72.317,74.547Z" transform="translate(0 0)" />
                                                <path id="Path_9545" data-name="Path 9545" d="M48.337,30.919A17.419,17.419,0,1,1,30.919,13.5,17.419,17.419,0,0,1,48.337,30.919Z" transform="translate(30.057 23.12)" />
                                            </g>
                                        </svg>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="157" height="142" viewBox="0 0 157 142">
                                    <g id="Group_155" data-name="Group 155" transform="translate(0 -4)">
                                        <g id="Rectangle_67" data-name="Rectangle 67" transform="translate(0 4)" fill="#fff" stroke="#003459" stroke-width="2">
                                            <rect width="157" height="142" rx="7" stroke="none" />
                                            <rect x="1" y="1" width="155" height="140" rx="6" fill="none" />
                                        </g>
                                        <g id="Group_169" data-name="Group 169" transform="translate(25.09 21.09)">
                                            <circle id="Ellipse_6" data-name="Ellipse 6" cx="52.225" cy="52.225" r="52.225" transform="translate(1.685 1.685)" fill="#fedc55" />
                                            <circle id="Ellipse_7" data-name="Ellipse 7" cx="8.423" cy="8.423" r="8.423" transform="translate(45.487 45.487)" fill="#57565c" />
                                            <path id="Path_9546" data-name="Path 9546" d="M53.168,54.725a14.7,14.7,0,0,1-15.1,0l-13.511,23.4a42.117,42.117,0,0,0,42.117,0ZM82.091,20.59A42.117,42.117,0,0,0,66.676,5.175l-13.508,23.4A15.1,15.1,0,0,1,60.78,41.649H87.735a42.116,42.116,0,0,0-5.643-21.057ZM38.067,28.572,24.559,5.175A42.117,42.117,0,0,0,3.5,41.649H30.455a15.1,15.1,0,0,1,7.611-13.077Z" transform="translate(8.293 12.262)" fill="#57565c" />
                                            <path id="Path_9547" data-name="Path 9547" d="M43.8,53.91A10.108,10.108,0,1,0,53.91,43.8,10.108,10.108,0,0,0,43.8,53.91ZM53.91,47.171a6.739,6.739,0,1,1-6.739,6.739A6.739,6.739,0,0,1,53.91,47.171ZM40.433,53.91a13.329,13.329,0,0,1,6.772-11.618,1.685,1.685,0,0,0,.617-2.3L34.31,16.594a1.685,1.685,0,0,0-2.3-.617,43.8,43.8,0,0,0-21.9,37.933,1.685,1.685,0,0,0,1.685,1.685H38.748A1.685,1.685,0,0,0,40.433,53.91ZM13.511,52.225A40.433,40.433,0,0,1,32.252,19.768L44.1,40.291a16.908,16.908,0,0,0-6.951,11.934ZM62.92,66.144a1.685,1.685,0,0,0-1.011-.785,1.651,1.651,0,0,0-1.277.168,13.073,13.073,0,0,1-13.41,0,1.651,1.651,0,0,0-1.277-.168,1.685,1.685,0,0,0-1.011.785l-13.542,23.4a1.685,1.685,0,0,0,.617,2.3,43.8,43.8,0,0,0,43.8,0,1.685,1.685,0,0,0,.617-2.3ZM35.17,89.73,47.016,69.214a16.3,16.3,0,0,0,13.791,0L72.654,89.73a41.063,41.063,0,0,1-37.484.007ZM53.91,0a53.91,53.91,0,1,0,53.91,53.91A53.91,53.91,0,0,0,53.91,0Zm0,104.451A50.541,50.541,0,1,1,104.451,53.91,50.541,50.541,0,0,1,53.91,104.451ZM91.843,32.009A43.842,43.842,0,0,0,75.811,15.978a1.685,1.685,0,0,0-2.3.617L60,39.991a1.685,1.685,0,0,0,.617,2.3A13.329,13.329,0,0,1,67.388,53.91a1.685,1.685,0,0,0,1.685,1.685H96.027a1.685,1.685,0,0,0,1.685-1.685,43.863,43.863,0,0,0-5.869-21.9ZM70.669,52.225a16.908,16.908,0,0,0-6.951-11.934l11.85-20.523A40.433,40.433,0,0,1,94.309,52.225Z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 order-link place-order-link">
                <Link className="link-class" to="#">Place order</Link>
            </div>
            <div>
                <OnlyTemplate />
            </div>
        </div>
    );
};

export default Template;