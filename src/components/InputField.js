import React from "react";

function InputFields() {
  return (
    <div className='pt-8 '>
      <form className='flex place-content-center space-x-4'>
        <input type='text' className='border-2 border-red-500 rounded-lg  ' />
        <input
          type='submit'
          value='Save'
          className='bg-red-600 text-white w-20 text-center rounded-3xl space-x-8'
        />
      </form>
    </div>
  );
}

export default InputFields;
