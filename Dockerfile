FROM node:18-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile --ignore-scripts

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm build

FROM base
ARG PORT=8000
ENV PORT=$PORT
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/.output /app/.output
EXPOSE $PORT
CMD [ "node", ".output/server/index.mjs" ]