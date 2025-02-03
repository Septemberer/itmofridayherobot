docker stop itmofridayherobot
docker rm -f itmofridayherobot
docker rmi itmofridayherobot
docker build -t itmofridayherobot .
docker run -d --restart=always --name itmofridayherobot itmofridayherobot
