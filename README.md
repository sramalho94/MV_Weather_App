---
# Vue Weather App
---

A simple, intuitive, and responsive weather application built with Vue 3, Pinia and Vuetify.

---

## Technology Stack

---

- **Vue 3:** The progressive JavaScript framework used to build the user interface of this application.
- **Pinia:** Provides a straightforward, devtools-friendly state management for Vue applications.
- **Vuetify:** A Vue UI Library with beautifully handcrafted Material Components for responsive and mobile-first design.

---

## Application Structure

---

- `src/main.ts`: The entry point for our Vue application.
- `src/App.vue`: The root Vue component.
- `src/components`: Contains Vue components.
- `src/services`: Contains services for external API communication.
- `src/store`: Contains the Pinia store used for state management.

---

## Pinia Store

---

The application state is managed using Pinia, which provides an intuitive and easy-to-use API for state management. The app store is located in `src/store/app.ts`. It contains the state for the current weather, forecast and location, as well as the actions for fetching the current weather and forecast data from an external API.

The usage of Pinia encourages separation of concerns by dividing the store into modules, each with its own state, getters, actions, and mutations. This enhances code readability, maintainability, and testing.

---

## Vuetify for UI Components

---

Vuetify is a Vue UI Library with beautifully handcrafted Material Components. It provides a plethora of easy-to-use and customizable components out of the box. Vuetify's components are used throughout the application to provide a responsive and mobile-first design. For instance, Vuetify's Grid system is used to create a flexible layout and Vuetify's Card components are used to display weather data.

In addition to using Vuetify's components, I also utilized custom CSS for additional styling.

---

## Installation & Usage

---

To install and run this project:

1. Clone the repository: `git clone git@github.com:sramalho94/MV_Weather_App.git`

2. Install dependencies: `yarn install`

3. Run the project: `yarn dev`

---

## Acknowledgements/ Resources Used

---

For this project I used several resources throughout the development process

- Open Weather API's documentation

  - [DocLink](https://openweathermap.org/api/one-call-3)
  - I used this to structure my http requests and formatted my interfaces based on the example API responses given.

- Vuetify's Documentation

  - [DocLink](https://vuetifyjs.com/en/components/all/)
  - I used this to decide which components to use, I also used the documentation to help with styling

- Insomnia

  - I used this tool in conjunction with the Open Weather docs.
  - I made test calls to the API and used the response to structure my data.

- Pinia Documentation

  - [Doclink](https://pinia.vuejs.org/introduction.html)
  - Pinia has very helpful documentation that helped me structure my store/app.ts file.

- Composition API Documentation

  - [Doclink](https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api)
  - I used the composition API documentation as a reference. It provided inside into several useful methods and tools I used ie:

    - ref
    - computed
    - defineComponent
    - setup

---

## Contact

Stephan Dmoszynski Ramalho - stephanramalho@gmail.com
