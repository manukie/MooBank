import { Header } from "./components/Header"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"

function App() {

   return (
      <div className="App">
         <GlobalReset />
         <GlobalStyles />
         <Header />
         <main>
         </main>
      </div>
   )
}

export default App