# API Documentation

This document provides information about the APIs used in this project.

## Base URL

All URLs referenced in the documentation have the following base:

```
http://localhost:5000/api
```

The base URL represents the local development server URL.

## Endpoints

### Digital Marketing and Advertising

#### Ad Campaign Management

- **GET /ad-campaign-management**

  Returns a list of all ad campaigns.

  Example: `http://localhost:5000/api/ad-campaign-management`

- **GET /ad-campaign-management/:id**

  Returns a specific ad campaign by id.

  Example: `http://localhost:5000/api/ad-campaign-management/1`

#### SEO Optimization Tools

- **GET /seo-optimization-tools**

  Returns a list of all SEO tools.

  Example: `http://localhost:5000/api/seo-optimization-tools`

#### Social Media Marketing APIs

- **GET /social-media-marketing-apis**

  Returns a list of all social media marketing APIs.

  Example: `http://localhost:5000/api/social-media-marketing-apis`

#### Audience Targeting and Analytics

- **GET /audience-targeting-and-analytics**

  Returns a list of all audience targeting and analytics tools.

  Example: `http://localhost:5000/api/audience-targeting-and-analytics`

## Errors

The API uses the following error codes:

- Error 400: Bad Request
- Error 401: Unauthorized
- Error 403: Forbidden
- Error 404: Not Found
- Error 405: Method Not Allowed
- Error 406: Not Acceptable
- Error 500: Internal Server Error

## Status Codes

The API uses the following status codes:

- 200 OK: The request was successful.
- 201 Created: The request was successful and a resource was created.
- 204 No Content: The request was successful and there is no representation to return (i.e. the response is empty).
- 400 Bad Request: The request could not be understood or was missing required parameters.
- 401 Unauthorized: Authentication failed or user doesn't have permissions for the requested operation.
- 403 Forbidden: Authentication succeeded but authenticated user doesn't have access to the requested resource.
- 404 Not Found: A non-existent resource was requested.
- 500 Internal Server Error: An error occurred on the server.
