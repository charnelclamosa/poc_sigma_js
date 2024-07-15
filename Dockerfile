FROM klakegg/hugo:0.80.0-ext-alpine

# labels
LABEL maintainer="charnel@zatonovo.com"

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 1313

CMD ["server", "--themesDir", "./themes"]
