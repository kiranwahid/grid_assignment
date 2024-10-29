import React from 'react'

function Grid() {
  return (
 <main className="grid grid-col  2fr 1fr gap-1 h-screen p-6">
  <div className=" grid-col 2fr 2fr 2fr setup bg-red-400">grid 01</div>
  <div className=" setup bg-yellow-400">grid 02</div>
  <div className=" setup bg-orange-400 ">grid 03</div>
  <div className="  setup bg-sky-400 ">grid 04</div>
  <div className=" bg-green-400 "> grid 05</div>
  {/* <div className="col-span-1 bg-green-400 "> grid 06</div> */}
  <div className=" bg-purple-400 "> grid 07</div>

</main>


  )
}

export default Grid