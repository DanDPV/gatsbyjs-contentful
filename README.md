# GastbyJS & Contentul CMS
This project is an example about the creation of GatsbyJS pages connecting and getting info from a headless CMS called Contentful CMS.

The pages are created with build-time rendering, and the information is retrieved from graphQL.

You need to set 3 enviroment variables in a file named **.env.development**:
```GATSBY_GRAPHQL_IDE=playground``` (optional if you want GrapghQL playground)
```CONTENTFUL_SPACE_ID={your_space_id}``` (the space id contentful gives you when creating an account)
```CONTENTFUL_ACCESS_TOKEN={your_access_token}``` (the access token contentful gives you while creating an account)

You can run the project in develop mode with ```npm run develop```.

**Author:** Vicente Daniel De Paz