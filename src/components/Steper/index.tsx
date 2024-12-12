import React from "react";

interface SteperInterface {
  Stepers: any;
}

const Steper: React.FC<SteperInterface> = ({ Stepers }) => {
  return (
    <div>
      {" "}
      <ol className='relative w-full text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400'>
        {Stepers?.map((item: any, index: number) => {
          return (
            <li className='mb-10 ms-6'>
              <span className='absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900 font-semibold text-xl text-[#204BA2]'>
                {index + 1}
              </span>
              <h3 className=' leading-tight text-black text-xl font-semibold'>
                {item?.name}
              </h3>
              {item?.discriptions}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Steper;
