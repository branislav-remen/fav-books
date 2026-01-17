// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CssBaseline from '@mui/material/CssBaseline'
import './App.scss'
import {TwoColLayout} from "./components/two-col-layout/two-col-layout.tsx";
import {AddBookSection} from "./features/add-book/add-book-section.tsx";
import {BookListSection} from "./features/book-list/book-list-section.tsx";

function App() {

  return (
    <>
        <CssBaseline />
        <TwoColLayout
            first={<AddBookSection />}
            second={<BookListSection />}
        />
    </>
  )
}

export default App
