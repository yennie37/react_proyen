import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 빈 array를 줘서 처음에 undefined 에러나지 않도록 처리.
  const [money, setMoney] = useState([]);

  const onChange = ((event) => {
    setMoney(event.target.value);
    console.log(money);
  });

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); // 한 번만 가져올거라 빈 배열 선언
  return (
    <div>     
     <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>  
     
     {loading ? (
      <strong>로딩중...</strong>
     ) :  (   
      <div>
      <input
        type="number"
        onChange = {onChange}
        value={money}
        placeholder="How much USD do you have?"  
      /> USD
            
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD =&gt; You can buy {money / coin.quotes.USD.price} {coin.symbol}
          </option>
        ))}
      </select>
      </div>
     )}
    </div>
  );
}

export default App;
