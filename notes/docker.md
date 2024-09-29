## You can pass environment variables to your containers with the -e (alias --env) flag.

$docker run -e xx=yy

An example from a startup script:

```
sudo docker run -d -t -i -e REDIS_NAMESPACE='staging' \
-e POSTGRES_ENV_POSTGRES_PASSWORD='foo' \
-e POSTGRES_ENV_POSTGRES_USER='bar' \
-e POSTGRES_ENV_DB_NAME='mysite_staging' \
-e POSTGRES_PORT_5432_TCP_ADDR='docker-db-1.hidden.us-east-1.rds.amazonaws.com' \
-e SITE_URL='staging.mysite.com' \
-p 80:80 \
--link redis:redis \
--name container_name dockerhub_id/image_name
```

If you have many environment variables and especially if they're meant to be secret, you can use an env-file:

```
$ docker run --env-file ./env.list ubuntu bash
```
