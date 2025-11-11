import React from 'react'
import './BestCountries.css'
import { ProgressBar } from 'react-bootstrap'

import { countriesDatas } from '../../Datas'


export default function BestCountries() {
  return (
    <div className='BestCountriesContainer'>
      <h4 class="countriesTitle">کشورهای برتر</h4>
      <div className="BestCountriesWrapper">
        <div className="countriesImg">
          <img src="flags/countries.png" alt="" />
        </div>
        <div className="countriesInfos">
          {countriesDatas.map(item => (
            <div className="country">
              <img className='countryFlag' src={item.flag} alt="country" />
              <div className="countryData">
                <span className="countryName">{item.name}</span>
                <div className="progressBar">
                  <ProgressBar className='progress' now={item.precent}  />
                  <span className="precent">{item.precent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
