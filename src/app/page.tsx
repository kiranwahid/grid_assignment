import Grid from "@/components/grid";
import Grid_assignment from "@/components/grid-assignment";
import Gridlayout from "@/components/gridlayout";
import Image from "next/image";

export default function Home() {
  return (
<>
{/* <main className="grid grid-rows-4 grid-cols-3 gap-1 h-screen p-6">
  <div className="col-span-3 setup bg-red-400">grid 01</div>
  <div className="row-span-2 setup bg-yellow-400">grid 02</div>
  <div className="col-span-2 setup bg-orange-400 ">grid 03</div>
  <div className=" col-span-1 setup bg-sky-400 ">grid 04</div>
  <div className="col-span-1 bg-green-400 "> grid 05</div>
  <div className="col-span-3 bg-purple-400 "> grid 06</div>

</main> */}
{/* <Grid/> */}
{/* <Gridlayout/> */}
<Grid_assignment/>
</>
  );
}
