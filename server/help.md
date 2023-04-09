redis_url =
'redis://:7c7b28e9dd859c44f45e4873254e6e04267998454784c1ac6df8bc34cd8f931c@dokku-redis-red:6379';

postgres_url = 'postgres://postgres:cda2873072af85bc52a6d970311eaa1f@dokku-postgres-pg:5432/pg'

INSERT INTO "platform"("name", "url", "createdAt", "updatedAt", "deletedAt") VALUES ('Netlix', 'https://www.netflix.com/', DEFAULT, DEFAULT, DEFAULT) RETURNING "id", "createdAt", "updatedAt", "deletedAt";


INSERT INTO "admin_notifications"("message", "createdAt", "updatedAt", "deletedAt") VALUES ("Welcome", DEFAULT, DEFAULT, DEFAULT) RETURNING *