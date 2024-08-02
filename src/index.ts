import { Request, Response, route } from './httpSupport'
import { renderHtml, newComponentRender } from './uiSupport'

async function GET(req: Request): Promise<Response> {
    const secret = req.queries?.key ?? '';
    const openaiApiKey = req.secret?.openaiApiKey as string;
    const openAiModel = 'gpt-4o';
    const query = req.queries.chatQuery[0]  as string;
    let result = '';

    try {
        const response = await fetch('https://api.red-pill.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`,
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: `${query}` }],
                model: `${openAiModel}`,
            })
        });
        const responseData = await response.json();

        // Solved the typescript error by checking if the response data is not null and if the choices array is not empty before assigning the result.
        if (responseData && responseData.choices && responseData.choices.length > 0) {
            result = responseData.choices[0].message.content as string;
        }
        // Solve the typescript error to expect a type of any since the response is not guaranteed to be a string
    } catch (error: any) {
        console.error('Error fetching chat completion:', error);
        result = error;
    }
    // Editted the return statement to use the newComponentRender function
    return new Response(newComponentRender(result));
}

async function POST(req: Request): Promise<Response> {
    return new Response('Not Implemented')
}

export default async function main(request: string) {
    return await route({ GET, POST }, request)
}
