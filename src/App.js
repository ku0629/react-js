import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/movie/:id", element: <Detail /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

// Cryptocurrency List
// const [loading, setLoading] = useState(true);
// const [coins, setCoins] = useState([]);
// const [searchName, setSearchName] = useState("Bitcoin");
// const [amount, setAmount] = useState(0);
// useEffect(() => {
//   fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => response.json())
//     .then((json) => {
//       setCoins(json);
//       setLoading(false);
//     });
// }, []);
// const [money, setMoney] = useState(0);
// const onChange = (event) => {
//   setMoney(event.target.value);
//   coins.forEach((item) => {
//     if (item.name === searchName) {
//       console.log("please" + item.quotes.USD.price);
//       setAmount(event.target.value / item.quotes.USD.price);
//     }
//   });
// };
// const select = (event) => {
//   setSearchName(event.target.value.split(" ")[0]);
//   coins.forEach((item) => {
//     if (item.name === event.target.value.split(" ")[0]) {
//       console.log("please" + item.quotes.USD.price);
//       setAmount(money / item.quotes.USD.price);
//     }
//   });
// };
// return (
//   <div>
//     <h1>Coin Party! {loading ? "" : `(${coins.length})`}</h1>
//     {loading ? (
//       <strong>loading...</strong>
//     ) : (
//       <div>
//         <label htmlFor="money">How much do you have?</label>
//         <input
//           value={money}
//           onChange={onChange}
//           min="0"
//           id="money"
//           placeholder="Money"
//           type="number"
//         ></input>
//         <br></br>
//         <br></br>
//         <select onChange={select}>
//           {coins.map((item) => {
//             return (
//               <option key={item.id}>
//                 {item.name} ({item.symbol}) : ${item.quotes.USD.price} USD
//               </option>
//             );
//           })}
//         </select>
//         {money <= 0 ? null : (
//           <h3>
//             You can buy {amount.toFixed(3)} {searchName}(s)
//           </h3>
//         )}
//       </div>
//     )}
//   </div>
// );
