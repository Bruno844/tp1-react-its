import React from 'react'

const Contacto = () => {
  return (
    <div className='container d-flex justify-content-center mt-4 bg-dark'>
      <div/>
        <div className="row" />
          <form>
            <fieldset>
              <input type="text" id="name" name="name" className="input-block-level mt-3" placeholder="Name" />
              <input type="text" id="email" name="email" className="input-block-level" placeholder="Email" />
              <textarea rows="3" id="description" name="description" className="input-block-level d-flex my-3" placeholder="Description"></textarea>
              <button type="submit" className="btn btn-warning pull-right mb-3">Submit</button>
            </fieldset>
          </form>
        <div>
      </div>
    </div>
                        
  )
}

export default Contacto