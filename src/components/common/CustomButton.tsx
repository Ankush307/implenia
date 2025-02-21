import React from "react";

interface buttonData {
    text?: string;
    myClass?: string;
}
const CustomButton = ({ myClass, text }: buttonData) => {
    return (
        <button
            className={` text-nowrap font-bold text-customXl leading-[21px] transition-all duration-300 max-sm:!py-2 border-2 rounded-[47px] max-md:px-6 max-md:py-3 max-md:font-medium max-sm:text-lg max-sm:px-4 ${myClass}`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
