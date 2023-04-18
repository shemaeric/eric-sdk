# Design

## Classes

### Base

The Base class is written as an abstract class to serve as a template or blueprint for deriving concrete classes that implement specific functionality for making API calls. By using abstract, the class cannot be instantiated directly, but can only be extended by other classes that provide implementation for the abstract methods or properties.

This allows for a consistent structure and behavior across multiple classes that are built on top of the Base class, while also allowing for customization and specialization of the derived classes based on their specific use cases or requirements. It provides a foundation for creating our SDK by encapsulating common functionality in the abstract class, while allowing for flexibility and extensibility in the derived classes.

### MovieService

The MovieService class extends the Base class to inherit its common functionality for making HTTP requests to the API. By extending the Base class, the MovieService class can reuse the implementation of the invoke method, which is responsible for handling the actual API requests, including setting the necessary headers and processing the response.

Extending the Base class promotes code reusability and reduces duplication, as the common functionality for making API requests is centralized in the Base class. This allows the MovieService class to focus on specific movie-related functionality, such as formatting URLs and handling query parameters, while leveraging the existing implementation of the invoke method from the Base class to handle the actual API requests.

### SDK Class

SDK class represents our SDK and it uses mixins to extend its functionality with methods from the MovieService class. This approach offers benefits such as code organization, reusability, flexibility, and separation of concerns. Mixins allow for a modular and organized way of extending classes, promoting code reuse, and avoiding duplication. They also offer flexibility in extending classes without deep inheritance chains, allowing for granular control over class behavior. Separation of concerns is achieved by encapsulating related functionality in separate mixin classes, promoting modular development and easier maintenance. Overall, mixins provide a more modular, reusable, and flexible approach to extending the functionality of the SDK class.

## Filter Functionalities

### RequestQuery

The RequestQuery interface defines the structure of request query parameters for API endpoints, including sorting, pagination, filtering, and comparison operations.

### Filter Function

The `formatUrlWithQueries` function is a utility function that takes a source URL and an optional RequestQuery object as input, and formats the URL with query parameters based on the values provided in the RequestQuery object and returns the formatted URL with query parameters..

The function first initializes the url variable with the source URL. Then, it checks if the query object is provided. If not, it returns the original URL.

Next, the function appends query parameters to the url based on the values provided in the query object. It appends the sort parameter if it exists, followed by the paginate parameter if it exists.

Then, it appends filter query parameters and their corresponding filters, such as match, negateMatch, include, exclude, exists, doesNotExist, lessThan, greaterThanOrEqual, greaterThan, and lessThanOrEqual, to the url if they exist in the query object.