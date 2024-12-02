import React from 'react'
import Link from 'next/link';
import  Style  from  './ProductCard.module.css'

export default function ProductCard(props:any) {
    var prod=props.product;

    
  return (
    <div className={`card mt-3 mb-2 h100 border border-secondary-subtle ${Style.productCard}`} style={{width: '17rem'}}>
      <Link href={'/products/'+prod.documentId} className='text-decoration-none'>
    <div className={`${Style.productImgContainer}`}>
    <img src={prod.image} className={`card-img-top  mb-1 ${Style.productImg}`} height={200} alt="img" /></div>
    <div className="card-body">
      <h5 className={`card-title mb-2 text-center text-dark text-truncate text-decoration-none ${Style.prodName} `} >{prod.title}</h5>
      <p className="card-text mb-0 text-dark description text-truncate  text-decoration-none descriptn"  >
         {prod.description}  
      </p>
      <p className='text-center text-decoration-none  text-dark'><span className={`${Style.price_symbol}`}>₹</span><span className={`text-dark text-decoration-none ${Style.product_Price}`}>{prod.price}</span> M.R.P.</p>
      <div className='d-flex align-items-center justify-content-center text-decoration-none'><button className='btn btn-warning text-decoration-none' type='button'>View Details</button></div>
    </div></Link>
  </div>
  )
}
