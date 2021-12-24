import "./App.css";
import useQuoteData from "./hooks/useQuoteData";
import Quote from "./components/Quote";
import Share from "./components/Share";

const App = () => {
  const { quote, author, getRandomQuote } = useQuoteData();

  return (
    <main>
      <Quote {...{ quote, author }} />
      <footer>
        <Share {...{ quote, author }} />
        <button
          id="new-quote"
          onClick={() => getRandomQuote()}
          className="btn btn-default btn-dark"
        >
          New Quote
        </button>
      </footer>
    </main>
  );
};

export default App;
