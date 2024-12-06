## 1. Project Setup and Dependency Installation
**Estimated Time:** 15 mins
**Time Spent:** 15 mins

- Set up the Angular 19 project with SCSS support and signals for state management.
- Installed the necessary dependencies, including **Angular Material (MUI)** for UI components, to facilitate the development of tables, modals, and other UI elements.

---

## 2. Breweries Component
**Estimated Time:** 90 mins
**Time Spent:** 120 mins

### Tasks Completed:
- Developed the **Breweries** component with an **MUI table** to display brewery data.
- Added a **search input** for filtering the breweries.
- Created the **BreweriesService** to handle API calls and fetch data from the Open Brewery DB.
- Stored the fetched brewery data in a **signal** for state management.
- Displayed an **error message** next to the search input if an API call fails.

### Challenges and Solutions:
- **Debouncing Search Input:** Initially, I faced challenges with implementing debouncing to reduce API calls while typing. After some research, I decided to use **RxJS** for debouncing, specifically using the `debounceTime` operator. This solution ensured that the API call is made only when the user has finished typing, optimizing performance.
- **Time Spent:** The implementation of debouncing took an additional 30 minutes.

---

## 3. ModalService
**Estimated Time:** 60 mins
**Time Spent:** 90 mins

### Tasks Completed:
- Implemented the **ModalService** to manage the display of modal dialogs.
- Managed modal state and passed data to be displayed inside the modal.

### Challenges and Solutions:
- **UI Glitch with Modal Data:** Initially, the modal displayed its content outside the modal container due to a UI glitch. After investigating, I found that this issue was resolved after the first run of the modal. I plan to revisit this behavior to ensure it is consistent across different scenarios, right now the glitch is still there.
- **Time Spent:** The additional 30 minutes were spent investigating and resolving the UI glitch.

---

## 4. BreweryDetailed Component
**Estimated Time:** 60 mins
**Time Spent:** 90 mins

### Tasks Completed:
- Created the **BreweryDetailed** component, designed according to the provided mockups.
- Displayed detailed information about each brewery, including address details like:
  - Street
  - Postal Code
  - City
  - State
  - Phone Number

---

## 5. LocalStorageService
**Estimated Time:** 30 mins
**Time Spent:** 30 mins

### Tasks Completed:
- Implemented the **LocalStorageService** to manage favorite breweries.
- Created methods to store and retrieve favorite brewery IDs from **localStorage**, allowing users to persist their preferences across sessions.

---

So, the total time spent is 5 hours and 45 minutes.
