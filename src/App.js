 
import './App.css';
import MovieCard from './MovieCard';
function App() {
  const arr = [
    {img: 'https://tse4.mm.bing.net/th?id=OIP.UFYxF7jSfrmi0f5F4C7KaAHaEo&pid=Api&P=0', title:"Avengers", year :"2017"},
    {img:'https://tse4.mm.bing.net/th?id=OIP.NLiTITf5HynllEHrqiOqRwHaEo&pid=Api&P=0', title: "terminator", year:"2019" },
    {img: 'https://tse4.mm.bing.net/th?id=OIP.MR07l1O4solR2PFgEFm4eQHaEB&pid=Api&P=0', title: "Jumanji3", year : "2020" },
    {img:'https://tse4.mm.bing.net/th?id=OIP.K_J-2AlFuwHPkN6mcXJpHAHaLF&pid=Api&P=0' ,title:"Pantera" , year : "2021"},
  ];
  console.log(arr);
  return (
    <div className="App">
       <div className="interface">
        
        <MovieCard img={arr[0].img} title={arr[0].title} year={arr[0].year}/>
        <MovieCard img={arr[1].img} title={arr[1].title} year={arr[1].year}/>
        <MovieCard img={arr[2].img} title={arr[2].title} year={arr[2].year}/>
        <MovieCard img={arr[3].img} title={arr[3].title} year={arr[3].year}/>
    
    
  </div> 
    </div>
  );
}

export default App;
