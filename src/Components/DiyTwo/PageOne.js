import React from 'react';

const PageOne = () => {
    return (
        <div>
            <div className="diy-container">
                <h3 className="container diy-container-h3">DIY</h3>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="163" height="597" viewBox="0 0 163 597">
                    <defs>
                        <filter id="NAV_bar_Side" x="0" y="0" width="163" height="597" filterUnits="userSpaceOnUse">
                            <feOffset dx="5" dy="5" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="4.5" result="blur" />
                            <feFlood flood-opacity="0.251" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#NAV_bar_Side)">
                        <g id="NAV_bar_Side-2" data-name="NAV bar Side" transform="translate(8.5 8.5)" fill="#003459" stroke="#003459" stroke-width="2">
                            <path d="M0,0H120a16,16,0,0,1,16,16V554a16,16,0,0,1-16,16H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" stroke="none" />
                            <path d="M2,1H120a15,15,0,0,1,15,15V554a15,15,0,0,1-15,15H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1Z" fill="none" />
                        </g>
                    </g>
                    <button>Hi</button>
                </svg>

            </div>
        </div>
    );
};

export default PageOne;