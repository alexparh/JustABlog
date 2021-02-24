# Just a blog

## What is it?

This a simple blog web app with auth, users, posts) (such as [Habr](https://habr.com/ru/feed/) or [Medium](https://medium.com/))

## What technologies the app uses?

Server:
[Nest](https://github.com/nestjs/nest) with:

- [GraphQL Code First](https://docs.nestjs.com/graphql/quick-start)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)

Cleint:
[React](https://github.com/facebook/react) (Typescript) with:

- [Apollo Client](https://www.apollographql.com/docs/react/)
- [MaterializeCSS](https://materializecss.com/)
- [React Skeleton Loading](https://www.npmjs.com/package/react-loading-skeleton)
- [Styled Components](https://styled-components.com/)

Auth:
JWT - [in memory token + not done: HttpOnly refresh token](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql)
