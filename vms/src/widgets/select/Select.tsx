import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

interface SelectProps{
  selectOptions: string[]
  value?:  string
}
export default function Select({selectOptions,value}: SelectProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<string>(value ? value : "");

  const handleSelectedOption = (option: string) => {
        setSelectedOption(option);
        setShowDropDown(false);
    }
    return(
    <div
      className="relative w-full p-3 flex justify-between items-center border border-[#DADBF2] rounded-[4px]"
      onClick={() => setShowDropDown(!showDropDown)}
      tabIndex={0}
      onBlur={() => setShowDropDown(false)}
    >
      <p className="text-xs ">{!selectedOption ? "Choose an option" : selectedOption}</p>
      <BsChevronCompactDown className="text-vms-dark"/>
      {showDropDown && (
        <div className="absolute left-0 top-11 bg-white z-10 border border-[#DADBF2] w-full">
          {selectOptions.map((option, index) => {
            return (
              <div key={index} className="w-full p-2 hover:bg-[#DADBF2]" onClick={()=>handleSelectedOption(option)}>
                <p className="text-xs">{option}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
