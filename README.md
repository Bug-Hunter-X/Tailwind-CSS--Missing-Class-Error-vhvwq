# Tailwind CSS Missing Class Error

This repository demonstrates a common error in Tailwind CSS development where a class is used that is not defined in the project's Tailwind configuration.

## Problem

The `bug.jsx` file uses the class `bg-gray-100` which isn't included in the generated CSS. This results in the class not being applied and no background color being applied.

## Solution

The `solution.jsx` file corrects the issue by either:

1. **Adding the missing color to the Tailwind configuration file (`tailwind.config.js`):** This would involve expanding the `theme.extend.colors` section to include the gray color. 
2. **Using an existing color class:** Selecting a color already present in the default configuration of TailwindCSS.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the Tailwind CSS styles (You may need to adjust this command depending on your setup).
4. Observe the result in the generated HTML.
