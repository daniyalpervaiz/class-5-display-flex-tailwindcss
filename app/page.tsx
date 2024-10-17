import Image from "next/image";

export default function Home() {
  return (<div>
<header>
  <nav>
<div className="flex bg-green-400 w-100 h-20 justify-around items-center">
  <div className="bg-blue-800 w-40 h-10"></div>

<div className="w-4/5 flex justify-end items-center gap-[10px]" >
  <div className="bg-red-700 w-20 h-10"></div>
  <div className="bg-orange-600 w-20 h-10"></div>
</div>

</div>

  </nav>
</header> <br /> <br />


<div className="flex w-100 gap-[40px] justify-center" >

<div className="w-1/6 h-[300px] bg-yellow-400"></div>
<div className="w-1/6 h-[300px] bg-pink-400" ></div>
<div className="w-1/6 h-[300px] bg-violet-800" ></div>

</div> <br /> 
<div className=" flex w-100 justify-center gap-[20px]" >
  <div className="bg-teal-700 w-[15%] h-[240px]"></div>
  <div className="bg-gray-700 w-[15%] h-[240px]"></div>


</div> <br />


<div className="bg-gray-700 w-100 h-30"  >
  <footer>
    <div className="ml-[45%]" ><br />
       <ol>
      <div className="bg-white w-[100px] h-4"></div><br />
      <div className="bg-white w-[100px] h-4"></div><br />
      <div className="bg-white w-[100px] h-4"></div><br />
      <div className="bg-white w-[100px] h-4"></div>
      
    </ol>
  </div><br />
  <div className="flex justify-center items-center bg-purple-800 w-100 h-10 text-white">
@All Right Reserved 2024-2025
  </div>
  </footer>
</div>

 </div>
   
  )}