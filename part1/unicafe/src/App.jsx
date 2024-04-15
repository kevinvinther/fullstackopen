import { useState } from "react";
const Statistics = (props) => {
  const { good, neutral, bad } = props;

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />

          <StatisticLine text="All" value={good + neutral + bad} />
          <StatisticLine
            text="Average"
            value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
          />
          <StatisticLine
            text="Positive"
            value={good / (good + neutral + bad)}
          />
        </tbody>
      </table>
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeGood = (value) => {
    setGood(value);
  };
  const changeNeutral = (value) => {
    setNeutral(value);
  };
  const changeBad = (value) => {
    setBad(value);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => changeGood(good + 1)} text="Good" />
      <Button handleClick={() => changeNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => changeBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
