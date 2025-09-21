

const Lec21_Comp = () => {
  return (
    <div>
          <h1>RTL Query : getByLabelText - textbox and checkbox testing </h1>

         <div className='textbox-container'>
            <label htmlFor='user-name'>Username</label>
            <input type='text' id='user-name' defaultValue={`abc`} />
         </div>

          <div className='checkbox-container'>
            <label htmlFor='skills'>Skills</label>
            <input type='checkbox' id='skills' defaultChecked={true} />
         </div>
      
    </div>
  )
}

export default Lec21_Comp
