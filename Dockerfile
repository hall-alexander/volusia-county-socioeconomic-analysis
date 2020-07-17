FROM node:lts

WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .

# Set Environment Variables
ENV PORT=3000
ENV NODE_ENV=development

# Set Volumes
VOLUME "/app/node_modules"

# Only necessary if you want to use a different user other than root
#USER node
#RUN chown -R node:node /app

# Install some software
RUN apt update
RUN apt -y install postgresql

# Expose port 3000 on the container
EXPOSE 3000

CMD npm start
