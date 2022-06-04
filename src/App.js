import './App.css';
import AppMenu from '../src/commons/AppMenu'

function App() {
    return (
        <>
            <div className="row">
                {/*MENU BARS*/}
                <div className="col-md-12">

                    <AppMenu/>

                </div>
            </div>
            
            <h3>Hey Sangee</h3>
        </>
    );
}

export default App;