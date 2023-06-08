import './App.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center App'>
      <h1 className='rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold bg-emerald-500'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px] mb-[15px]'>
        <Random/>
        <Tag/>
      </div>

    </div>
  );
}

export default App;
