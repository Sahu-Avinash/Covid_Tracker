import React, { useEffect , useState } from 'react'
import './covid.css'
import CountUp from 'react-countup'

const Covid  = () => {

    const [data,setData] = useState([]);
    
    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            //console.log(actualData.statewise[0])
            setData(actualData.statewise[0]);
        }catch (err) {
            console.log(err)

        }
        
    }
    useEffect(() => {
        getCovidData();
    }, []);

  return (
    <>
    <section>
    <h1>#LIVE </h1>
    <h1>COVID-19 CORONAVIRUS TRACKER</h1>

    <body>
  <div className="container">
    <div className="cards">
      <div className="card card-one">
        <h2 className="card-title">Our Country</h2>
        <p className="date">{new Date().toDateString()}</p>
        <p className="description"> INDIA</p>
      </div>
      
      <div className="card card-two">
        <h2 className="card-title">Total Recovered</h2>
        <p className="date">{new Date().toDateString()}</p>
        <p className="description"><CountUp start={0} end={data.recovered} duration={2.5} separator=","/></p>
      </div>
      
      <div className="card card-three">
        <h2 className="card-title">Total Confirmed</h2>
        <p className="date">{new Date().toDateString()}</p>
        <p className="description"><CountUp start={0} end={data.confirmed} duration={2.5} separator=","/></p>
      </div>
      
      <div className="card card-four">
        <h2 className="card-title">Total Death</h2>
        <p className="date">{new Date().toDateString()}</p>
        <p className="description"><CountUp start={0} end={data.deaths} duration={2.5} separator=","/></p>
      </div>
      <div className="card card-five">
        <h2 className="card-title">Total Active</h2>
        <p className="date">{new Date().toDateString()}</p>
        <p className="description"><CountUp start={0} end={data.active} duration={2.5} separator=","/></p>
      </div>
      <div className="card card-six">
        <h2 className="card-title">Last Updated</h2>
        <p className="date">{new Date().toDateString()}</p>
        <p className="description">{data.lastupdatedtime}</p>
      </div>
    </div>
  </div>
</body>
    </section>
    </>
  )
}

export default Covid