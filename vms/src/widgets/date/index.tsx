/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar4 } from 'react-icons/bs';

interface DateSelectProps {
    className?: string,
    onChange?: (e: Date | null) => any,
    placeholderText?: string,
    selected? : Date | null,
    minDate? : Date,
    maxDate? : Date,
    style?: React.CSSProperties,
    disbaled? : boolean,
    nullValuePlaceHolder? : string
}
export default function DateSelect(
    {
        className="",
        onChange,
        placeholderText,
        selected,
        minDate,
        style,
        disbaled=false,
        nullValuePlaceHolder="",
        maxDate
    }: DateSelectProps
) {
    const CustomInput = React.forwardRef(({value, onClick, onChange} : any, ref : any) => {
        return <div onClick={onClick}
                className={`flex flex-row-reverse item-center cursor-pointer items-center border  ` + className + (disbaled ? " opacity-80" : '')} style={style}  >
            <BsCalendar4  size="20" className='mr-2 text-vms-darkest -ml-1'/>
            <input 
                className='disabled:cursor-not-allowed focus:outline-none text-sm w-full placeholder:text-[#505173] text-[#505173] bg-transparent'
                value={value ? value : nullValuePlaceHolder}
                onChange={onChange}
                placeholder={placeholderText}
                ref={ref}
                // disabled={disbaled}
            />
        </div>
    })
    return <div>
        <DatePicker
            onChange={(e) => onChange && onChange(e)}
            customInput={<CustomInput />}
            selected={selected}
            minDate={minDate}
            maxDate={maxDate}
            // disabled={disbaled}
        />
    </div>
}