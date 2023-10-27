import "./index.css";
import MainSection from "./components/MainSection";
import CodeSection from "./components/CodeSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <main className="main">
            <MainSection />
            <CodeSection />
            <Footer />
        </main>
    );
};

export default App;
