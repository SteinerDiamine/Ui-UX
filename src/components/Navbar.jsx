import {appleImg, searchImg} from '../utils'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div>
          
         {['Phones' , 'Macbooks','Ipads', 'Apple watch'].map((nav,i) => (
          <div key={nav}> 
            {nav}
          </div>
         ))}
        </div>

        <div>
          <img src={searchImg} alt="" />
        </div>


      </nav>
    </header>
  )
}

export default Navbar