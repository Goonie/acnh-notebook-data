# Animal Crossing: New Horizons Notebook Data

Conversion script for Animal Crossing: New Horizons Notebook's API

## Purpose

This script aggregates data from two Google Sheets into a set of JSON files. The Google Sheets are maintained by the Animal Crossing: New Horizons community, and contain data dumps of villagers, items, fish, bugs and more, as well as translation data. As there is currently no API available that has data available from game version 2.0 or later with its translations, I decided to write my own API.

Note: Only a selection of the Google Sheet data is converted into JSON files, as the project that uses the API is very limited.

## Original Google Sheets

Both of these Google Sheets are maintained by the Animal Crossing: New Horizons community.

[Data Spreadsheet for Animal Crossing: New Horizons](https://tinyurl.com/acnh-sheet)  
This spreadsheet contains a complete collection all villagers, items, and more.

[Animal Crossing: New Horizons Translations](https://docs.google.com/spreadsheets/d/1MMbsvDfu59OY9YBEAfHhFJ6O8vRTllNFgMrX7RBZuyI)  
This spreadsheet has translation data for game version 2.0.5, which matches up with the data from the collection sheet.

Thanks to SuperHamster of Nookipedia and AeonSake for both maintaining the data and pointing me to the Google Sheets.

## Installing the Conversion Script

Clone this repository and then run:

```zsh
bun install
```

## Running the Conversion Script

To run the script, use:

```zsh
bun start
```
