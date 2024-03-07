"use client";

const Recommend = (props) => {
  const { options, value, onValueChange } = props;

  return (
    <>
      <div class="flex gap-2 mt-4">
        {options?.map((res,index) => {
          let isSelectedVal = false;
          if (value === res?.val) isSelectedVal = true;
          return (
            <button
              onClick={() => {
                onValueChange(res?.val);
              }}
              key={index}
              type="button"
              className={`py-1.5 px-3 text-center border border-gray-300 rounded-2xl  border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2 ${isSelectedVal ? res?.selectedStyle : res?.style }`}>
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d={res?.path}
                ></path>
              </svg>
              <span>{res?.val}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Recommend;
