// import React from "react";
// import Data from "../../Utils/project_data";
// import StuffRender from "./StuffRender/page";
// import NavigationOtherPages from "./../NavigationOtherPages/page";
// import Link from "next/link";

// const Page = () => {
//   return (
//     <div className=" project drop-shadow-2 flex flex-col text-white overflow-hidden justify- items-center  h-screen">
//       <NavigationOtherPages />
//       <div className="relative top-28 right-0 w-screen flex justify-between items-start">
//         <div className=" hidden sm:block">
//           <StuffRender />
//         </div>
//         <div className=" space-y-8 relative lg:right-96 ">
//           {Data.map((i) => (
//             <div key={i.id}>
//               <Link href={i.link}>
//                 <div className="pro  flex justify-around items-end gap-2 w-[700px] p-4 cursor-pointer rounded-xl">
//                   <p className=" text-base text-white uppercase">{i.Heading}</p>
//                   <p className=" text-base text-gray-400 capitalize">
//                     {i.Desc}
//                     <span className="text-gray-500 px-2">................</span>
//                   </p>
//                   <p className=" text-base text-white">{i.Date}</p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;








import React from "react";
import Data from "../../Utils/project_data";
import StuffRender from "./StuffRender/page";
import NavigationOtherPages from "./../NavigationOtherPages/page";
import Link from "next/link";

const Page = () => {
  return (
    <div className="project drop-shadow-2 flex flex-col text-white overflow-hidden justify-center items-center h-full md:h-screen p-4 sm:p-6 lg:p-8">
      <NavigationOtherPages />
      <div className="relative top-28 w-full flex flex-col lg:flex-row lg:justify-between lg:items-start h-screen">
        <div className="hidden lg:block lg:w-1/4">
          <StuffRender />
        </div>
        <div className="space-y-8 lg:space-y-4 lg:w-3/4 lg:pl-8">
          {Data.map((i) => (
            <div key={i.id}>
              <Link href={i.link}>
                <div className="flex  flex-col lg:flex-row lg:items-center gap-2 p-4 lg:w-[800px] justify-between pro cursor-pointer rounded-xl transition-all hover:bg-gray-700">
                  <p className="text-base text-white uppercase">{i.Heading}</p>
                  <p className="text-base text-gray-400 capitalize lg:mr-4">
                    {i.Desc}
                    <span className="text-gray-500 px-2">................</span>
                  </p>
                  <p className="text-base text-white">{i.Date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
