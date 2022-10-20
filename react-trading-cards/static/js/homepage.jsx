'use strict';

function Homepage() {
  return (
  <div>
    <h2>Welcome, User!</h2>
    <a href="/cards">Click here to view the trading cards!</a>
    <img src="/static/img/balloonicorn.jpg" />
  </div>
  );
}

// function TradingCardContainer() {
//   return (
//     <React.Fragment>
//       {tradingCardData.map(currentCard =>
//           <p key={currentCard.id}>{currentCard.name}</p>
//       )}
//     </React.Fragment>
//   );
// }

ReactDOM.render(<Homepage />, document.querySelector('#app'));
