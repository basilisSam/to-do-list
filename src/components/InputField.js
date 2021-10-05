import React, { useState } from "react";

function InputFields() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    const todos = { title };
    e.preventDefault();
    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos),
    }).then(() => {
      setLoading(false);
      window.location.reload(false);
    });
  };

  return (
    <div className='pt-8 '>
      <form
        onSubmit={handleSubmit}
        className='flex place-content-center space-x-4'
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          required
          className='border-2 border-red-500 rounded-lg  '
        />
        {!loading && (
          <input
            type='submit'
            value='Save'
            className='bg-red-600 text-white w-20 text-center rounded-3xl space-x-8'
          />
        )}
      </form>
    </div>
  );
}

export default InputFields;
