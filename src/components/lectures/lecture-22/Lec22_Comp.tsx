

const Lec22_Comp = () => {
  return (
    <div>
         <h1>RTL Query : getAllByLabelText</h1>
         <div className="textboxes-container">
             <div className='textbox-container1'>
                <label htmlFor='user-name1'>Username</label>
                <input type='text' id='user-name1' defaultValue={`aaa`} />
            </div>

            <div className='textbox-container2'>
                <label htmlFor='user-name2'>Username</label>
                <input type='text' id='user-name2' defaultValue={`bbb`} />
            </div>

            <div className='textbox-container3'>
                <label htmlFor='user-name3'>Username</label>
                <input type='text' id='user-name3' defaultValue={`ccc`} />
            </div>
         </div>

            <div className="checkboxes-container">
             <div className='checkbox-container1'>
                <label htmlFor='skill1'>Skills</label>
                <input type='checkbox' id='skill1' defaultChecked={true} />
            </div>

            <div className='checkbox-container2'>
                <label htmlFor='skill2'>Skills</label>
                <input type='checkbox' id='skill2' defaultChecked={true} />
            </div>

            <div className='checkbox-container3'>
                <label htmlFor='skill3'>Skills</label>
                <input type='checkbox' id='skill3' defaultChecked={true} />
            </div>
         </div>


        

    </div>
  )
}

export default Lec22_Comp
