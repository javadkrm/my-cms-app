import React, { useState } from 'react'
import './Survey.css'
import { Form } from 'react-bootstrap'
import { homeChartData } from '../../Datas';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

// Data for different time periods
const surveyData = {
    monthly: {
        profit: { amount: '25,024', change: '+3.24' },
        orders: { amount: '7,234', change: '-2.28' },
        views: { amount: '3.1 M', change: '+4.24' },
        chartData: homeChartData
    },
    weekly: {
        profit: { amount: '6,245', change: '+2.15' },
        orders: { amount: '1,834', change: '+1.08' },
        views: { amount: '856 K', change: '+3.12' },
        chartData: homeChartData.map(item => ({ ...item, فروش: item.فروش * 0.25 }))
    },
    yearly: {
        profit: { amount: '298,458', change: '+12.45' },
        orders: { amount: '84,526', change: '+8.92' },
        views: { amount: '35.8 M', change: '+15.67' },
        chartData: homeChartData.map(item => ({ ...item, فروش: item.فروش * 12 }))
    }
};

export default function Survey() {
    const [activeBox, setActiveBox] = useState(null);
    const [timeframe, setTimeframe] = useState('monthly');
    const currentData = surveyData[timeframe];
    return (
        <div className='surveyContainer'>
            <div className="surveyTitleContainer">
                <h4 className="surveyTitle">نظرسنجی</h4>
                <Form.Select 
                    className='surveySelectForm' 
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    aria-label="Default select example"
                >
                    <option value="monthly">ماهانه</option>
                    <option value="weekly">هفتگی</option>
                    <option value="yearly">سالانه</option>
                </Form.Select>
            </div>
            <div className="surveyInfos">
                <div 
                    className={`infoBox ${activeBox === 'profit' ? 'active' : ''}`}
                    onClick={() => setActiveBox('profit')}
                >
                    <div className="iconWrapper aquaBg">
                        <PaidOutlinedIcon className='infoBoxIcon '/>
                    </div>
                    <span className="iconContent">
                        سود کل
                    </span>
                    <span className="priceInfo">
                        $ {currentData.profit.amount}
                    </span>
                    <div className="precentInfo">
                        <span className='lastMonthSpan'>از دوره قبل</span>
                        <span className={`precent ${parseFloat(currentData.profit.change) >= 0 ? 'positivePrecent' : 'negaivePrecent'}`}>
                            {currentData.profit.change} %
                        </span>
                    </div>
                </div>
                <div 
                    className={`infoBox ${activeBox === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveBox('orders')}
                >
                    <div className="iconWrapper greenBg">
                        <ShoppingBagOutlinedIcon className='infoBoxIcon'/>
                    </div>
                    <span className="iconContent">
                         کل سفارش
                    </span>
                    <span className="priceInfo">
                         {currentData.orders.amount}
                    </span>
                    <div className="precentInfo">
                        <span className='lastMonthSpan'>از دوره قبل</span>
                        <span className={`precent ${parseFloat(currentData.orders.change) >= 0 ? 'positivePrecent' : 'negaivePrecent'}`}>
                            {currentData.orders.change} %
                        </span>
                    </div>
                </div>
                <div 
                    className={`infoBox ${activeBox === 'views' ? 'active' : ''}`}
                    onClick={() => setActiveBox('views')}
                >
                    <div className="iconWrapper violetBg">
                        <RemoveRedEyeOutlinedIcon className='infoBoxIcon '/>
                    </div>
                    <span className="iconContent">
                         برداشت
                    </span>
                    <span className="priceInfo">
                       {currentData.views.amount}
                    </span>
                    <div className="precentInfo">
                        <span className='lastMonthSpan'>از دوره قبل</span>
                        <span className={`precent ${parseFloat(currentData.views.change) >= 0 ? 'positivePrecent' : 'negaivePrecent'}`}>
                            {currentData.views.change} %
                        </span>
                    </div>
                </div>
            </div>
            <div className="lineChartContainer">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart 
                        data={currentData.chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                            dataKey="name" 
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            width={60}
                        />
                        <Tooltip 
                            cursor={false}
                            contentStyle={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                border: 'none',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                        <Legend verticalAlign="top" height={36} />
                        <Line 
                            type="monotone" 
                            dataKey="فروش" 
                            stroke="#8884d8" 
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ 
                                r: 6, 
                                stroke: '#8884d8',
                                strokeWidth: 2,
                                fill: '#fff'
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
