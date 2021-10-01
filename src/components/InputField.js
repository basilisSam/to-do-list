import React from "react";

function InputFields() {
  return (
    <div className='pt-8 '>
      <form className='flex place-content-center'>
        <input type='text' className='border-2 border-red-500' />
        <input
          type='submit'
          value='Save'
          className='bg-red-600 text-white w-20 text-center'
        />
      </form>
    </div>
  );
}

export default InputFields;
