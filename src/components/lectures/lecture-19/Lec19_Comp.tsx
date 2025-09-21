const Lec19_Comp = () => {
  return (
    <div>
      <h1>RTL Query: getByRole - Multiple Item with Role</h1>
      <h2>Custom Role</h2>
      <button>Click 1</button>
      <button>Click 2</button>
      
      <label htmlFor='input1'>User Name</label>
      <input type='text' id='input1' />

      <label htmlFor='input2'>User Age</label>
      <input type='text' id='input2' />

     <div role='dummy'>dummy text</div>

    </div>
  )
}

export default Lec19_Comp
