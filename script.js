// Redux:
const quoteLst = [
{ Quote: "Clear-sightedness, persistence, and transcendence can be excellent antidotes for ultimate peace of mind and buoyancy in life, and sometimes valuable cures against social and administrative bashing.",
  Author: "Erik Pevernagie" },
{ Quote: "Where would his torture be, indeed, if at every step the hope of succeeding upheld him?",
  Author: "Albert Camus" },
{ Quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
  Author: "Charlotte Brontë, Jane Eyre" },
{ Quote: "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
  Author: "Virginia Woolf, A Room of One's Own" },
{ Quote: "When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.",
  Author: "Nelson Mandela" },
{ Quote: "If you are going through hell, keep going.",
  Author: "Winston S. Churchill " },
{ Quote: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
  Author: "Maya Angelou " },
{ Quote: "It has been said, 'time heals all wounds.' I do not agree. The wounds remain. In time, the mind, protecting its sanity, covers them with scar tissue and the pain lessens. But it is never gone.",
  Author: "Rose Fitzgerald Kennedy " },
{ Quote: "The town was paper, but the memories were not.",
  Author: "John Green, Paper Towns " },
{ Quote: "People have only as much liberty as they have the intelligence to want and the courage to take.",
  Author: "Emma Goldman" }];


const NEWQUOTE = "NEWQUOTE";

const reducer = (state = -1, action) => {
  let newState = Math.floor(Math.random() * 10);
  while (state == newState) {
    newState = Math.floor(Math.random() * 10);
  }
  return newState;
};

const newQuote = { type: NEWQUOTE };

const store = Redux.createStore(reducer);

// React:
class Quotebox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "text" }, /*#__PURE__*/React.createElement("i", { className: "fa-xs fas fa-quote-left quotation-mark" }), quoteLst[this.props.i].Quote, /*#__PURE__*/React.createElement("i", { className: "fa-xs fas fa-quote-right quotation-mark" })), /*#__PURE__*/
      React.createElement("div", { id: "author" }, "\u2014", quoteLst[this.props.i].Author), /*#__PURE__*/
      React.createElement("footer", null, /*#__PURE__*/
      React.createElement("div", { className: "flex-container" }, /*#__PURE__*/
      React.createElement("a", {
        id: "tweet-quote",
        href: `https://twitter.com/intent/tweet?hashtags=quotes&text="${quoteLst[this.props.i].Quote}"%0—${quoteLst[this.props.i].Author}`,
        target: "_blank" }, /*#__PURE__*/
      React.createElement("i", { className: "fab fa-lg fa-twitter-square" })), /*#__PURE__*/

      React.createElement("a", {
        href: `https://t.me/share/url?url="${quoteLst[this.props.i].Quote}"&text=—${quoteLst[this.props.i].Author}`,
        target: "_blank" }, /*#__PURE__*/
      React.createElement("i", { className: "fa-lg fab fa-telegram" })), /*#__PURE__*/

      React.createElement("a", {
        href: `mailto:?subject=Quote of the Day&body="${quoteLst[this.props.i].Quote}"\n
          —${quoteLst[this.props.i].Author}`,
        target: "_blank" }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-lg fa-envelope-square" }))), /*#__PURE__*/


      React.createElement("button", {
        id: "new-quote",
        onClick: this.props.newQuote,
        className: "btn btn-default btn-dark" }, "New Quote"))));



  }}
;

// React-Redux
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const mapStateToProps = state => {
  return { i: state };
};

const mapDispatchToProps = dispatch => {
  return { newQuote: message => {
      dispatch(newQuote);
    } };

};

const Container = connect(mapStateToProps, mapDispatchToProps)(Quotebox);

class AppWrapper extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(Provider, { store: store }, /*#__PURE__*/
      React.createElement(Container, null)));


  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.getElementById('app'));