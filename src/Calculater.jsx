import React,{useState} from 'react'

const Calculater = () => {
    const [input,setInput] = useState('')

    

    const calculate = (data)=>{
        if(data === "DEL"){
            setInput((prev)=>prev.slice(0,-1))
        }else if(data === "AC")
        {
            setInput('')
        }else if(data === "=")
        {
            setInput((prev)=>eval(prev))
        }else
        {
            setInput((prev)=>prev+data)
        }
    }


  return (
        <div className='w-full max-w-md shadow-2xl p-8 rounded mt-10 flex flex-col gap-5'>
            <div className='w-full'>
                <input type="text" value={input} readOnly={true} className='w-full rounded p-1.5 outline-none' placeholder='Calculate'/>
            </div>

            <div className='w-full flex flex-col gap-2.5'>
                <div className='w-full flex justify-between'>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('1')}>1</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('2')}>2</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('3')}>3</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('=')}>=</button>
                </div>

                <div className='w-full flex justify-between'>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('4')}>4</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('5')}>5</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('6')}>6</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('+')}>+</button>
                </div>

                <div className='w-full flex justify-between'>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('7')}>7</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('8')}>8</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('9')}>9</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('-')}>-</button>
                </div>

                <div className='w-full flex justify-between'>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('0')}>0</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('.')}>.</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('/')}>/</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500  py-1.5 px-6 sm:px-9 rounded-full' type='button' onClick={()=>calculate('*')}>*</button>
                </div>

                <div className='w-full flex justify-evenly gap-2'>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 w-full rounded-full' type='button' onClick={()=>calculate('AC')}>AC</button>
                    <button className='shadow-inner shadow-orange-500 text-orange-500 py-1.5 w-full rounded-full' type='button' onClick={()=>calculate('DEL')}>DEL</button>
                </div>
            </div>
        </div>
  )
}

export default Calculater