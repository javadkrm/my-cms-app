import React, { useState } from 'react'
import './SalesTarget.css'
import { Form } from 'react-bootstrap'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const salesData = {
    monthly: {
        progress: 75,
        current: '1.3K',
        target: '1.8K'
    },
    weekly: {
        progress: 45,
        current: '450',
        target: '1K'
    },
    yearly: {
        progress: 88,
        current: '15.8K',
        target: '18K'
    }
};

export default function SalesTarget() {
    const [timeframe, setTimeframe] = useState('monthly');
    const currentData = salesData[timeframe];
    return (
        <div className='salesTargetContainer'>
            <div className="salesTargetTitlecontainer">
                <h4 className="salesTargetTitle">هدف فروش</h4>
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
            <div className="salesTargetContent">
                <Box className='box' position="relative" display="inline-flex">
                    <CircularProgress variant="determinate" value={currentData.progress} size={120} />
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h6" component="div">
                            {`${Math.round(currentData.progress)}%`}
                        </Typography>
                    </Box>
                </Box>
                <div className="salesTargetDetails">
                    <span className='salesTargetNumber'>
                       {currentData.current} <span className='salesTargetlittleNumber'>/ {currentData.target}</span> 
                    </span>
                    <span className='salesTargetMonth'>
                        {timeframe === 'monthly' ? 'ساخته شده در ماه جاری' :
                         timeframe === 'weekly' ? 'ساخته شده در هفته جاری' :
                         'ساخته شده در سال جاری'}
                    </span>
                </div>
            </div>
        </div>
    )
}
