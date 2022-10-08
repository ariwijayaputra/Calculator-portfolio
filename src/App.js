import './App.css';
import ButtonNumber from './components/buttonNumber'
import OperationButton from './components/buttonOperation';
import ButtonUtil from './components/buttonUtil';
import Screen from './components/screen';

function App() {
  return (
    <div className=' flex justify-center p-4 bg-slate-200 min-h-screen'>
      <div className=' flex flex-col text-center rounded-2xl w-[400px] shadow-md-neu h-fit'>
        {/*Screen*/}
        <Screen/>
        <div className='flex flex-row p-3'>
          {/*Button number*/}
          <div className='grid grid-cols-3 w-3/4 grid-flow-row gap-1'>
            <ButtonUtil label="AC"></ButtonUtil>
            <ButtonUtil label="&#177;"></ButtonUtil>
            <ButtonUtil label="%"></ButtonUtil>
            <ButtonNumber label="1"></ButtonNumber>
            <ButtonNumber label="2"></ButtonNumber>
            <ButtonNumber label="3"></ButtonNumber>
            <ButtonNumber label="4"></ButtonNumber>
            <ButtonNumber label="5"></ButtonNumber>
            <ButtonNumber label="6"></ButtonNumber>
            <ButtonNumber label="7"></ButtonNumber>
            <ButtonNumber label="8"></ButtonNumber>
            <ButtonNumber label="9"></ButtonNumber>
            <div className=' col-span-2'>
              <ButtonNumber label="0"></ButtonNumber>
            </div>
            <ButtonNumber label="."></ButtonNumber>
          </div>
          {/*Button Operation*/}
          <div className='grid grid-row-4 w-1/4 grid-flow-row gap-1'>
            <OperationButton label="&#247;"></OperationButton>
            <OperationButton label="&times;"></OperationButton>
            <OperationButton label="+"></OperationButton>
            <OperationButton label="&#8722;"></OperationButton>
            <OperationButton label="="></OperationButton>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
