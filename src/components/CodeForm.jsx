import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import { Ring } from "@uiball/loaders";
import { useState } from "react";
import { useMainContext } from "../context/MainContext";

const CodeForm = () => {
    const { state, onSubmit } = useMainContext();
    const [input, setInput] = useState("");

    const onChange = (input) => setInput(input);

    return (
        <form>
            <AceEditor
                className="code__view"
                mode="javascript"
                theme="github_dark"
                onChange={onChange}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
            <button
                onClick={() => onSubmit(input)}
                className="button button--primary code__button"
                disabled={state.isLoading}
            >
                {state.isLoading ? (
                    <Ring size={20} lineWeight={5} speed={2} color="blue" />
                ) : (
                    <span>Send</span>
                )}
            </button>
        </form>
    );
};

export default CodeForm;
