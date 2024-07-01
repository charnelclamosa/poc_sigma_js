FROM klakegg/hugo:0.80.0-ext-alpine

# labels
LABEL maintainer="charnel.clamosa16@gmail.com"

EXPOSE 1313

WORKDIR /app

COPY ./ ./

WORKDIR /app/src

CMD ["server", "--themesDir", "../themes"]
