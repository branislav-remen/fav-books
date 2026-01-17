import CssBaseline from '@mui/material/CssBaseline'
import './App.scss'
import {TwoColLayout} from "./components/two-col-layout/two-col-layout.tsx";
import {AddBookSection} from "./features/add-book/add-book-section.tsx";
import {BookListSection} from "./features/book-list/book-list-section.tsx";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {

  return (
    <Provider store={store}>
        <CssBaseline />
        <TwoColLayout
            first={<AddBookSection />}
            second={<BookListSection />}
        />
    </Provider>
  )
}

export default App
