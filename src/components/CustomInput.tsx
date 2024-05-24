
import React from "react";
import Image from "next/image";

interface InputWithButtonProps {
  value: string;
  onChange: (value: string) => void;
  buttonImageSrc: string;
  onButtonClick: () => void;
}

const InputWithButton: React.FC<InputWithButtonProps> = ({
  value,
  onChange,
  buttonImageSrc,
  onButtonClick,
}) => {
  return (
    <div className="relative flex items-center lg:w-3/5">
      <span className="absolute left-6 text-black text-sm">looking for</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pr-10 pl-24 py-3 rounded-md border border-gray-300 focus:outline-none placeholder-gray-400 placeholder:text-sm"
        placeholder="design"
      />
      <button
        type="button"
        className="absolute right-0 px-6 py-3 rounded-md focus:outline-none focus:ring-2 bg-[#FFBE2E]"
        onClick={onButtonClick}
      >
        <Image
          src={buttonImageSrc}
          alt="Button"
          width={20}
          height={20}
          className="h-6 w-8"
        />
      </button>
    </div>
  );
};

export default InputWithButton;
