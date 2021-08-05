import React from 'react';

const Pictograms = () => {
    return (
        <div>
            <div className="mt-5">
                <h4 className="pictograms-h4">pictograms</h4>
                <div className="pictograms-button-group ">
                    <div className="d-flex flex-row-reverse">
                        <div className="pictograms-button-group-main mt-3">
                            <div className="d-flex">
                                <button type="button" className=" btn-class btn-road-signs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35.302" height="24.827" viewBox="0 0 35.302 24.827">
                                        <path id="road" d="M20.929,14.353v-.078l-.466-6.207a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H16.2a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.437l-.466,6.207v.078a.445.445,0,0,0,.155.388.593.593,0,0,0,.407.155h4.733a.593.593,0,0,0,.407-.155.445.445,0,0,0,.155-.388Zm14.722,9.058q0,1.416-.892,1.416H21.1a.567.567,0,0,0,.427-.184.544.544,0,0,0,.155-.436L21.3,19.241a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H15.362a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.436l-.388,4.966a.549.549,0,0,0,.155.436.565.565,0,0,0,.427.184H1.241q-.892,0-.892-1.416a5.846,5.846,0,0,1,.5-2.25L8.942.912a1.583,1.583,0,0,1,.5-.64A1.188,1.188,0,0,1,10.183,0h6.575a.629.629,0,0,0-.446.184A.653.653,0,0,0,16.1.621l-.291,3.724a.546.546,0,0,0,.155.446.584.584,0,0,0,.427.175h3.22a.581.581,0,0,0,.427-.175.543.543,0,0,0,.155-.446L19.9.621a.653.653,0,0,0-.213-.436A.634.634,0,0,0,19.241,0h6.575a1.181,1.181,0,0,1,.737.272,1.592,1.592,0,0,1,.5.64l8.088,20.25a5.846,5.846,0,0,1,.5,2.25Z" transform="translate(-0.349)" fill="#fff" />
                                    </svg>
                                    <p className="">Road Signs</p>
                                </button>
                                <button type="button" className="btn-class btn-flammable">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20.331" height="26.43" viewBox="0 0 20.331 26.43">
                                        <path id="md-flame" d="M25.634,14.432l-.013.66c-.051.743-.5,2.757-1.4,3.474a8.887,8.887,0,0,0,.648-5.253C23.621,7.121,18.914,4.491,12.911,3.5l-1.092-.14c2.509,3,3.564,5.19,3.157,7.419a7.6,7.6,0,0,1-.889,2.007,9.752,9.752,0,0,0,.127-1.823A3.37,3.37,0,0,0,13.071,8.45a4.177,4.177,0,0,1-.578,3.03c-1.569,2.68-5.425,3.671-5.742,8.625v.241a9.034,9.034,0,0,0,4.363,7.94,5.505,5.505,0,0,1-.362-3.824,7.342,7.342,0,0,0,1.582,3.29,4.445,4.445,0,0,0,2.1,1.582,8.381,8.381,0,0,0,3.043.457c3.544,0,5.806-1.15,7.565-3.208s2.039-4.319,2.039-6.758a9.473,9.473,0,0,0-1.448-5.393Z" transform="translate(-6.751 -3.361)" fill="#fff" />
                                    </svg>
                                    <p>Flammable </p>
                                </button>
                            </div>
                            <div className="d-flex">
                                <button type="button" className="btn-class btn-emergency">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.827" height="24.827" viewBox="0 0 24.827 24.827">
                                        <path id="emergency" d="M21.738,24.826H3.118a2.992,2.992,0,0,1-2.194-.909,2.984,2.984,0,0,1-.908-2.194V3.1A2.992,2.992,0,0,1,.924.909,2.987,2.987,0,0,1,3.119,0h18.62a2.992,2.992,0,0,1,2.194.909A2.987,2.987,0,0,1,24.842,3.1v18.62a3.1,3.1,0,0,1-3.1,3.1Zm0-13.965A1.532,1.532,0,0,0,20.186,9.31H15.531V4.655A1.532,1.532,0,0,0,13.98,3.1h-3.1A1.532,1.532,0,0,0,9.324,4.655V9.309H4.67a1.51,1.51,0,0,0-1.091.449,1.48,1.48,0,0,0-.46,1.1v3.1a1.48,1.48,0,0,0,.46,1.1,1.51,1.51,0,0,0,1.091.449H9.324v4.655a1.48,1.48,0,0,0,.46,1.1,1.51,1.51,0,0,0,1.091.449h3.1a1.532,1.532,0,0,0,1.552-1.552V15.516h4.655a1.532,1.532,0,0,0,1.552-1.552v-3.1Z" transform="translate(-0.015)" fill="#fff" />
                                    </svg>
                                    <p>Emergency</p>
                                </button>
                                <button type="button" className="btn-class btn-radiation">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.851" height="24.827" viewBox="0 0 24.851 24.827">
                                        <path id="radioactive" d="M12.425,24.827A12.189,12.189,0,0,1,7.6,23.844,12.158,12.158,0,0,1,.983,17.231a12.326,12.326,0,0,1,0-9.647A12.189,12.189,0,0,1,7.6.983a12.355,12.355,0,0,1,9.659,0,12.189,12.189,0,0,1,6.613,6.6,12.326,12.326,0,0,1,0,9.647,12.158,12.158,0,0,1-6.613,6.613,12.221,12.221,0,0,1-4.829.983Zm0-3.106V15.508a2.97,2.97,0,0,1-1.529-.413A3.139,3.139,0,0,1,9.78,14l-5.339,3.2A9.233,9.233,0,0,0,7.8,20.495,9.08,9.08,0,0,0,12.425,21.72Zm0-18.638A9.019,9.019,0,0,0,7.8,4.32a9.327,9.327,0,0,0-3.361,3.3l5.339,3.2A3.076,3.076,0,0,1,10.9,9.708a2.977,2.977,0,0,1,1.529-.413Zm-.012,7.766a1.466,1.466,0,0,0-1.092.461,1.527,1.527,0,0,0-.449,1.1,1.532,1.532,0,0,0,1.541,1.541,1.532,1.532,0,0,0,1.1-.449,1.465,1.465,0,0,0,.461-1.092,1.574,1.574,0,0,0-1.566-1.566Zm8-3.228-5.339,3.2a2.953,2.953,0,0,1,.024,3.131l5.388,3.106a9.231,9.231,0,0,0-.073-9.441Z" fill="#fff" />
                                    </svg>
                                    <p>Radiation</p>
                                </button>
                            </div>
                            <div className="d-flex">
                                <button type="button" className="btn-class btn-flammable-two">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20.331" height="26.43" viewBox="0 0 20.331 26.43">
                                        <path id="md-flame" d="M25.634,14.432l-.013.66c-.051.743-.5,2.757-1.4,3.474a8.887,8.887,0,0,0,.648-5.253C23.621,7.121,18.914,4.491,12.911,3.5l-1.092-.14c2.509,3,3.564,5.19,3.157,7.419a7.6,7.6,0,0,1-.889,2.007,9.752,9.752,0,0,0,.127-1.823A3.37,3.37,0,0,0,13.071,8.45a4.177,4.177,0,0,1-.578,3.03c-1.569,2.68-5.425,3.671-5.742,8.625v.241a9.034,9.034,0,0,0,4.363,7.94,5.505,5.505,0,0,1-.362-3.824,7.342,7.342,0,0,0,1.582,3.29,4.445,4.445,0,0,0,2.1,1.582,8.381,8.381,0,0,0,3.043.457c3.544,0,5.806-1.15,7.565-3.208s2.039-4.319,2.039-6.758a9.473,9.473,0,0,0-1.448-5.393Z" transform="translate(-6.751 -3.361)" fill="#fff" />
                                    </svg>
                                    <p>Flammable </p>
                                </button>
                                <button type="button" className=" btn-class btn-road-signs-two">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35.302" height="24.827" viewBox="0 0 35.302 24.827">
                                        <path id="road" d="M20.929,14.353v-.078l-.466-6.207a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H16.2a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.437l-.466,6.207v.078a.445.445,0,0,0,.155.388.593.593,0,0,0,.407.155h4.733a.593.593,0,0,0,.407-.155.445.445,0,0,0,.155-.388Zm14.722,9.058q0,1.416-.892,1.416H21.1a.567.567,0,0,0,.427-.184.544.544,0,0,0,.155-.436L21.3,19.241a.653.653,0,0,0-.213-.436.629.629,0,0,0-.446-.184H15.362a.629.629,0,0,0-.446.184.653.653,0,0,0-.213.436l-.388,4.966a.549.549,0,0,0,.155.436.565.565,0,0,0,.427.184H1.241q-.892,0-.892-1.416a5.846,5.846,0,0,1,.5-2.25L8.942.912a1.583,1.583,0,0,1,.5-.64A1.188,1.188,0,0,1,10.183,0h6.575a.629.629,0,0,0-.446.184A.653.653,0,0,0,16.1.621l-.291,3.724a.546.546,0,0,0,.155.446.584.584,0,0,0,.427.175h3.22a.581.581,0,0,0,.427-.175.543.543,0,0,0,.155-.446L19.9.621a.653.653,0,0,0-.213-.436A.634.634,0,0,0,19.241,0h6.575a1.181,1.181,0,0,1,.737.272,1.592,1.592,0,0,1,.5.64l8.088,20.25a5.846,5.846,0,0,1,.5,2.25Z" transform="translate(-0.349)" fill="#fff" />
                                    </svg>
                                    <p className="">Road Signs</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-icon">
                    <div className="row">
                        <div className="col-6">
                            <div className="pictograms-logo">
                                <svg id="bxs-radiation" xmlns="http://www.w3.org/2000/svg" width="102.21" height="94.146" viewBox="0 0 102.21 94.146">
                                    <path id="Path_9544" data-name="Path 9544" d="M43.478,30.562,29.172,6.709a2.569,2.569,0,0,0-3.608-.851A51.16,51.16,0,0,0,3.033,44.831a2.59,2.59,0,0,0,2.549,2.706L33.367,48A20.716,20.716,0,0,1,43.481,30.562ZM85.037,7.447A2.583,2.583,0,0,0,81.3,8.22L66.986,32.093a20.655,20.655,0,0,1,7.924,15.95l27.772-.461a2.6,2.6,0,0,0,2.556-2.716,51.181,51.181,0,0,0-20.2-37.418Zm-20.846,59a20.115,20.115,0,0,1-20.118,0L30.531,90.818a2.563,2.563,0,0,0,1.059,3.547,51.187,51.187,0,0,0,45.078,0,2.563,2.563,0,0,0,1.059-3.547L64.191,66.442Z" transform="translate(-3.03 -5.446)" />
                                    <path id="Path_9545" data-name="Path 9545" d="M44.251,28.876A15.376,15.376,0,1,1,28.876,13.5,15.376,15.376,0,0,1,44.251,28.876Z" transform="translate(22.273 14.018)" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="pictograms-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="151" height="137" viewBox="0 0 151 137">
                                    <g id="Group_155" data-name="Group 155" transform="translate(0 0)">
                                        <g id="Rectangle_67" data-name="Rectangle 67" transform="translate(0 0)" fill="#fff" stroke="#003459" stroke-width="2">
                                            <rect width="151" height="137" rx="16" stroke="none" />
                                            <rect x="1" y="1" width="149" height="135" rx="15" fill="none" />
                                        </g>
                                        <g id="Group_169" data-name="Group 169" transform="translate(24.131 16.881)">
                                            <circle id="Ellipse_6" data-name="Ellipse 6" cx="50.23" cy="50.23" r="50.23" transform="translate(1.62 1.62)" fill="#fedc55" />
                                            <circle id="Ellipse_7" data-name="Ellipse 7" cx="8.102" cy="8.102" r="8.102" transform="translate(43.748 43.748)" fill="#57565c" />
                                            <path id="Path_9546" data-name="Path 9546" d="M51.27,52.832a14.142,14.142,0,0,1-14.521,0l-12.995,22.5a40.508,40.508,0,0,0,40.508,0ZM79.087,20A40.508,40.508,0,0,0,64.262,5.175L51.27,27.678a14.521,14.521,0,0,1,7.321,12.577H84.515A40.506,40.506,0,0,0,79.088,20ZM36.746,27.678,23.754,5.175A40.508,40.508,0,0,0,3.5,40.255H29.425a14.521,14.521,0,0,1,7.321-12.577Z" transform="translate(7.842 11.595)" fill="#57565c" />
                                            <path id="Path_9547" data-name="Path 9547" d="M42.128,51.85a9.722,9.722,0,1,0,9.722-9.722A9.722,9.722,0,0,0,42.128,51.85Zm9.722-6.481a6.481,6.481,0,1,1-6.481,6.481A6.481,6.481,0,0,1,51.85,45.369ZM38.887,51.85A12.82,12.82,0,0,1,45.4,40.676a1.62,1.62,0,0,0,.593-2.213L33,15.96a1.62,1.62,0,0,0-2.213-.593A42.128,42.128,0,0,0,9.722,51.85a1.62,1.62,0,0,0,1.62,1.62H37.267A1.62,1.62,0,0,0,38.887,51.85ZM12.995,50.23A38.887,38.887,0,0,1,31.019,19.013l11.4,19.739A16.261,16.261,0,0,0,35.731,50.23Zm47.52,13.387a1.62,1.62,0,0,0-.972-.755,1.588,1.588,0,0,0-1.228.162,12.574,12.574,0,0,1-12.9,0,1.588,1.588,0,0,0-1.228-.162,1.62,1.62,0,0,0-.972.755l-13.024,22.5a1.62,1.62,0,0,0,.593,2.213,42.128,42.128,0,0,0,42.128,0,1.62,1.62,0,0,0,.593-2.213ZM33.826,86.3,45.22,66.569a15.678,15.678,0,0,0,13.264,0L69.877,86.3a39.493,39.493,0,0,1-36.052.006ZM51.85,0A51.85,51.85,0,1,0,103.7,51.85,51.85,51.85,0,0,0,51.85,0Zm0,100.459A48.609,48.609,0,1,1,100.459,51.85,48.609,48.609,0,0,1,51.85,100.459ZM88.333,30.786A42.167,42.167,0,0,0,72.914,15.367a1.62,1.62,0,0,0-2.213.593l-12.992,22.5a1.62,1.62,0,0,0,.593,2.213,12.82,12.82,0,0,1,6.51,11.174,1.62,1.62,0,0,0,1.62,1.62H92.358a1.62,1.62,0,0,0,1.62-1.62,42.186,42.186,0,0,0-5.645-21.064ZM67.969,50.23a16.261,16.261,0,0,0-6.685-11.478l11.4-19.739A38.887,38.887,0,0,1,90.7,50.23Z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="pictograms-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100.459" height="100.459" viewBox="0 0 100.459 100.459">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <circle id="Ellipse_6" data-name="Ellipse 6" cx="50.23" cy="50.23" r="50.23" transform="translate(1.621 1.62)" fill="#fedc55" />
                                        </clipPath>
                                    </defs>
                                    <g id="Group_169" data-name="Group 169" transform="translate(-1.621 -1.62)">
                                        <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
                                            <path id="__TEMP__SVG__" d="M50.23,100.361a49.273,49.273,0,0,1-19.523-3.974A49.149,49.149,0,0,1,3.974,69.654a49.827,49.827,0,0,1,0-39A49.274,49.274,0,0,1,30.707,3.974a49.943,49.943,0,0,1,39.045,0A49.274,49.274,0,0,1,96.485,30.657a49.827,49.827,0,0,1,0,39A49.149,49.149,0,0,1,69.752,96.388a49.4,49.4,0,0,1-19.523,3.974Zm0-12.557V62.689a12.007,12.007,0,0,1-6.181-1.669,12.687,12.687,0,0,1-4.512-4.415L17.954,69.557A37.326,37.326,0,0,0,31.541,82.851,36.706,36.706,0,0,0,50.23,87.8Zm0-75.344a36.459,36.459,0,0,0-18.688,5A37.7,37.7,0,0,0,17.954,30.8L39.536,43.756a12.434,12.434,0,0,1,4.512-4.512,12.033,12.033,0,0,1,6.181-1.669Zm-.05,31.393a5.928,5.928,0,0,0-4.415,1.864,6.173,6.173,0,0,0-1.814,4.462,6.193,6.193,0,0,0,6.228,6.228,6.191,6.191,0,0,0,4.465-1.814,5.922,5.922,0,0,0,1.864-4.415,6.365,6.365,0,0,0-6.329-6.329ZM82.5,30.8,60.923,43.756a11.938,11.938,0,0,1,.1,12.655L82.8,68.968A37.316,37.316,0,0,0,82.5,30.8Z" transform="translate(1.621 1.669)" />
                                        </g>
                                        <circle id="Ellipse_7" data-name="Ellipse 7" cx="8.102" cy="8.102" r="8.102" transform="translate(43.748 43.748)" fill="#57565c" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="pictograms-logo">
                                <svg id="bxs-radiation" xmlns="http://www.w3.org/2000/svg" width="102.209" height="94.146" viewBox="0 0 102.209 94.146">
                                    <path id="Path_9544" data-name="Path 9544" d="M43.478,30.562,29.172,6.709a2.569,2.569,0,0,0-3.608-.851A51.16,51.16,0,0,0,3.033,44.831a2.59,2.59,0,0,0,2.549,2.706L33.367,48A20.716,20.716,0,0,1,43.481,30.562ZM85.037,7.447A2.583,2.583,0,0,0,81.3,8.22L66.986,32.093a20.655,20.655,0,0,1,7.924,15.95l27.772-.461a2.6,2.6,0,0,0,2.556-2.716,51.181,51.181,0,0,0-20.2-37.418Zm-20.846,59a20.115,20.115,0,0,1-20.118,0L30.531,90.818a2.563,2.563,0,0,0,1.059,3.547,51.187,51.187,0,0,0,45.078,0,2.563,2.563,0,0,0,1.059-3.547L64.191,66.442Z" transform="translate(-3.03 -5.446)" />
                                    <path id="Path_9545" data-name="Path 9545" d="M44.251,28.876A15.376,15.376,0,1,1,28.876,13.5,15.376,15.376,0,0,1,44.251,28.876Z" transform="translate(22.273 14.018)" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pictograms;