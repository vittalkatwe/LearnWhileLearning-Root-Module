import React, { Component } from 'react';
import './sorting.css';


import AppControls from '../components/molecules/AppControls';
import Footer from '../components/molecules/Footer';
import AppDrawer from '../components/organisms/AppDrawer';
import SortVisualizer from '../components/organisms/SortVisualizer';
import TopBar from '../components/organisms/TopBar';


import StoogeSort, {
  StoogeSortDesc,
  StoogeSortKey
} from '../algorithms/StoogeSort';

import BogoSort, {
  BogoSortDesc,
  BogoSortKey
} from '../algorithms/BogoSort';
import BubbleSort, {
  BubbleSortDesc,
  BubbleSortKey
} from '../algorithms/BubbleSort.js';
import HeapSort, {
  HeapSortDesc,
  HeapSortKey
} from '../algorithms/HeapSort';
import InsertionSort, {
  InsertionSortDesc,
  InsertionSortKey
} from '../algorithms/InsertionSort';
import MergeSort, {
  MergeSortDesc,
  MergeSortKey
} from '../algorithms/MergeSort';
import QuickSort, {
  QuickSortDesc,
  QuickSortKey
} from '../algorithms/QuickSort';
import QuickSort3, {
  QuickSort3Desc,
  QuickSort3Key
} from '../algorithms/QuickSort3';
import SelectionSort, {
  SelectionSortDesc,
  SelectionSortKey
} from '../algorithms/SelectionSort';
import ShellSort, {
  ShellSortDesc,
  ShellSortKey
} from '../algorithms/ShellSort';


class Sorting extends Component {
  state = {
    darkMode: false,
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null,
    appDrawerOpen: false
  };

  ALGORITHM = {
    'Bubble Sort': BubbleSort,
    'Selection Sort': SelectionSort,
    'Insertion Sort': InsertionSort,
    'Merge Sort': MergeSort,
    'Quick Sort': QuickSort,
    'Quick Sort 3': QuickSort3,
    'Heap Sort': HeapSort,
    'Shell Sort': ShellSort,
    'Bogo Sort':BogoSort,
    'Stooge Sort':StoogeSort
  };

  ALGORITHM_KEY = {
    'Bubble Sort': BubbleSortKey,
    'Selection Sort': SelectionSortKey,
    'Insertion Sort': InsertionSortKey,
    'Merge Sort': MergeSortKey,
    'Quick Sort': QuickSortKey,
    'Quick Sort 3': QuickSort3Key,
    'Heap Sort': HeapSortKey,
    'Shell Sort': ShellSortKey,
    'Bogo Sort':BogoSortKey,
    'Stooge Sort':StoogeSortKey
  };

  ALGORITHM_DESC = {
    'Bubble Sort': BubbleSortDesc,
    'Selection Sort': SelectionSortDesc,
    'Insertion Sort': InsertionSortDesc,
    'Merge Sort': MergeSortDesc,
    'Quick Sort': QuickSortDesc,
    'Quick Sort 3': QuickSort3Desc,
    'Heap Sort': HeapSortDesc,
    'Shell Sort': ShellSortDesc,
    'Bogo Sort':BogoSortDesc,
    'StoogeSort':StoogeSortDesc
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        trace: []
      },
      this.createTrace
    );
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  toggleAppDrawer = () => {
    this.setState((prevState) => ({
      appDrawerOpen: !prevState.appDrawerOpen
    }));
  };

  render() {
    let theme = `App`;
    if (this.state.darkMode) theme += ` App_dark`;
    if (this.state.appDrawerOpen) theme += ` App_modal_open`;

    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];

    const controls = (
      <AppControls
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        onToggleDarkMode={this.toggleDarkMode}
        darkMode={this.state.darkMode}
      />
    );

    return (
      <div className={theme}>
        
      <button className="circle-button" onClick={() => window.open('https://buymeacoffee.com/learnwhilelearning/e/272150', '_blank')}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 122.88 101.57"
        >
          <g>
            <path d="M44.97,12.84h-17.2L0,49.37L27.77,85.9h17.2L17.2,49.37L44.97,12.84L44.97,12.84z M77.91,12.84h17.2l27.77,36.53 L95.11,85.9h-17.2l27.77-36.53L77.91,12.84L77.91,12.84z M70.17,0.04l5.96,1.39c0.94,0.22,1.52,1.16,1.31,2.1l-22.5,96.69 c-0.22,0.93-1.16,1.52-2.1,1.31l-5.95-1.39c-0.94-0.22-1.52-1.16-1.31-2.1l22.5-96.69C68.3,0.42,69.24-0.17,70.17,0.04L70.17,0.04 L70.17,0.04z"/>
          </g>
        </svg>
      </button>
        <TopBar
          drawerOpen={this.state.appDrawerOpen}
          toggleDrawer={this.toggleAppDrawer}
        >
          {controls}
        </TopBar>

        <AppDrawer
          open={this.state.appDrawerOpen}
          closeDrawer={this.toggleAppDrawer}
        >
          {controls}
        </AppDrawer>

        <main className="App__Body">
          <SortVisualizer
            array={this.state.array}
            trace={this.state.trace}
            colorKey={colorKey}
            desc={desc}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Sorting
