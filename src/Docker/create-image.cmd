docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probasem/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t probasem/app ../..
