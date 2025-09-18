import { SearchDropdown } from "./components/dropdownwithSearch";
import { SearchBox } from "./components/searchwithdebouce";
import { LazyLoadDemo } from "./consepts/lazyLoading";
import QueueDataStructure from "./data_structures/Queue/funcComp";
import StackDataStructure from "./data_structures/Stack/funcComp";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <StackDataStructure /> */}
      {/* <QueueDataStructure /> */}
      {/* <LazyLoadDemo/> */}
      {/* <SearchBox/> */}
      <SearchDropdown/>
    </div>
  );
}
