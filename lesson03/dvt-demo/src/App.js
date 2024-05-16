import logo from './logo.svg';
import './App.css';
import DVT_FuncDemo from './components/DVT_FuncDemo';
import DVT_ClassComp from './components/DVT_ClassComp';

function App() {
  //Khai báo biến đối tượng
  const users={
    userName:"K22cntt4",
    password:"123456a@",
    fullName:" Đàm Vĩnh ",
    lastName:"Trinh"
  }
  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2> Xin chao ,{user.fullName} {user.lastName}</h2>
  }
  return (
    <div className="App">
      {/* Biểu Thức Jsx */}
      <div>
        <p> FullName:{users.fullName}{ users.lastName}</p>
        { formatName(users)}
      </div>

      {/* su dung function component */}
      <div>
        <DVT_FuncDemo/>
        {/* su dung func_comp co props */}
        <DVT_FuncDemo userName="DVT" fullName="Đàm Vĩnh Trinh" age="19" />
      </div>
      {/* su dung class component */}
      <div>
        {/* dung khong su dung props */}
        <DVT_ClassComp/>
        {/* su dung props */}
        <DVT_ClassComp company="Fit-NTU-K22CNTT3" course="ReactJs" />
        <DVT_ClassComp company="Fit-NTU-K22CNTT4" course="ReactJs 1" />
        <DVT_ClassComp company="Fit-NTU-K22CNTT3" course="ReactJs 2" />
        <DVT_ClassComp company="Fit-NTU-K22CNTT6" course="ReactJs 3" />

      </div>
    </div>
  );
}

export default App;
