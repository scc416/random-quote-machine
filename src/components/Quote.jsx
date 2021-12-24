export default Quote = ({ quote, author }) => {
  return (
    <>
      <div>
        <q>{quote}</q>
      </div>
      <div className="author">— {author}</div>
    </>
  );
};
