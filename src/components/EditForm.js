export default function EditForm({
  currentTodo,
  setIsEditing,
  handleEditInputChange,
  handleEditFormSubmit,
}) {
  return (
    <form className='pt-8 ' onSubmit={handleEditFormSubmit}>
      <label htmlFor='updateTodo'>Update todo: </label>
      <input
        className='border-2 border-red-500 rounded-lg  '
        name='updateTodo'
        type='text'
        placeholder='Update todo'
        value={currentTodo.title}
        onChange={(e) => {
          handleEditInputChange(e);
        }}
      />
      <button
        className='bg-red-600 text-white w-20 ml-5 rounded-3xl  '
        type='submit'
        onClick={handleEditFormSubmit}
      >
        Update
      </button>
      <button
        className='bg-red-600 text-white w-20 ml-5 rounded-3xl  '
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
}
