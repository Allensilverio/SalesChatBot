This is the v0.0 of the Sales ChatBot

1. Connect to OpenAI API
2. Get Chat Completion
3. Fine tune to become a sales chatbot
4. Connect to google sheets to get context of the business and answer based on the data on the sheet


DOCKER

Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

docker build . -t yourusername/sales-bot-app

Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built. --name names the container.

docker run -p 3000:3000 --name salesbot-app-node-container -d yourusername/sales-bot-app

Note: Every time you make a change in the app you have to build a new image

ENV File

1. Create a .env file
PORT = 3000
OPENAI_API_KEY = 'YOUR_OPEN_API_KEY'
OPENAI_ORGANIZATION_ID = 'YOUR_OPENAI_ORGANIZATION_ID'


HOW DOES THE V0.0 WORKS
1. Fine tune the model to become a seller for a product retail store.
2. It fetches the business data from a csv file like google sheets and feeds the model as context every time a request is made.









