const Share = ({ quote, author }) => {
  return (
    <div className="flex-container">
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}"%0—${author}`}
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-lg fa-twitter-square"></i>
      </a>
      <a
        href={`https://t.me/share/url?url="${quote}"&text=—${author}`}
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-lg fab fa-telegram"></i>
      </a>
      <a
        href={`mailto:?subject=Quote of the Day&body="${quote}"\n
—${author}`}
        rel="noreferrer"
        target="_blank"
      >
        <i className="fas fa-lg fa-envelope-square"></i>
      </a>
    </div>
  );
};

export default Share;
