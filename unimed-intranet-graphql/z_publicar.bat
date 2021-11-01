docker login --username GabrielUnimed --password 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 ghcr.io
docker build -t apiportalmensageria .
docker image tag apiportalmensageria ghcr.io/gabrielunimed/apiportalmensageria:hom
docker push ghcr.io/gabrielunimed/apiportalmensageria:hom