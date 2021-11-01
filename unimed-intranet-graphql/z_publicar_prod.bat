docker build -t apiportalmensageria .
docker image tag apiportalmensageria 10.1.2.31:5000/apiportalmensageria:prd
docker push 10.1.2.31:5000/apiportalmensageria:prd