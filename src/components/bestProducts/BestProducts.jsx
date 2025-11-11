import React from 'react'
import './BestProducts.css'
import { bestProductsData } from '../../Datas'

export default function BestProducts() {
    return (
        <div className='bestProductsWrapper'>
            <div class="salesTargetTitlecontainer">
                <h4 class="salesTargetTitle">محصول برتر</h4>
                <button className='showAllButton'>
                    مشاهده همه
                </button>
            </div>
            <div className='bestProductsItemsContainer'>
                {bestProductsData.map(pro => (
                    <div key={pro.id} className="product">
                        <div className="productPoster">
                            <img src={pro.poster} alt="" />
                        </div>
                        <div className="productTitle">
                            <span className='titleSpan'>{pro.title}</span>
                            <span className='sellSpan'>فروخته شده :{pro.sell}</span>
                        </div>
                        <div className={`productPrecent ${pro.precent < 0 ? 'negative' : ''}`}>
                            <span>{pro.precent}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
