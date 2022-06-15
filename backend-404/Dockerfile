# syntax=docker/dockerfile:1

FROM python:3.8-alpine

WORKDIR /app

COPY backend-404/requirements.txt requirements.txt

RUN apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    apk add build-base &&\
    apk add libffi-dev &&\
    pip3 install -r requirements.txt --no-cache-dir &&\
    apk --purge del .build-deps

COPY /backend-404 .

CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0" ]
