import React from "react";
import moment from 'moment';
const date = '20221127'
const Home = () => {
  const time = moment(date).format('YYYY-MM-DD')
  var timestamp = Date.parse(time)
  return (
    <div>{timestamp}</div>
  )
}

export default Home