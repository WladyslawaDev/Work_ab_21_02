import "./App.css";

// Lessons
import Lesson18 from "./lessons/Lesson18/Lesson18";
import Lesson19 from "./lessons/Lesson19/Lesson19";


// Homeworks
import Homework19VV from "./homeworks/Homework19/Homework19_VV";

// 1. Компоненты пишутся с заглавной буквы
// 2. Компоненты должны возвращать JSX(DOM элементы - HTML теги)
function App() {
  return (
    <div className="App">
      {/* <Lesson18 /> */}
      {/* <Lesson19 /> */}
      {/* <Homework18 /> */}
      <Homework19VV/>
    </div>
  );
}

export default App;
