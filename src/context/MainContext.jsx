import { useContext, createContext } from "react";
import { useState } from "react";
import openAICreate from "../services/openAI";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const initialState = {
        data: null,
        isLoading: false,
        error: null,
    };

    const [state, setState] = useState(initialState);

    const onSubmit = async (input) => {
        if (!input.trim()) {
            setState((prev) => ({
                ...prev,
                error: { message: "You must enter a code to analyze it." },
            }));

            return;
        }

        setState((prev) => ({
            ...prev,
            isLoading: true,
            error: null,
        }));

        try {
            const data = await openAICreate({
                content: input,
            });

            setState((prev) => ({
                ...prev,
                data: data.choices[0].message.content,
            }));
        } catch (error) {
            setState((prev) => ({
                ...prev,
                error,
            }));
        } finally {
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }));
        }
    };

    return (
        <MainContext.Provider value={{ state, onSubmit }}>
            {children}
        </MainContext.Provider>
    )
}

const useMainContext = () => useContext(MainContext);

export { useMainContext, MainContextProvider }