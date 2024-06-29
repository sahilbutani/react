import "./App.css";
import Home from './home'
import {
  RecoilRoot,
  atom,
  useRecoilState,
} from "recoil";
function App() {
  return (
    <>
      <div className="app">
        <RecoilRoot>
          {/* RecoilRoot ma lakhvathi recoil method aakha app ma access thse. */}
          <h1> Character Counter </h1>
          <InputChar />
          <GetCharCount />
          <Home charAtom={charAtom}/>
          {/*  */}
        </RecoilRoot>
      </div>
    </>
  );
}

// any component ma atom change thse jeni key and default value apvi pde.
const charAtom = atom({
  key: "charAtom",
  default: 0,
});

function InputChar() {
  const [text, setText] = useRecoilState(charAtom);
  // useRecoilState thi atom ni value state ma avi ne 'text' ma store thse.
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {/* <h3>{text}</h3> */}
    </div>
  );
}

function GetCharCount() {
  const [text, setText] = useRecoilState(charAtom);
  // useRecoilState thi atom ni value ly ne text ma store kravi jethi text print kravi shkay.
  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
}



export default App;
