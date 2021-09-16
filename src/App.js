import React, { useState } from "react";
import "./App.css";
import CitiesList from "./CitiesList";
import City from "./City";

function App() {
  const [cities, setCities] = useState([
    { name: "Москва", description: "Столица России" },
    { name: "Санкт-Петербург", description: "Северная столица России" },
  ]);



  const [currentIndex, SetCurrentIndex] = useState(0);

  const handlerChangeCity = (n, description) => {
    setCities(
      cities.map((city, index) => {
        if (index === n) {
          return { ...city, description };
        }
        return city;
      })
    );
  };

  const hadlerSelectCity=(n)=>SetCurrentIndex(n);

  return (
    <div className="App">
      <City cities={cities}
       onChangeCity={handlerChangeCity} 
       currentIndex={currentIndex}/>
      <CitiesList cities={cities}
      onSelectCity={hadlerSelectCity} />
    </div>
  );
}

export default App;
