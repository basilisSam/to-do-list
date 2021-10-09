import React, { useState } from "react";

function InputFields({ handleSubmit }) {
  const [title, setTitle] = useState("");

  return (
    <div className='pt-8 '>
      <form
        onSubmit={(e) => handleSubmit(e, title)}
        className='flex place-content-center space-x-4'
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          required
          className='border-2 border-red-500 rounded-lg  '
        />

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
