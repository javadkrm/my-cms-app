import React from 'react'
import './Dashboard.css'
import Survey from '../../components/survey/Survey'
import SalesTarget from '../../components/salesTarget/SalesTarget'
import BestProducts from '../../components/bestProducts/BestProducts'
import BestCountries from '../../components/bestCountries/BestCountries'
import ChannellIncome from '../../components/channellIncome/ChannellIncome'
import RecentOrders from '../../components/recentOrders/RecentOrders'
import CopyRight from '../../components/copyRight/CopyRight'

export default function Dashboard() {
  return (
    <div className='dashboardContainer'>
      <div className="dashboardUp">
        <div className='dashboardLeft'>
          <SalesTarget />
          <BestProducts />
          <ChannellIncome />
        </div>
        <div className='dashboardRight'>
          <Survey />
          <BestCountries />
        </div>
      </div>
      <div className='dashboardBottom'>
        <RecentOrders />
        <CopyRight/>
      </div>
    </div>
  )
}
