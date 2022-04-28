# Client Admin Portal

## Introduction

The client admin portal is a work-in-progress application for managing a business's clients. 

Each client has an id, a name and a description, as well as a list of other related clients.

In its current state the application allows you to:
- view table containing the name of every client.
- view the full details of a single client.
- create a new client.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tasks

There are a number of small features and bugs that require your attention:

### Feature: Improve clients table styles

Acceptance criteria:
- The background-colour of all even numbered rows in the table body should be a light gray (e.g. `#eeeeee`).

### Feature: Implement client creation 

Acceptance criteria:
- The submit button should be disabled until a name has been entered (the description is optional).
- After clicking submit, a new client should be created using the `createClient` method of the `ClientsService`. 

### Bug: Fix related clients navigation

Reproduction steps:
- Navigate to a client from the list on the home page using the view link.
- Click any related client.
- The url updates but the previous client details are still showing.

Acceptance criteria:
- Clicking a related client should load and display the details of that client.