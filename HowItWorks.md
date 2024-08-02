## Phala Network AI Template



[Phala Network](https://x.com/PhalaNetwork) is an execution layer for decentralized AI solutions that leverages verifiable computation to create a secure and private computing environment on the blockchain.
This is a fork from the [main repo](https://github.com/Phala-Network/ai-agent-template-redpill).




<a href="https://github.com/Phala-Network/ai-agent-template-redpill">
    <img height="320" src="./public/AI-Agent-Contract.jpg" />
    <br />
  </a>



### How it Work

This Agent template is a MINIMAL template to build an AI Agent that can be hosted on Phala Network's decentralized hosting protocol.

The entry point of the application is at [index.js](https://github.com/ESE-MONDAY/ai-agent-template-redpill/blob/main/src/index.ts)

It is designed to interact with the RedPill AI API to generate text-based responses.

#### Get a Repill AI key


    Go to https://red-pill.ai/dashboard and claim your OpenAI API Key by swapping some ETH for wGPT at https://app.uniswap.org/explore/tokens/base/0x74F62Bc1961028C22b8080961c6534f4eDD49D6C

    Video: https://youtu.be/ZoJwbLNhbWE

It accepts GET requests with query parameters for the AI model and user query.


The function processes the request, sends it to the RedPill AI API, parses the response, and returns an HTML-formatted result using the [newComponentRender function](https://github.com/ESE-MONDAY/ai-agent-template-redpill/blob/main/src/uiSupport.ts).


