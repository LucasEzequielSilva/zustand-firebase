import React, {useState} from "react";

const Card = ({text, index}) => {
  let [like, setLike] = useState(false)
  return (
    <div className="flex font-sans">
      <div className="flex-none w-56 relative">
        <img
          src="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto font-medium text-slate-900">Kids Jumpsuit</h1>
          <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
            {index}
          </div>
          <div className="text-sm font-medium text-slate-400">In stock</div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        </div>
        <div className="flex space-x-4 mb-5 text-sm font-medium">
            <button
              className={like ? (`h-10 px-6 font-semibold rounded-full bg-violet-600 text-white flex gap-4 items-center`) : (`h-10 px-6 font-semibold rounded-full bg-violet-400 text-white flex gap-4 items-center`)}
              onClick={()=>setLike(!like)}
            >
              {!like ? "Like" : "Ya le haz dado like"}
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
            </button>
          
        </div>
        <p className="text-sm text-slate-500">
          Free shipping on all continental US orders.
        </p>
      </div>
    </div>
  );
};

export default Card;
