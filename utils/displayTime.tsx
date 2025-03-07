import React from 'react';
import moment from 'moment';
import 'moment/locale/ar';
moment.locale('ar');

const arabicIndicToWestern: { [key: string]: string } = {
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9'
};

const DisplayTime = ({ time, type, format }: { time: number | string, type: 'ago' | 'normal', format?: string }) => {
    return (
        <div>
            {
                type == 'ago' ?
                    moment(time).fromNow().replace(/[٠-٩]/g, digit => arabicIndicToWestern[digit] || digit)
                    :
                    moment(Number(time) * 1000).format(format).replace(/[٠-٩]/g, digit => arabicIndicToWestern[digit] || digit)
            }
        </div>
    );
}

export default DisplayTime;
