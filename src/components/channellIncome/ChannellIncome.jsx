import React, { useState } from 'react'
import './ChannellIncome.css'

import { ProgressBar } from 'react-bootstrap'

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

// Data for different time periods
const channelData = {
    monthly: {
        growth: 3.4,
        shops: [
            { name: 'فروشگاه فیزیکی', price: '2.9K', progress: 28 },
            { name: 'فروشگاه آنلاین', price: '2.3K', progress: 32 },
            { name: 'رسانه اجتماعی', price: '2.1K', progress: 40 }
        ]
    },
    weekly: {
        growth: 2.1,
        shops: [
            { name: 'فروشگاه فیزیکی', price: '980', progress: 35 },
            { name: 'فروشگاه آنلاین', price: '875', progress: 25 },
            { name: 'رسانه اجتماعی', price: '760', progress: 40 }
        ]
    },
    yearly: {
        growth: 4.8,
        shops: [
            { name: 'فروشگاه فیزیکی', price: '35K', progress: 42 },
            { name: 'فروشگاه آنلاین', price: '28K', progress: 33 },
            { name: 'رسانه اجتماعی', price: '25K', progress: 25 }
        ]
    }
};

export default function ChannellIncome() {
    const [timeframe, setTimeframe] = useState('monthly');
    const currentData = channelData[timeframe];
    return (
        <div className='channelInfosContainer'>
            <div className="salesTargetTitlecontainer">
                <h4 className="salesTargetTitle">درآمد کانال</h4>
                <select 
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="surveySelectForm form-select"
                    aria-label="Default select example"
                >
                    <option value="monthly">ماهانه</option>
                    <option value="weekly">هفتگی</option>
                    <option value="yearly">سالانه</option>
                </select>
            </div>
            <div className="growUpPrecent">
                <div className="channellPrecent">
                    <span>{currentData.growth} %</span>
                </div>
            </div>
            <div className="progressBars">
                {currentData.shops.map((shop, index) => (
                    <div key={index} className="channellprogressBar">
                        <ProgressBar now={shop.progress} />
                        <span>{shop.progress}%</span>
                    </div>
                ))}
            </div>
            <div className="shops">
                <div className="shop">
                    <div className="shopIcon">
                        <LocalGroceryStoreIcon className='icon' />
                    </div>
                    <div className="shopPrice">
                        ${currentData.shops[0].price}
                    </div>
                    <span className="shopName">
                        {currentData.shops[0].name}
                    </span>
                </div>
                <div className="shop">
                    <div className="shopIcon">
                        <StorefrontIcon className='icon' />
                    </div>
                    <div className="shopPrice">
                        ${currentData.shops[1].price}
                    </div>
                    <span className="shopName">
                        {currentData.shops[1].name}
                    </span>
                </div>
                <div className="shop">
                    <div className="shopIcon">
                        <QuestionAnswerIcon className='icon' />
                    </div>
                    <div className="shopPrice">
                        ${currentData.shops[2].price}
                    </div>
                    <span className="shopName">
                        {currentData.shops[2].name}
                    </span>
                </div>
            </div>
        </div>
    )
}
