docker stop itmofridayherobot
docker rm -f itmofridayherobot
docker rmi itmofridayherobot
docker build -t itmofridayherobot .
docker run -d --name itmofridayherobot itmofridayherobot
