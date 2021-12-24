import "./App.css";

const App = () => {
  return (
    <main>
      <div id="app">
        <div id="quote-box">
          <div id="text">
            <i className="fa-xs fas fa-quote-left quotation-mark"></i>
            {"QUOTE"}
            <i className="fa-xs fas fa-quote-right quotation-mark"></i>
          </div>
          <div id="author">—{"Author"}</div>
          <footer>
            <div className="flex-container">
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${"QUOTE"}"%0—${"author"}`}
                target="_blank"
              >
                <i className="fab fa-lg fa-twitter-square"></i>
              </a>
              <a
                href={`https://t.me/share/url?url="${"QUOTE"}"&text=—${"author"}`}
                target="_blank"
              >
                <i className="fa-lg fab fa-telegram"></i>
              </a>
              <a
                href={`mailto:?subject=Quote of the Day&body="${"QUOTE"}"\n
      —${"Author"}`}
                target="_blank"
              >
                <i className="fas fa-lg fa-envelope-square"></i>
              </a>
            </div>
            <button
              id="new-quote"
              onClick={() => console.log("newquote")}
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
