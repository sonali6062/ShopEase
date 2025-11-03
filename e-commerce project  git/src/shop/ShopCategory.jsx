import React from 'react'

const ShopCategory = ({ filterItem,setItem,menuItem,setproducts,selectedCategory}) => {
  return (
    <>
<div className='widget-header'>
<h5 className='ms-2'>All category</h5>

</div>
<div>
<button onClick={()=>setproducts(Data)} className={`ms-2 ${selectedCategory=='All'?'bg-warning':''}`}>All</button>
    {
        menuItem.map((val,id)=>{
            return(
                <button className={`ms-2 ${selectedCategory==val?'bg-warning':''}`} 
                key={id}
                onClick={()=>filterItem(val)}
                >{val}</button>
            )
        })
    }
</div>
    </>
  )
}

export default ShopCategory