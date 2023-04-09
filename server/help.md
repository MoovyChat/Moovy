redis_url =
'redis://:7c7b28e9dd859c44f45e4873254e6e04267998454784c1ac6df8bc34cd8f931c@dokku-redis-red:6379';

postgres_url = 'postgres://postgres:cda2873072af85bc52a6d970311eaa1f@dokku-postgres-pg:5432/pg'

INSERT INTO "platform"("name", "url", "createdAt", "updatedAt", "deletedAt") VALUES ('Netlix', 'https://www.netflix.com/', DEFAULT, DEFAULT, DEFAULT) RETURNING "id", "createdAt", "updatedAt", "deletedAt";

5.0.3 works
5.0.4 Failed
5.0.5 failed
5.0.6 failed
5.0.7 failed
5.0.8 failed
5.0.9 failed
5.1.0 failed
5.1.1 failed
5.1.2 failed
5.1.3 failed
5.1.4 failed
5.1.5 failed
5.1.6 failed
5.1.7 failed
5.2.0 failed
5.2.1 Perfect
5.2.5 perfect
5.2.6 failed (default nginx failed)
5.2.7 ok
5.2.8 failed
5.2.9 failed
5.3.0 ok
5.3.2 failed
5.3.3 failed
5.3.4 failed
