import { useState } from 'react'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"






export default function App() {
  const [valueOne, setValueOne] = useState('')
  const [valueTwo, setValueTwo] = useState('')



  return (
    <div className='container'>

      <section className='d-flex align-items-center input-group'>
        <div class="input-group-prepend mt-3">
          <div
            class="input-group-text bg-primary text-light"
            id='copy-text'
            onClick={() => navigator.clipboard.writeText(valueOne)}
          >
            Copy Bridge One
          </div>
        </div>
        <input
          type='text'
          className='d-block mt-3 form-control w-75'
          placeholder='Bridge One'
          value={valueOne}
          onChange={(event) => setValueOne(event.target.value)}
        />
        <div class="input-group-prepend mt-3">
          <div
            class="input-group-text bg-primary text-light"
            id='empty-box'
            onClick={() => setValueOne('')}
          >
            Emty Box
          </div>
        </div>
      </section>

      <section className='d-flex align-items-center input-group'>
        <div class="input-group-prepend mt-3">
          <div
            class="input-group-text bg-primary text-light"
            id='copy-text'
            onClick={() => navigator.clipboard.writeText(valueTwo)}
          >
            Copy Bridge Two
          </div>
        </div>
        <input
          type='text'
          className='d-block mt-3 form-control w-75'
          placeholder='Bridge Two'
          value={valueTwo}
          onChange={(event) => setValueTwo(event.target.value)}
        />
        <div class="input-group-prepend mt-3">
          <div
            class="input-group-text bg-primary text-light"
            id='empty-box'
            onClick={() => setValueTwo('')}
          >
            Emty Box
          </div>
        </div>
      </section>

      {valueOne && valueTwo &&
        <ul className='mt-4 text-center'>
          {valueOne === valueTwo ?
            <li className='text-success'><AiOutlineCheck /></li>
            :
            <li className='text-danger'><AiOutlineClose /></li>
          }
        </ul>
      }
    </div>
  )
}
