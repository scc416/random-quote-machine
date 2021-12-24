import "./App.css";
import useQuoteData from "./hooks/useQuoteData";

const App = () => {
  const { quote, author, getRandomQuote } = useQuoteData();

  return (
    <main>
      <div id="app">
        <div id="quote-box">
          <div id="text">
            <i className="fa-xs fas fa-quote-left quotation-mark"></i>
            {quote}
            <i className="fa-xs fas fa-quote-right quotation-mark"></i>
          </div>
          <div id="author">—{author}</div>
          <footer>
            <div className="flex-container">
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}"%0—${author}`}
                target="_blank"
              >
                <i className="fab fa-lg fa-twitter-square"></i>
              </a>
              <a
                href={`https://t.me/share/url?url="${quote}"&text=—${author}`}
                target="_blank"
              >
                <i className="fa-lg fab fa-telegram"></i>
              </a>
              <a
                href={`mailto:?subject=Quote of the Day&body="${quote}"\n
      —${author}`}
                target="_blank"
              >
                <i className="fas fa-lg fa-envelope-square"></i>
              </a>
            </div>
            <button
              id="new-quote"
              onClick={() => getRandomQuote()}
              className="btn btn-default btn-dark"
            >
              New Quote
            </button>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default App;
