# Client Admin Portal

## Introduction

The client admin portal is a work-in-progress application designed to allow a business to manage its clients. 

Each client has an id, a name and a description, as well as a list of other related clients.

In its current state the application allows you to:
- view a table containing the name of every client.
- view the full details of a single client.
- create a new client.

### Installation

Clone or download the project.

![image](https://user-images.githubusercontent.com/104509589/165735644-1b4879eb-d476-4a14-83df-158447389360.png)

Run `npm install` from anywhere within the project directory. 

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tasks

There are a number of small features and bugs that require your attention:

### Feature: Improve clients table styles

Acceptance criteria:
- The background-colour of all even numbered rows in the table body should be a light gray (e.g. `#eeeeee`).

### Bug: Fix font-size toggle

Reproduction steps:
- Increase or decrease the font-size using the +/- buttons in the top right corner of the page.
- Neither the numeric value displayed between the +/- buttons nor the font-size of any element on the page is updated.

Acceptance criteria:
- Toggling the font-size should update both the displayed value in the top right corner and the font-size of non-header elements on the page.

### Feature: Implement client creation 

Acceptance criteria:
- The create button should be disabled until a name has been entered (the description is optional).
- After clicking create, a new client should be created using the `createClient` method of the `ClientsService` (resetting the form to its original state and/or redirecting the user to the newly created client are outside the scope of this exercise).

### Bug: Fix related clients navigation

Reproduction steps:
- Navigate to a client from the list on the home page using the view link.
- Click any related client.
- The url updates but the previous client details are still showing.

Acceptance criteria:
- Clicking a related client should load and display the details of that client.
