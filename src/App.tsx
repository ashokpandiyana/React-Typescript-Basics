import Button from "./components/Buttons/Button";
import StatePractice from "./components/StatePractice/StatePractice";
import ClassBasedStateProps from "./components/ClassBasedStateProps/ClassBasedStateProps";
const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Button type="primary" />
      <Button type="default" />
      <StatePractice />
      <ClassBasedStateProps name="Hello From Class Based Props" value={56} />
    </>
  );
};

export default App;
