export function renderHtml(content: string): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>AI Agent Contract Demo UI</title>
        </head>
        <body>
            <div align="center">
                <p>"OpenAI AI Agent Contract hosted on <a href="https://github.com/Phala-Network/ai-agent-template-openai">Phala Network</a>, an AI Coprocessor for hosting AI Agents."</p>
                <img src="https://i.imgur.com/8B3igON.png" width="600" alt="AI Agent Contract" />
                <p>${content}</p>
            </div>
        </body>
    </html>`
}


// Created a new component
type ContentType = string; 

export function newComponentRender (content: ContentType): string{
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>AI Agent Contract Demo UI by Ese Monday</title>
        </head
        <body>
            <div align="center">
                <p>"This show an OpenAI AI Agent Contract hosted on <a href="https://github.com/Phala-Network/ai-agent-template-openai">Phala Network</a>, an AI Coprocessor for hosting AI Agents."</p>
                <img src="https://i.imgur.com/8B3igON.png" width="600" alt="AI Agent Contract" />
                <p>${content}</p>
                <p> Thank you <a href="https://x.com/PhalaNetwork">Phala Network</a> for creating such advanced technology </p>
            </div>
        </body>
    </html>`

}
