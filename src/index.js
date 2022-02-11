import './index.css'
import reportWebVitals from './reportWebVitals'
import {rerenderEntireTree} from './rerender/rerender'
import Data from './components/Data/Data'

rerenderEntireTree(Data)

reportWebVitals();