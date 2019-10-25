To Dos:

REFACTOR FOR REDUX:
[x] Folder Structure (actions/store/reducers)
[x] Map initialization and default map position/zoom converted to redux
[x]  Move countries.json into firestore
[x]  Convert Sidedrawer to redux. move logic and props for side drawer out of Map
[]  when createTrip, store reference to country in marker db entry
[]  Redo authentication


[x] User sees Map
[x] Toggleable side drawer with dynamic content
    [X] Implement Sidebar plugin
[x] Add a marker to country
[x] Clicking a marker zooms to country
[x] Zooming to a country opens side drawer
[x] Store markers in DB
[x]  Can view page listing all Markers that have been dropped
    [] Clicking on a listing on Marker page displays details of that Marker
    [] CRUD functionality for Marker views (delete, edit)
[] City specific markers are shown
    [x] Need button in sidebar to add city marker
        Steps to add city marker:
    [] CURRENT ISSUE: GO BACK LINK IN COUNTRYINFO. HOW TO MAKE REF TO LAST SELECTED COUNTRY?
    [] Clicking on city marker adjusts zoom + 2(1?)
    [] Clicking city marker empties sidebar
    [] Clicking city marker shows CRUD (ex. add category)
    [] Clicking city marker loads gallery thumbnails (by catgegory)
[x] Authentication
Stretch Goals:
[] Gallery view organized by country
[] User profiles