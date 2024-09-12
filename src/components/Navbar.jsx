import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className='flex flex-1 justify-center max-sm:hidden'>
          
        {/* The .map() function in JavaScript is used to iterate over an array and apply a function to each element of that array. It returns a new array with the results of applying the function 
        
                    const numbers = [1, 2, 3, 4];
            const doubledNumbers = numbers.map((num) => num * 2);

            console.log(doubledNumbers);  // Output: [2, 4, 6, 8]
*/}

         {navLists.map((nav,i) => (
          <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white '> 
            {nav}
          </div>
         ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
        <img src={searchImg} alt="search" width={18} height={18} />
        <img src={bagImg} alt="bag" width={18} height={18} />

        </div>



      </nav>
    </header>
  )
}

export default Navbar