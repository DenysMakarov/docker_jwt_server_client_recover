run:
	docker run -d -p 5500:5500 -v logs:/app/volumes --rm --name jwt my-jwt

tun-dev:
	docker run \
 		-d \
 		-p 5500:5500  \
 		-v "/Users/denismakarov/Documents/Software_Engineering/STUDY/nodeJS/Express-React-jwt/server:/app" \
 	 	-v /app/node_modules \
 	 	-v logs:/app/volumes --rm --name jwt my-jwt

stop:
	docker stop jwt
