import {BrowserRouter,Routes,Route} from 'react-router-dom'

import StudentLogin from './Pages/login page/StudentLogin';
import Admin from './Pages/Admin section/Admin';
import AdminLogin from './Pages/login page/AdminLogin';
import Student from './Pages/Student Section/Student';
function App() {
  const questionsFromLocal =
  JSON.parse(localStorage.getItem("questions")) || [];
  const qna = [
    {
      id: "2023-05-07T14:31:01.902",
      question: "reactqna1",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:",
      question: "reactqna2",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:01.9",
      question: "reactqna3",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:01.",
      question: "reactqna4",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
  ];
  localStorage.setItem("questions", JSON.stringify([...qna]));

  return (
    <div className="App">
  
<BrowserRouter>
<Routes>
<Route path='/' element={<StudentLogin />} />
<Route path='/adminlogin' element={<AdminLogin />} />
<Route path='/admin' element={<Admin />} />
<Route path='/student' element={<Student />} />
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
