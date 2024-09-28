ARG NODE_VERSION=21

# first stage
FROM node:${NODE_VERSION}-slim as bun

ARG BUN_VERSION=1.0.36

WORKDIR /app

# Install Bun in the specified version
RUN apt update && apt install -y bash curl unzip && \
  curl https://bun.sh/install | bash -s -- bun-v${BUN_VERSION}

ENV PATH="${PATH}:/root/.bun/bin"

# second stage
FROM bun as dev

# copy file only if they exits
COPY ./web/package.json* ./
COPY ./web/bun.lockb* ./

RUN bun install -g @angular/cli
RUN bun install

EXPOSE 5173