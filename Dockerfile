FROM klakegg/hugo:0.80.0-ext-alpine

# labels
LABEL maintainer="charnel.clamosa16@gmail.com"

COPY . /app

WORKDIR /app/src

EXPOSE 1313

CMD ["server", "--themesDir", "../themes"]
