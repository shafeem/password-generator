import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';


function App() {
  return (
    <div className="relative w-screen h-screen">
      <div className='flex flex-col'>
        <Header />
      </div>
      <div className='mt-10'/>
      <div className='bg-gray-500 font-bold font-serif h-fit text-center flex justify-center items-center'>
        <p className=' text-white sm:text-2xl py-4'>Create strong and secure passwords to keep your account safe online.</p>
      </div>
    <div className='bg-faint-orange pt-10'>
      <Body />
    </div>
    <div className='bg-grn h-20'/>
    </div>
  );
}

export default App;
