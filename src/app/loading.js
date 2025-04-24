import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-14 h-14 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#3b9df8] flex items-center justify-center">
        <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#3b9df8]"></div>
      </div>
    </div>
  );
};

export default Loading;
