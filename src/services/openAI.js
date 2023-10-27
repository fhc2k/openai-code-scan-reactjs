import openai from "../api/openai";

const openAICreate = async ({ content }) => {
    return await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    "You will be provided with a code snippet and your task will be to explain it concisely, in response you will provide an explanation of the code provided.",
            },
            {
                role: "user",
                content,
            },
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
};

export default openAICreate;






