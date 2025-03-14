import React, { ReactNode } from 'react'

const SvgIcons = ({ iconName, width, height, color }: { iconName: string, height?: string, width?: string, color?: string }) => {
    const image: Array<{ name: string, icon: ReactNode }> = [
        {
            name: 'foot',
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="#0bb32a"  > <path d="m10.5 13.01 1.5 1.5-2.5.5-.5-.5 1.5-1.5zM7.92 1v1l2 1h2l1 6 1.5 4.5-1 1-10-10L5.92 1h2zM8 10.51l1.5 1.5-2.5.5-.5-.5 1.5-1.5zm-2.5-2.5L7 9.51l-2.5.5-.5-.5 1.5-1.5zm5.93.19H9.08l1.41 1.41h1.18l-.24-1.41zM3 5.51l1.5 1.5-2.5.5-.5-.5L3 5.51zm7.91-.01H6.43l1.41 1.41h3.31l-.24-1.41z" fill="#0bb32a" fill-rule="evenodd" > </path></svg >
        },
        {
            name: 'penaltyGoals',
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="#0bb32a"><path d="M8.07 5.45c2.63 0 4.77 2.14 4.77 4.77 0 2.63-2.14 4.77-4.77 4.77-2.63 0-4.77-2.14-4.77-4.77 0-2.63 2.14-4.77 4.77-4.77zm.19 1.2h-.2c-.92 0-1.75.35-2.39.92l.63.37-.45 1.69-1.37.49v.12c0 .45.08.89.24 1.29l.64-.33 1.06 1.18-.17.94c.54.32 1.16.5 1.82.5 1.98 0 3.59-1.61 3.59-3.59 0-1.04-.44-1.96-1.14-2.62l-.6.55-1.86-.78.2-.73zm1.52 2.78.95 1.73-1.42 1.56-1.41-.55v-2.06l1.88-.68zM15 1v6.75h-1.5V2.5h-11v5.25H1V1h14z" fill="#0bb32a" fill-rule="evenodd"></path></svg>
        },
        {
            name: 'ownGoals',
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="#c7361f" ><path d="M5 1v2.25h8.75V7.1c.77.84 1.25 1.94 1.25 3.17 0 2.61-2.12 4.73-4.73 4.73a4.74 4.74 0 0 1-4.73-4.73c0-2.6 2.13-4.72 4.73-4.72.71 0 1.38.17 1.98.45V4.75H5V7H4L1 4l3-3h1zm5.46 5.73h-.19c-.91 0-1.73.35-2.36.91l.62.37-.45 1.67-1.36.48v.12c0 .45.09.88.24 1.28l.63-.32 1.05 1.17-.17.93c.53.31 1.14.49 1.8.49l.01-.01a3.55 3.55 0 0 0 3.55-3.55c0-1.02-.44-1.94-1.13-2.59l-.59.55-1.84-.78.19-.72zm1.5 2.75.94 1.72-1.4 1.55-1.4-.55v-2.04l1.86-.68z" fill="#c7361f" fill-rule="evenodd"></path></svg>
        },
        {
            name: 'goals',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path id="Path_53339" data-name="Path 53339" d="M9,0a9,9,0,1,0,9,9A9.011,9.011,0,0,0,9,0Zm.572,2.924L11.886,1.68a7.912,7.912,0,0,1,3.25,2.4l-.551,2.545-1.765.865L9.572,5.12ZM6.134,1.673,8.448,2.922v2.2L5.2,7.486,3.428,6.62,2.877,4.059A7.9,7.9,0,0,1,6.134,1.673ZM2.509,13.448A7.823,7.823,0,0,1,1.164,9.765L3.069,7.7l1.737.849,1.308,3.716L5.009,13.587Zm8.5,3.158a7.73,7.73,0,0,1-4.412-.11l-.708-2.2,1.128-1.356H10.99L12.1,14.249Zm1.97-3.058L11.888,12.26l1.326-3.715L14.943,7.7l1.893,2.068A7.8,7.8,0,0,1,15.774,13Z" fill="#5bd286"></path>    </svg>
        },
        {
            name: 'disallowedGoal',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18.633" height="19.216" viewBox="0 0 18.633 19.216"> <path id="Path_53339" data-name="Path 53339" d="M8,0a8,8,0,1,0,8,8A8.009,8.009,0,0,0,8,0Zm.508,2.6,2.057-1.106a7.033,7.033,0,0,1,2.889,2.13l-.49,2.262-1.569.769-2.887-2.1ZM5.452,1.487,7.509,2.6V4.551l-2.885,2.1-1.577-.77-.49-2.276A7.023,7.023,0,0,1,5.452,1.487ZM2.23,11.954a6.954,6.954,0,0,1-1.2-3.274L2.728,6.841,4.272,7.6l1.163,3.3-.983,1.178Zm7.553,2.807A6.953,6.953,0,0,1,8,15c-.746,0-.419-.022-1.094-.239l1.6-1.9-1-1.966,2.26.6.985,1.166Zm1.751-2.718L10.567,10.9l1.839-1.752L13.313,8l1.653.681a6.934,6.934,0,0,1-.945,2.871Z" fill="#fc4d4d"></path><g id="Union_18" data-name="Union 18" transform="translate(-21930.344 -5871.763)" fill="#fc4d4d"><path d="M 21939.41796875 5889.87890625 C 21938.85546875 5889.87890625 21938.328125 5889.66015625 21937.931640625 5889.2626953125 C 21937.11328125 5888.44384765625 21937.11328125 5887.111328125 21937.931640625 5886.29248046875 L 21939.626953125 5884.5966796875 L 21937.931640625 5882.9013671875 C 21937.11328125 5882.0830078125 21937.11328125 5880.75244140625 21937.927734375 5879.93359375 C 21938.322265625 5879.5341796875 21938.8515625 5879.314453125 21939.416015625 5879.314453125 C 21939.978515625 5879.314453125 21940.505859375 5879.533203125 21940.90234375 5879.9306640625 L 21942.59765625 5881.62548828125 L 21944.29296875 5879.93017578125 C 21944.69140625 5879.53271484375 21945.21875 5879.314453125 21945.779296875 5879.314453125 C 21946.33984375 5879.314453125 21946.8671875 5879.533203125 21947.263671875 5879.9306640625 C 21948.08203125 5880.74951171875 21948.08203125 5882.08203125 21947.263671875 5882.90087890625 L 21945.568359375 5884.5966796875 L 21947.263671875 5886.2919921875 C 21948.08203125 5887.111328125 21948.08203125 5888.44384765625 21947.263671875 5889.2626953125 C 21946.8671875 5889.65966796875 21946.33984375 5889.87841796875 21945.779296875 5889.87841796875 C 21945.220703125 5889.87841796875 21944.6953125 5889.6611328125 21944.296875 5889.26708984375 L 21944.294921875 5889.26513671875 L 21944.29296875 5889.26318359375 L 21942.59765625 5887.56787109375 L 21940.90234375 5889.26318359375 C 21940.505859375 5889.66015625 21939.978515625 5889.87890625 21939.41796875 5889.87890625 Z" stroke="none"></path><path d="M 21939.416015625 5888.77880859375 C 21939.673828125 5888.77880859375 21939.9296875 5888.68115234375 21940.125 5888.4853515625 L 21942.59765625 5886.01220703125 L 21945.0703125 5888.4853515625 C 21945.46484375 5888.8759765625 21946.095703125 5888.8759765625 21946.486328125 5888.4853515625 C 21946.876953125 5888.09423828125 21946.876953125 5887.4609375 21946.486328125 5887.06982421875 L 21944.013671875 5884.5966796875 L 21946.486328125 5882.12353515625 C 21946.876953125 5881.732421875 21946.876953125 5881.09912109375 21946.486328125 5880.7080078125 C 21946.095703125 5880.3173828125 21945.4609375 5880.3173828125 21945.0703125 5880.7080078125 L 21942.59765625 5883.18115234375 L 21940.125 5880.7080078125 C 21939.732421875 5880.31591796875 21939.09375 5880.31884765625 21938.708984375 5880.7080078125 C 21938.318359375 5881.09912109375 21938.318359375 5881.732421875 21938.708984375 5882.12353515625 L 21941.181640625 5884.5966796875 L 21938.708984375 5887.06982421875 C 21938.318359375 5887.4609375 21938.318359375 5888.09423828125 21938.708984375 5888.4853515625 C 21938.904296875 5888.68115234375 21939.16015625 5888.77880859375 21939.416015625 5888.77880859375 M 21939.41796875 5890.978515625 C 21938.560546875 5890.978515625 21937.7578125 5890.6455078125 21937.15234375 5890.0400390625 C 21935.90625 5888.79248046875 21935.90625 5886.7626953125 21937.15234375 5885.51513671875 L 21938.0703125 5884.5966796875 L 21937.15234375 5883.67919921875 C 21935.908203125 5882.431640625 21935.90625 5880.404296875 21937.1484375 5879.15673828125 C 21937.751953125 5878.54931640625 21938.556640625 5878.21484375 21939.416015625 5878.21484375 C 21940.271484375 5878.21484375 21941.076171875 5878.5478515625 21941.681640625 5879.1533203125 L 21942.59765625 5880.0693359375 L 21943.513671875 5879.15234375 C 21944.123046875 5878.546875 21944.92578125 5878.21484375 21945.779296875 5878.21484375 C 21946.634765625 5878.21484375 21947.4375 5878.5478515625 21948.04296875 5879.1533203125 C 21949.2890625 5880.40087890625 21949.2890625 5882.4306640625 21948.04296875 5883.67822265625 L 21947.125 5884.5966796875 L 21948.04296875 5885.51416015625 C 21949.2890625 5886.7626953125 21949.2890625 5888.79248046875 21948.04296875 5890.0400390625 C 21947.4375 5890.6455078125 21946.634765625 5890.978515625 21945.779296875 5890.978515625 C 21944.9296875 5890.978515625 21944.126953125 5890.64794921875 21943.521484375 5890.048828125 L 21942.59765625 5889.1240234375 L 21941.681640625 5890.041015625 C 21941.076171875 5890.6455078125 21940.2734375 5890.978515625 21939.41796875 5890.978515625 Z" stroke="none" fill="#151825"></path>    </g></svg>
        },
        {
            name: 'assist',
            icon: <svg id="athlete" xmlns="http://www.w3.org/2000/svg" width="20.975" height="20.975" viewBox="0 0 20.975 20.975"><g id="athlete-2" data-name="athlete" transform="translate(0 14.142) rotate(-45)"><path id="Path_53449" data-name="Path 53449" d="M35.477,51.932a16.145,16.145,0,0,1,2.061-1.009l.4,1.009Z" transform="translate(-29.233 -44.7)" fill="#5a83ff"></path><path id="Path_53450" data-name="Path 53450" d="M16.886,38.264a4.547,4.547,0,0,1-.1-.932V36.86L16,36.875c-.258.078-6.225,1.9-7.974,3.494H3a2.245,2.245,0,0,1,1.588-1.955L7.364,37.6l1.242,1.263a.341.341,0,0,0,.488,0,.355.355,0,0,0,0-.5L8.043,37.3l.714-.387,1.23,1.25a.341.341,0,0,0,.488,0,.355.355,0,0,0,0-.5l-1.081-1.1.714-.387,1.26,1.281a.341.341,0,0,0,.488,0,.355.355,0,0,0,0-.5l-1.111-1.129.714-.387,1.29,1.311a.341.341,0,0,0,.488,0,.355.355,0,0,0,0-.5L12.095,35.1l.826-.448.047-.119A2.39,2.39,0,0,1,15.147,33l.137.487a2.689,2.689,0,0,0,2.568,1.969h1.834A2.649,2.649,0,0,0,21.8,34.4h.087l.163.083A1.749,1.749,0,0,1,23,36.056v.773a6.012,6.012,0,0,1-4.141,1.434Z" transform="translate(-3 -33.001)" fill="#5a83ff"></path><path id="Path_53454" data-name="Path 53454" d="M22.7,57.056l-.039.026a3.256,3.256,0,0,1-1.834.557H17.741a.356.356,0,0,1-.244-.1l-.632-.6a1.059,1.059,0,0,0-.733-.288H12.9a1.059,1.059,0,0,0-.733.288l-.632.6a.357.357,0,0,1-.244.1H6.2A2.2,2.2,0,0,1,4.037,56H23.66A3.047,3.047,0,0,1,22.7,57.056Z" transform="translate(-4 -47.977)" fill="#5a83ff"></path><path id="Path_53455" data-name="Path 53455" d="M25.477,47.952c.287-.1.562-.2.819-.285l.83,2.076h-.933Z" transform="translate(-14.921 -42.532)" fill="#5a83ff"></path><path id="Path_53456" data-name="Path 53456" d="M3,47.621H4.676A6.6,6.6,0,0,0,8.61,46.46V48.2a2.979,2.979,0,0,1-.091.728H3.837A4.133,4.133,0,0,1,3,47.621Z" transform="translate(11.39 -41.73)" fill="#5a83ff"></path><path id="Path_53457" data-name="Path 53457" d="M30.477,49.532c.271-.107.542-.211.809-.31l.627,1.567H30.98Z" transform="translate(-21.434 -43.566)" fill="#5a83ff"></path><path id="Path_53458" data-name="Path 53458" d="M22.108,48.65H21.07l-.914-2.285c.494-.162.864-.276,1.025-.325a4.761,4.761,0,0,0,.927,2.61Z" transform="translate(-8.063 -41.451)" fill="#5a83ff"></path></g></svg>
        },
        {
            name: 'redCard',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="13.467" height="19.001" viewBox="0 0 13.467 19.001"><path id="Path_53446" data-name="Path 53446" d="M-176.561-52.088l-7.267.759a1.717,1.717,0,0,1-1.892-1.6L-186.6-67.5a1.717,1.717,0,0,1,1.714-1.82h9.031a1.717,1.717,0,0,1,1.714,1.827l-.886,13.806A1.717,1.717,0,0,1-176.561-52.088Z" transform="translate(187.102 69.819)" fill="#fc4d4d" stroke="rgba(0,0,0,0)" strokeWidth="1"></path></svg>
        },
        {
            name: 'yallowCard',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="13.467" height="19.001" viewBox="0 0 13.467 19.001"><path id="Path_53337" data-name="Path 53337" d="M-176.561-52.088l-7.267.759a1.717,1.717,0,0,1-1.892-1.6L-186.6-67.5a1.717,1.717,0,0,1,1.714-1.82h9.031a1.717,1.717,0,0,1,1.714,1.827l-.886,13.806A1.717,1.717,0,0,1-176.561-52.088Z" transform="translate(187.102 69.819)" fill="#ffda46" stroke="rgba(0,0,0,0)" strokeWidth="1"></path></svg>
        },

        {
            name: 'swap',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#0bb32a" ><g fill="#0bb32a" fill-rule="evenodd" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13.5H9V18H8l-4-3.5L8 11h1v2.5h4v2zm3-2.5h-1v-2.5h-4v-2h4V6h1l4 3.5-4 3.5z" fill="secondary.default"></path></g></svg>
        },
        {
            name: 'Injury',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#c7361f" ><path d="M15 4.5V9h4.5v6h-4.501L15 19.5H9L8.999 15H4.5V9H9V4.5h6z" fill="#c7361f" fill-rule="evenodd" ></path></svg>
        },
        {
            name: 'Transfer',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#374df5" ><g fill="#374df5" fill-rule="evenodd" ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-1v-4.5H5v-3h7V6h1l7 6-7 6z" fill="primary.default"></path></g></svg>
        },
        {
            name: 'arraw',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="" ><path fill="" d="m17 9-5 8-5-8h10z" fill-rule="evenodd"></path></svg>
        },
        {
            name: 'arrawV2',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 5 8.75"><path id="Shape" d="M3.491,4.375.183,7.683a.625.625,0,0,0,.884.884l3.75-3.75a.625.625,0,0,0,0-.884L1.067.183a.625.625,0,0,0-.884.884Z" fill="#bfc3d4"></path>        </svg>
        },
        {
            name: 'OKy',
            icon: <svg aria-hidden="true" data-selected="true" role="presentation" viewBox="0 0 17 18"><polyline fill="none" points="1 9 7 14 15 4" stroke="currentColor" stroke-dasharray="22" stroke-dashoffset="44" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" ></polyline></svg>

        },
        {
            name: 'onBench',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(34, 34, 38, 0.45)" ><path d="M21 6H3v5h18V6zM2 13v2h2v4h2v-4h12v4h2v-4h2v-2H2z" fill="rgba(34, 34, 38, 0.45)" fill-rule="evenodd"></path></svg>
        },
        {
            name: 'friends',
            icon: <svg width={width ? width : '24'} height={height ? height : '24'} viewBox="0 0 24 24" fill="rgba(34, 34, 38, 0.45)" ><g clipPath="url(#clip0_6014_21692)" width="40" height="40" fill="rgba(34, 34, 38, 0.45)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 21H2V14L4 12H11L13 14V21Z" fill="onSurface.nLv3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 21H15V14H20L22 16V21Z" fill="onSurface.nLv3"></path><path d="M7.5 10C9.433 10 11 8.433 11 6.5C11 4.567 9.433 3 7.5 3C5.567 3 4 4.567 4 6.5C4 8.433 5.567 10 7.5 10Z" fill="onSurface.nLv3"></path><path d="M16.5 12C18.433 12 20 10.433 20 8.5C20 6.567 18.433 5 16.5 5C14.567 5 13 6.567 13 8.5C13 10.433 14.567 12 16.5 12Z" fill="onSurface.nLv3"></path></g><defs width="40" height="40" fill="rgba(34, 34, 38, 0.45)"><clipPath id="clip0_6014_21692"><rect width="20" height="18" fill="white" transform="translate(2 3)"></rect></clipPath></defs></svg>
        },
        {
            name: 'rect1',
            icon: <svg width={width ? width : '24'} height={height ? height : '24'} viewBox="0 0 24 24" fill="rgba(34, 34, 38, 0.45)" ><path fill="rgba(34, 34, 38, 0.45)" d="M20 2H2v20h20V2h-2zM4 4h16v2H4V4zm16 16H4V8h16v12z" fill-rule="evenodd" width="40" height="40"></path></svg>
        },
        {
            name: 'information',
            icon: <svg width="16" height="16" viewBox="0 0 24 24" className='' fill={color} ><g fill={color} fill-rule="evenodd"><path fill="success.default" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 7v6h-2v-6h2zm0-4v2h-2V7h2z"></path></g></svg>
        },
        {
            name: 'menu-1',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--on-surface-nLv1)" ><path fill="var(--on-surface-nLv1)" d="M22 3H2v2h20V3zm-9 14H2v-2h10l1 2zm9-8H2v2h20V9zm-6.86 6 3.43 6L22 15h-6.86z" fill-rule="evenodd"></path></svg>
        },
        {
            name: 'decrease',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="inherit" ><path fill="inherit" d="m3.5 18 6-6.02 4 4.007L22 6.412 20.59 5l-7.09 7.982-4-4.006L2 16.498z" fill-rule="evenodd"></path></svg>
        },
        {
            name: '-',
            icon: <svg width={width ? width : '24'} height={height ? height : '24'} viewBox="0 0 24 24" fill={color ? color : '#374df5'} ><path fill={color ? color : '#374df5'} d="M19 13H5v-2h14z" fill-rule="evenodd"></path></svg>
        },
        {
            name: 'x',
            icon: <svg width={width ? width : '24'} height={height ? height : '24'} viewBox="0 0 24 24" fill={color ? color : '#374df5'} ><g fill={color ? color : '#374df5'} fill-rule="evenodd"><path fill="primary.default" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g></svg>
        },
        {
            name: 'expand',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill={color ? color : '#374df5'} ><defs fill={color ? color : '#374df5'}><clipPath id="nlv9fl6eka"><path d="M1440 0v1080H0V0h1440z"></path></clipPath><clipPath id="7fc9kfma8b"><path d="M308 0c6.627 0 12 5.373 12 12v108H0V12C0 5.373 5.373 0 12 0h296z"></path></clipPath><clipPath id="qw2a2vtfmc"><path d="M18 0v8l-3.29-3.29-10 10L8 18H0v-8l3.29 3.29 10-10L10 0h8z"></path></clipPath></defs><g clipPath="url(#nlv9fl6eka)" transform="translate(-656 -976)" fill={color ? color : '#374df5'}><g clipPath="url(#7fc9kfma8b)" transform="translate(400 960)"><g clipPath="url(#qw2a2vtfmc)" transform="translate(259 19)"><path fill="primary.default" d="M0 0h18v18H0V0z"></path></g></g></g></svg>
        },
        {
            name: 'search',
            icon: <svg id="zoom-out" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path id="Combined_Shape" data-name="Combined Shape" d="M18.292,19.707l-3.678-3.678a9.009,9.009,0,1,1,1.414-1.414l3.678,3.678a1,1,0,0,1-1.415,1.415ZM2,9a7,7,0,0,0,11.87,5.024,1,1,0,0,1,.154-.154A7,7,0,1,0,2,9Z" fill="#707488"></path>
            </svg>
        },
        {
            name: 'threePoints',
            icon: <svg id="more-horizontal" xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6"><defs><clipPath id="clipPath"><path id="Combined_Shape" data-name="Combined Shape" d="M19,6a3,3,0,1,1,3-3A3,3,0,0,1,19,6Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,19,2ZM11,6a3,3,0,1,1,3-3A3,3,0,0,1,11,6Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,11,2ZM3,6A3,3,0,1,1,6,3,3,3,0,0,1,3,6ZM3,2A1,1,0,1,0,4,3,1,1,0,0,0,3,2Z" transform="translate(1 9)" fill={"#b5c6d6"}></path></clipPath></defs><path id="Combined_Shape-2" data-name="Combined Shape" d="M19,6a3,3,0,1,1,3-3A3,3,0,0,1,19,6Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,19,2ZM11,6a3,3,0,1,1,3-3A3,3,0,0,1,11,6Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,11,2ZM3,6A3,3,0,1,1,6,3,3,3,0,0,1,3,6ZM3,2A1,1,0,1,0,4,3,1,1,0,0,0,3,2Z" transform="translate(0 0)" fill={"#b5c6d6"}></path><g id="Mask_Group_131" data-name="Mask Group 131" transform="translate(-1 -9)" clipPath="url(#clipPath)"><g id="COLOR_black" data-name="COLOR/ black"><rect id="Rectangle" width="32" height="32" fill={"#b5c6d6"}></rect></g></g></svg>
        },
        {
            name: 'points',
            icon: < svg width="22" height="22" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.414 398.414" fill={color} stroke="#b5c6d6" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M58.274,140.937C26.142,140.937,0,167.079,0,199.211c0,32.124,26.141,58.266,58.274,58.266 s58.274-26.141,58.274-58.266C116.548,167.079,90.406,140.937,58.274,140.937z M58.274,233.099 c-18.688,0-33.888-15.2-33.888-33.88c0-18.688,15.2-33.888,33.888-33.888s33.888,15.209,33.888,33.888 C92.162,217.891,76.961,233.099,58.274,233.099z"></path> <path d="M197.85,140.937c-32.132,0-58.274,26.141-58.274,58.274c0,32.124,26.141,58.266,58.274,58.266 s58.274-26.141,58.274-58.266C256.123,167.079,229.982,140.937,197.85,140.937z M197.85,233.099 c-18.688,0-33.888-15.2-33.888-33.88c0-18.688,15.2-33.888,33.888-33.888s33.888,15.209,33.888,33.888 C231.738,217.891,216.537,233.099,197.85,233.099z"></path> <path d="M340.14,140.937c-32.132,0-58.274,26.141-58.274,58.274c0,32.124,26.142,58.266,58.274,58.266 s58.274-26.141,58.274-58.266C398.414,167.079,372.272,140.937,340.14,140.937z M340.14,233.099 c-18.688,0-33.888-15.2-33.888-33.88c0-18.688,15.2-33.888,33.888-33.888s33.888,15.209,33.888,33.888 C374.028,217.891,358.828,233.099,340.14,233.099z"></path> </g> </g> </g></svg >
        },
        {
            name: 'clock',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"> <path data-name="Combined Shape" d="M2.2,12.8A7.5,7.5,0,1,1,12.8,2.2,7.5,7.5,0,1,1,2.2,12.8ZM1.364,7.5A6.136,6.136,0,1,0,7.5,1.364,6.143,6.143,0,0,0,1.364,7.5Zm7.7,2.528L7.018,7.982a.68.68,0,0,1-.2-.482V3.409a.682.682,0,1,1,1.364,0V7.218l1.846,1.846a.682.682,0,1,1-.964.964Z" fill="#707488"></path></svg>
        },
        {
            name: 'calander',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 15.8"><path id="Combined_Shape" data-name="Combined Shape" d="M2.1,15.8A2.13,2.13,0,0,1,0,13.645V3.591A2.13,2.13,0,0,1,2.1,1.436H3.5V.718a.7.7,0,1,1,1.4,0v.718H9.1V.718a.7.7,0,1,1,1.4,0v.718h1.4A2.13,2.13,0,0,1,14,3.591V13.645A2.13,2.13,0,0,1,11.9,15.8Zm-.7-2.154a.71.71,0,0,0,.7.718h9.8a.71.71,0,0,0,.7-.718V7.182H1.4Zm11.2-7.9V3.591a.71.71,0,0,0-.7-.719H10.5v.719a.7.7,0,1,1-1.4,0V2.872H4.9v.719a.7.7,0,1,1-1.4,0V2.872H2.1a.71.71,0,0,0-.7.719V5.746Z" fill="#707488"></path>    </svg>
        },
        {
            name: 'like',
            icon: <svg className='w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors duration-200' xmlns="http://www.w3.org/2000/svg" width="17.683" height="18" viewBox="0 0 17.683 18"><path id="Shape" d="M14.092,18H2.446A2.45,2.45,0,0,1,0,15.545V9.818A2.45,2.45,0,0,1,2.446,7.364H4.363L7.41.486A.815.815,0,0,1,8.155,0a3.268,3.268,0,0,1,3.262,3.272V5.727h3.791a2.452,2.452,0,0,1,2.446,2.824L16.53,15.914A2.447,2.447,0,0,1,14.12,18Z" fill="currentColor"></path> </svg>
        },
        {
            name: 'send',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"><path id="Shape" d="M14.5,16.89,8,13.883,1.5,16.89c-.811.374-1.757-.274-1.434-.983l7-15.378a1.1,1.1,0,0,1,1.876,0l7,15.378C16.192,16.473,15.642,17,15,17A1.18,1.18,0,0,1,14.5,16.89Z" fill="#131521"></path></svg>
        },
        {
            name: 'playVideo',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : "42"} height={height ? height : "42"} viewBox="0 0 42 42"><path id="Path_790" data-name="Path 790" d="M21,0A21,21,0,1,0,42,21,21,21,0,0,0,21,0Zm8.844,21.669a1.5,1.5,0,0,1-.673.673v.007l-12,6A1.5,1.5,0,0,1,15,27V15a1.5,1.5,0,0,1,2.171-1.343l12,6A1.5,1.5,0,0,1,29.844,21.669Z" fill="#fff"></path></svg>
        },
        {
            name: 'partage',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20"> <path id="Combined_Shape" data-name="Combined Shape" d="M10.8,16.364a3.661,3.661,0,0,1,.136-.993l-4.78-2.813A3.572,3.572,0,0,1,3.6,13.637a3.637,3.637,0,0,1,0-7.273A3.572,3.572,0,0,1,6.156,7.442l4.779-2.817a3.661,3.661,0,0,1-.135-.989,3.6,3.6,0,1,1,3.6,3.637,3.572,3.572,0,0,1-2.556-1.078L7.065,9.011a3.681,3.681,0,0,1,0,1.977L11.847,13.8A3.572,3.572,0,0,1,14.4,12.728a3.636,3.636,0,1,1-3.6,3.636Zm1.8,0a1.813,1.813,0,1,0,.3-1,.912.912,0,0,1-.1.179A1.822,1.822,0,0,0,12.6,16.364ZM1.8,10a1.8,1.8,0,0,0,3.335.949l.019-.034.022-.037a1.831,1.831,0,0,0,0-1.762l-.019-.032-.017-.031A1.8,1.8,0,0,0,1.8,10ZM14.4,5.455a1.814,1.814,0,1,0-1.575-.939l.021.035.019.035A1.8,1.8,0,0,0,14.4,5.455Z" fill="#fff"></path></svg>
        },
        ////socialMedia
        {
            name: 'youtube',
            icon: <svg id="Component_131_1" data-name="Component 131 – 1" xmlns="http://www.w3.org/2000/svg" width="28.525" height="20.218" viewBox="0 0 28.525 20.218"><path id="Path_14750" data-name="Path 14750" d="M30,12a5.71,5.71,0,0,0-5.31-5.7A173.323,173.323,0,0,0,7.33,6.28,5.727,5.727,0,0,0,2,12a43.69,43.69,0,0,0,0,8.72,5.32,5.32,0,0,0,5.28,5.33h0q4.35.24,8.72.24t8.67-.23A5.34,5.34,0,0,0,30,20.8,31.67,31.67,0,0,0,30,12Zm-2,8.63a.49.49,0,0,0,0,.12,3.36,3.36,0,0,1-3.39,3.34,166,166,0,0,1-17.28,0A3.36,3.36,0,0,1,4,20.65a42,42,0,0,1,0-8.47.45.45,0,0,0,0-.11A3.78,3.78,0,0,1,7.38,8.28c2.86-.13,5.74-.19,8.62-.19s5.76.06,8.62.19h.05c1.71,0,3.33,1.84,3.33,3.79a.76.76,0,0,0,0,.15,30.11,30.11,0,0,1,0,8.39Z" transform="translate(-1.782 -6.072)" fill="#707488"></path><path id="Path_14751" data-name="Path 14751" d="M20.79,15.51l-7.14-3.68a1,1,0,1,0-.92,1.78l5.43,2.79-4,2.07V16.4a1,1,0,0,0-2,0v3.72a1,1,0,0,0,1.46.89l7.14-3.72a1.017,1.017,0,0,0,.03-1.78Z" transform="translate(-1.782 -6.072)" fill="#707488"></path>    </svg>
        },
        {
            name: 'twitter',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="26.003" height="22.572" viewBox="0 0 26.003 22.572"><path id="twitter_bird_social_media_trending" data-name="twitter bird social media trending" d="M28.77,8.11a.87.87,0,0,0-.23-.2A4.69,4.69,0,0,0,29,6.54a1,1,0,0,0-1.54-1,6.42,6.42,0,0,1-2.28.92,6.21,6.21,0,0,0-7.08-1A6.07,6.07,0,0,0,15,12.2a1.02,1.02,0,0,0,2-.4,4.08,4.08,0,0,1,2-4.52,4.24,4.24,0,0,1,5.12,1,1,1,0,0,0,.88.28h.25a1,1,0,0,0,.34,1.62,1,1,0,0,0-.36.88A13.07,13.07,0,0,1,20.34,22.3,12.75,12.75,0,0,1,7.69,24.61a9.06,9.06,0,0,0,4.54-2.18,1,1,0,0,0-.78-1.66,4,4,0,0,1-3-1.39,3.63,3.63,0,0,0,1-.35,1,1,0,0,0-.21-1.87,4.42,4.42,0,0,1-3-2.48c.24,0,.48.05.74.06A.975.975,0,0,0,7.67,13C6,11.48,5.59,9.85,5.83,8.7a13.88,13.88,0,0,0,7,4,1.018,1.018,0,0,0,.38-2A12.1,12.1,0,0,1,6.39,6.31a1,1,0,0,0-1.53-.05,5.34,5.34,0,0,0-.31,6H4.46a1,1,0,0,0-.52.81,5.84,5.84,0,0,0,1.95,4.47,1,1,0,0,0-.18,1,6.63,6.63,0,0,0,3.18,3.57A13.89,13.89,0,0,1,4,23a1,1,0,0,0-.5,1.86A16.84,16.84,0,0,0,12,27.35a15.16,15.16,0,0,0,9.6-3.57,15.12,15.12,0,0,0,5.69-12.42,4.62,4.62,0,0,0,1.62-2.25,1,1,0,0,0-.14-1Z" transform="translate(-3.01 -4.778)" fill="#707488"></path>    </svg>
        },
        {
            name: 'instagram',
            icon: <svg id="Component_130_1" data-name="Component 130 – 1" xmlns="http://www.w3.org/2000/svg" width="24.555" height="24.663" viewBox="0 0 24.555 24.663"><path id="Path_14748" data-name="Path 14748" d="M20.45,13.32a1,1,0,0,0-.57,1.3,4,4,0,1,1-2.31-2.3,1,1,0,0,0,.71-1.87,5.99,5.99,0,1,0,3.47,3.44,1,1,0,0,0-1.3-.57Z" transform="translate(-3.73 -3.677)" fill="#707488"></path><circle id="Ellipse_253" data-name="Ellipse 253" cx="1" cy="1" r="1" transform="translate(18.27 4.323)" fill="#707488"></circle><path id="Path_14749" data-name="Path 14749" d="M28,9a5,5,0,0,0-4.9-5h0A77.111,77.111,0,0,0,9,4,5,5,0,0,0,4,8.921,91.91,91.91,0,0,0,4,23a5,5,0,0,0,4.9,5h0c2.36.22,4.73.34,7.1.34s4.71-.11,7.05-.34A5,5,0,0,0,28,23.08,87.089,87.089,0,0,0,28,9ZM26,23a3,3,0,0,1-3,3h-.1A71.73,71.73,0,0,1,9,26a3,3,0,0,1-3-3.08A92.4,92.4,0,0,1,6,9,3,3,0,0,1,9.09,6q3.44-.31,6.9-.32T23,6a3,3,0,0,1,3,3.08A85.13,85.13,0,0,1,26,23Z" transform="translate(-3.73 -3.677)" fill="#707488"></path>    </svg>
        },
        {
            name: 'facebook',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path id="facebook_fb_face_book" data-name="facebook fb face book" d="M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5h8a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H15V17h1a1,1,0,0,0,1-1V12.5A2.5,2.5,0,0,1,19.5,10H22v2H21a2,2,0,0,0-2,2v2a1,1,0,0,0,1,1h1.72l-.5,2H20a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V21h1a1,1,0,0,0,1-.76l1-4A.993.993,0,0,0,23,15H21V14h2a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H19.5A4.51,4.51,0,0,0,15,12.5V15H14a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1v6H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3V24a3,3,0,0,1-3,3H20a1,1,0,0,0,0,2h4a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Z" transform="translate(-3 -3)" fill="#707488"></path></svg>
        },
        {
            name: 'shirt',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30.001" height="26.745" viewBox="0 0 30.001 26.745"><path id="Path_106256" data-name="Path 106256" d="M29.786,17.257l-.614.492-.019.019-3.1,2.466a.293.293,0,0,1-.389-.019l-.811-.83-1.57-1.613V33.18a.644.644,0,0,1-.642.647H7.37A.518.518,0,0,1,7.2,33.8a.555.555,0,0,1-.309-.2.473.473,0,0,1-.113-.183.575.575,0,0,1-.052-.239V17.768L5.152,19.38l-.811.83a.293.293,0,0,1-.389.019L.216,17.252a.589.589,0,0,1-.131-.759l.427-.684,3.272-5.274.492-.8A4.11,4.11,0,0,1,6.727,7.9,36.393,36.393,0,0,1,10.8,7.22a.6.6,0,0,1,.633.441,3.616,3.616,0,0,0,6.08,1.5,3.781,3.781,0,0,0,.544-.736,3.679,3.679,0,0,0,.323-.778.608.608,0,0,1,.633-.445,37.662,37.662,0,0,1,4.266.713,4.137,4.137,0,0,1,2.456,1.833l3.759,6.07.427.684A.6.6,0,0,1,29.786,17.257Z" transform="translate(-0.001 -7.194)" fill="#0e1019"></path><path id="Path_106257" data-name="Path 106257" d="M29.786,27.018l-.614.492L26.05,30a.288.288,0,0,1-.389-.023l-.811-.83,3.614-2.784,1.027-.788C30.067,26.512,30.011,26.836,29.786,27.018ZM23.275,42.708v.23a.64.64,0,0,1-.642.642H7.37a.518.518,0,0,1-.173-.028.56.56,0,0,1-.3-.2.5.5,0,0,1-.113-.183.551.551,0,0,1-.047-.234v-.23ZM.216,27.018,3.952,30a.288.288,0,0,0,.389-.023l.811-.83L.512,25.57l-.427.689A.59.59,0,0,0,.216,27.018Z" transform="translate(-0.001 -16.835)" fill="#39dbbf"></path>    </svg>
        },

        {
            name: 'substitution',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17.888" viewBox="0 0 14 17.888"><path id="next_1_" data-name="next (1)" d="M.736,29.657A.819.819,0,0,0-.423,30.816l1.139,1.14H-9.219a.781.781,0,0,0-.781.781.781.781,0,0,0,.781.781H.716L-.423,34.657A.819.819,0,0,0,.736,35.816L3.7,32.847a.156.156,0,0,0,0-.221Z" transform="translate(10.25 -29.417)" fill="#5bd286"></path><path id="next_1_2" data-name="next (1)" d="M10.736.24A.819.819,0,1,0,9.577,1.4l1.139,1.14H.781a.781.781,0,0,0,0,1.562h9.935L9.577,5.24A.819.819,0,1,0,10.736,6.4L13.7,3.43a.156.156,0,0,0,0-.221Z" transform="translate(13.75 17.888) rotate(180)" fill="#fc4d4d"></path>    </svg>
        },
        {
            name: 'whistle',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15"><path id="Path_53333" data-name="Path 53333" d="M15.5,176h-3a.5.5,0,0,0-.354.147l-.853.861H10v-.5a.5.5,0,0,0-.5-.5H5a5.042,5.042,0,1,0,4.938,5.852l5.75-2.361a.5.5,0,0,0,.312-.467V176.5A.5.5,0,0,0,15.5,176ZM5,183.563a2.521,2.521,0,1,1,2.5-2.521A2.51,2.51,0,0,1,5,183.563Z" transform="translate(0 -171.083)" fill="#5a83ff"></path><path id="Path_53334" data-name="Path 53334" d="M336.5,16a.5.5,0,0,0-.5.5v3.025a.5.5,0,1,0,1.008,0V16.5A.5.5,0,0,0,336.5,16Z" transform="translate(-325.506 -16)" fill="#5a83ff"></path><path id="Path_53335" data-name="Path 53335" d="M226.414,50.2,224.9,48.187a.5.5,0,0,0-.807.6l1.512,2.017a.5.5,0,0,0,.807-.6Z" transform="translate(-217.005 -46.977)" fill="#5a83ff"></path><path id="Path_53336" data-name="Path 53336" d="M402.306,48.112a.505.505,0,0,0-.706.1l-1.512,2.017a.5.5,0,0,0,.808.6l1.513-2.017A.5.5,0,0,0,402.306,48.112Z" transform="translate(-387.517 -47.003)" fill="#5a83ff"></path>    </svg>
        },
        {
            name: 'InCrossbar',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="25.729" height="18.826" viewBox="0 0 25.729 18.826"><path id="Path_53361" data-name="Path 53361" d="M44.885,67.14h-.621V54.68a2.3,2.3,0,0,0-2.3-2.3h-17.2a2.3,2.3,0,0,0-2.3,2.3V67.14h-.621a.844.844,0,1,0,0,1.688H44.885a.844.844,0,1,0,0-1.688Zm-19.34,0H24.323V54.85a.612.612,0,0,1,.611-.611H41.8a.612.612,0,0,1,.611.611V67.14H25.545Z" transform="translate(-20.5 -50.501)" fill="#707488" stroke="rgba(0,0,0,0)" strokeWidth="1"></path><circle id="Ellipse_275" data-name="Ellipse 275" cx="2.25" cy="2.25" r="2.25" transform="translate(7.109)" fill="#fc4d4d"></circle></svg>
        },
        {
            name: 'summary',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24.272" height="24.272" viewBox="0 0 24.272 24.272"><path id="Path_308" data-name="Path 308" d="M755.932,1642.135h-4.211v-5.068a.956.956,0,0,0-.95-.954h-17.2a.955.955,0,0,0-.954.954v19.78a3.539,3.539,0,0,0,3.534,3.538h17.2a3.538,3.538,0,0,0,3.534-3.534v-13.764A.954.954,0,0,0,755.932,1642.135Zm-.954,14.715a1.629,1.629,0,0,1-1.626,1.586h-.04a1.625,1.625,0,0,1-1.587-1.584v-12.808h3.253Zm-5.1.632c.009.051.019.1.031.15a3.536,3.536,0,0,0,.178.576.082.082,0,0,0,.017.035c.033.079.07.157.109.233l-14.068,0a1.629,1.629,0,0,1-1.627-1.627v-18.829h15.3v18.831A3.462,3.462,0,0,0,749.881,1657.482Z" transform="translate(-732.614 -1636.114)" fill={color}></path><path id="Path_309" data-name="Path 309" d="M756.7,1655.257h5.411a.954.954,0,1,0,0-1.908H756.7a.954.954,0,1,0,0,1.908Z" transform="translate(-749.971 -1648.048)" fill={color}></path><path id="Path_310" data-name="Path 310" d="M758.678,1669.587h-9.324a.954.954,0,1,0,0,1.908h9.324a.954.954,0,1,0,0-1.908Z" transform="translate(-744.461 -1660.235)" fill={color}></path><path id="Path_311" data-name="Path 311" d="M758.678,1683.375h-9.324a.954.954,0,1,0,0,1.908h9.324a.954.954,0,0,0,0-1.908Z" transform="translate(-744.461 -1670.582)" fill={color}></path><path id="Path_312" data-name="Path 312" d="M758.678,1697.163h-9.324a.954.954,0,1,0,0,1.908h9.324a.954.954,0,0,0,0-1.908Z" transform="translate(-744.461 -1680.93)" fill={color}></path></svg>
        },
        {
            name: 'rank',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20"><path id="Combined_Shape" data-name="Combined Shape" d="M21,20H17a1,1,0,0,1-1-1V6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V19A1,1,0,0,1,21,20ZM18,7V18h2V7ZM5,20H1a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H5a1,1,0,0,1,1,1v8A1,1,0,0,1,5,20ZM2,12v6H4V12Z" transform="translate(0 0)" fill={color ? color : "#767884"}></path><path id="Combined_Shape-2" data-name="Combined Shape" d="M13,20H9a1,1,0,0,1-1-1V1A1,1,0,0,1,9,0h4a1,1,0,0,1,1,1V19A1,1,0,0,1,13,20ZM10,2V18h2V2Z" transform="translate(0 0)" fill={color ? color : "#767884"}></path></svg>
        },
        {
            name: 'videos',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path id="Combined_Shape" data-name="Combined Shape" d="M12,20a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1Zm1-2h5V13H13ZM1,20a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1Zm1-2H7V13H2ZM12,9a1,1,0,0,1-1-1V1a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1V8a1,1,0,0,1-1,1Zm1-2h5V2H13ZM1,9A1,1,0,0,1,0,8V1A1,1,0,0,1,1,0H8A1,1,0,0,1,9,1V8A1,1,0,0,1,8,9Z" fill={color ? color : "#767884"}></path>    </svg>
        },
        {
            name: 'playingField',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="31" height="23.25" viewBox="0 0 31 23.25"><path id="Path_35" data-name="Path 35" d="M-131.725,20h-29.062a.969.969,0,0,0-.969.969h0V42.281a.969.969,0,0,0,.969.969h29.062a.969.969,0,0,0,.969-.969h0V20.969a.969.969,0,0,0-.969-.969Zm-13.562,7.888a3.856,3.856,0,0,1,2.789,4.686,3.856,3.856,0,0,1-2.789,2.789Zm-14.531,0a3.856,3.856,0,0,1,2.789,4.686,3.856,3.856,0,0,1-2.789,2.789Zm12.594,7.475a3.856,3.856,0,0,1-2.789-4.686,3.856,3.856,0,0,1,2.789-2.789Zm0-9.463a5.806,5.806,0,0,0-4.762,6.689,5.805,5.805,0,0,0,4.762,4.762v3.962h-12.6V37.35a5.806,5.806,0,0,0,4.762-6.689,5.807,5.807,0,0,0-4.762-4.762V21.938h12.594Zm14.531,9.463a3.856,3.856,0,0,1-2.789-4.686,3.856,3.856,0,0,1,2.789-2.789Zm0-9.463a5.806,5.806,0,0,0-4.762,6.689,5.805,5.805,0,0,0,4.762,4.762v3.962h-12.594V37.35a5.806,5.806,0,0,0,4.762-6.689,5.807,5.807,0,0,0-4.762-4.762V21.938h12.593Z" transform="translate(161.756 -20)" fill={color ? color : "#767884"}></path></svg>
        },

    ]

    const Icon: ReactNode = image.find((icon) => icon.name == iconName)?.icon
    return Icon
}

export default SvgIcons

