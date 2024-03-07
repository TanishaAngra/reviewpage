"use client";

const Praise = (props) => {
  const { options, values, onValueChange } = props;
  return (
    <>
      <div className="space-x-4 mt-4 mb-8">
        {options?.map((res,index) => {
          let isSelectedVal = false;
          values?.find((val)=>{
            if(val == res){
              isSelectedVal = true;
            }
          })
          return (
            <button
              onClick={()=>{onValueChange(res)}}
              key={index}
              type="button"
              className={`py-2.5 px-5 me-2 mb-4 text-sm font-medium focus:outline-none  rounded-2xl hover:bg-green-200 hover:text-green-700  ${isSelectedVal? 'text-green-700 bg-green-200': 'text-gray-900 bg-gray-200'}`}
            >
              {res}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Praise;
