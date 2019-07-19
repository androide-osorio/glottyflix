# Architecture

## Entities

+ TV Show -> "/tv/:id"
+ Movie -> "/movie/:id"
+ Configuration -> "/configuration"
+ Language -> "/configuration/language"

## Actions

+ Discover: From calling the `/discover/:entity` endpoint.
  + when called with "/tv", fetches TV Shows
  + when called with "/movies", fetches Movies

--------------------------------;

## State shape

### Entity

```yml
[entityName]:
  byID: Map<string, Entity>
  index: any[] # list of ids
  error:? any # in case there is an error fetching an entity
```

### Discover

```yml
  discover:
    query: tv | movies | all
    filters: any  # list of filters sent in the request (for now, only the language)
    results:
      tv?: any[]  # list of ids
      movies?: any[] # list of ids
```

### Configuration

```yml
configuration:
  images:
    baseUrl: string  # default to secure_base_url
    sizes:
      poster: string[]
      logo: string[]
      backdrop: string[]
      profile: string[]
      still: string[]
  error?: any # if any error happens when fetching configuration
```

----------------------------------;

## Side effects

### API side effects:

+ fetching an entity and saving them
+ handling API errors

### Discover Side Effects

+ when Discover suceeded, it must dispatch action to create entities
+ when it fails, an empty state component should be rendered
