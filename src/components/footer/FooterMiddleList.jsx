import React from 'react'

const FooterMiddleList = ({title, listData}) => {
  return (
    <div >
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul >
        {
          listData.map((link,index) => (
            <li key={index} className='footerLink'>{link}</li>
          ))
            
        }
      </ul>
    </div>
  );
}

export default FooterMiddleList
