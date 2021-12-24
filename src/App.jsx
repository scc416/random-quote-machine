import "./App.css";
import useQuoteData from "./hooks/useQuoteData";
import Quote from "./components/Quote";
import Share from "./components/Share";
import Button from "./components/Button";

const App = () => {
  const { quote, author, getRandomQuote } = useQuoteData();

  return (
    <main>
      <Quote {...{ quote, author }} />
      <footer>
        <Share {...{ quote, author }} />
        <Button newQuote={getRandomQuote} />
      </footer>
    </main>
  );
};

export default App;
