import React from 'react'

function DataSection({ query, location, timezone, isp }) {
  return (
    <div className='data_section'>
    <div>
       <p>IP ADDRESS</p>
       <h3>{query}</h3> 
    </div>
    <div>
       <p>LOCATION</p>
       <h3>{location}</h3> 
    </div>
    <div>
       <p>TIMEZONE</p>
       <h3>{timezone}</h3> 
    </div>
    <div>
       <p>ISP</p>
       <h3>{isp}</h3> 
    </div>
</div>
  )
}

export default DataSection