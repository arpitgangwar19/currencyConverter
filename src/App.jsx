import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './component/InputBox'
import useCurrencyInfo from './component/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyData = useCurrencyInfo(from);
  const options = Object.keys(currencyData);
  console.log(options)

  const convert = () => {
    setConvertedAmount(amount * currencyData[to])
  }

  const swap = () => {
    setTo(from);
    setFrom(to);
  // let temp = amount;
   
    setAmount(convertedAmount);
    setConvertedAmount(0);
  }
  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://ninetwonineforex.com/wp-content/uploads/2020/06/foreign-currency-exchange.jpg)` }}>


        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 background-blur-sm bg-white/30 '>

            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>

              <div className='w-full mb-2'><InputBox label="from"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => { setFrom(currency) }}
                onAmountChange={(amount)=>{setAmount(amount)}}
                selectedCurrency = {from}
                ></InputBox></div>

                <div className='relative w-full h-0.5'>
                  <button className='absolute left-1/2  -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                  >Swap</button>
                </div>



                <div className='w-full mb-2'><InputBox label="to"
                amount={convertedAmount}
                amountDisabled
                currencyOption={options}
                onCurrencyChange={(currency) => { setTo(currency) }}
               
                selectedCurrency = {to}
                ></InputBox></div>

                <button type='submit' className='w-full bg-blue-600 text-white py-3 px-5 rounded-lg'>Convert</button>
            </form>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
