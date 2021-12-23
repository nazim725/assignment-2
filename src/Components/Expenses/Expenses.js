import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = () => {
    const [years,setYears]=useState('2021')

    const handleFilterChange=year=>{
        setYears(year)

    }
    return (
        <div>
             <ExpensesFilter year={years} handleFilterChange={handleFilterChange}></ExpensesFilter>

             <p className='selected-year'> Selected Year: {years}</p>
            
        </div>
    );
};

export default Expenses;