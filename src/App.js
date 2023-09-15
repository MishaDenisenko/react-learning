import './App.css';
import {useState} from "react";
import {Header, UploadForm, ProcessingStatus, ImageDisplay, Footer} from "./components/index";

function App() {

    return (
        <div className="App">
            <Header/>
            <div className="container">
                <UploadForm/>
                <ProcessingStatus/>
                <ImageDisplay/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
