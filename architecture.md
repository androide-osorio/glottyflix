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
    base_url: string
    poster_sizes: string[]  # repeats for every image type
  change_keys: string[]  # not important right now
```

----------------------------------;

## Side effects

### API side effects:

+ fetching an entity and saving them
+ handling API errors

### Discover Side Effects

+ when Discover suceeded, it must dispatch action to create entities
+ when it fails, an empty state component should be rendered
