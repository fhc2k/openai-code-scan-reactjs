import CodeForm from "./CodeForm";
import Result from "./Result";

const CodeSection = () => {
    return (
        <section className="code__section">
            <div className="code__header">
                <h2 className="code__title">Please provide your code below</h2>
                <p>
                    Providing your code below will allow us to conduct a
                    thorough analysis, identify opportunities for improvement
                    and ensure that your project reaches its full potential.
                </p>
            </div>
            <div id="code__content" className="code__content">
                <Result />
                <CodeForm />
            </div>
        </section>
    );
};


export default CodeSection;