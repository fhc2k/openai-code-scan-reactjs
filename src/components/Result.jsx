import { Ring } from "@uiball/loaders";
import { useMainContext } from "../context/MainContext";

const Result = () => {
    const {state} = useMainContext();

    return (
        <div className="code__data">
            <textarea
                className={`code__description ${
                    state.error && "element--error"
                }  ${state.isLoading && "element--loading"}`}
                rows="20"
                cols="60"
                placeholder={"The description will appear here"}
                value={state.error?.message || state.data || ""}
                readOnly
            />
            {state.isLoading && (
                <div className="code__spinner">
                    <Ring size={40} lineWeight={5} speed={2} color="white" />
                </div>
            )}
        </div>
    );
};

export default Result;
