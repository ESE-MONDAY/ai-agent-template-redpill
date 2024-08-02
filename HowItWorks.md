## Phala Network AI Template



[Phala Network](https://x.com/PhalaNetwork) is an execution layer for decentralized AI solutions that leverages verifiable computation to create a secure and private computing environment on the blockchain.
This is a fork from the [main repo](https://github.com/Phala-Network/ai-agent-template-redpill).




<a href="https://github.com/Phala-Network/ai-agent-template-redpill">
    <img height="320" src="./public/AI-Agent-Contract.jpg" />
    <br />
  </a>



### Project Overview

This Agent template is a MINIMAL template to build an AI Agent that can be hosted on Phala Network's decentralized hosting protocol.

#### Prerequisites
-  Node.js and npm (or yarn)
-   A RedPill AI API key

Installation
1. Clone this repository:
   
    Bash

    git clone https://github.com/ESE-MONDAY/ai-agent-template-redpill.git

  

2. Install dependencies:

   
```Bash

cd ai-agent-template-redpill.
npm install

```

3. Create a .env file at the root of your project and add your RedPill AI API key:
```
    OPENAI_API_KEY=your_api_key
```

Go to https://red-pill.ai/dashboard and claim your OpenAI API Key by swapping some ETH for wGPT at https://app.uniswap.org/explore/tokens/base/0x74F62Bc1961028C22b8080961c6534f4eDD49D6C

Video: https://youtu.be/ZoJwbLNhbWE

4. Make adjustments

The entry point of the application is at [index.js](https://github.com/ESE-MONDAY/ai-agent-template-redpill/blob/main/src/index.ts)

- It is designed to interact with the RedPill AI API to generate text-based responses.

- It accepts GET requests with query parameters for the AI model and user query.

- The function processes the request, sends it to the RedPill AI API, parses the response, and returns an HTML-formatted result using the [newComponentRender function](https://github.com/ESE-MONDAY/ai-agent-template-redpill/blob/main/src/uiSupport.ts).

5. Build Agent
   ```
   npm run build

   ```

6. Test your Agent locally
```
npm run test

```
