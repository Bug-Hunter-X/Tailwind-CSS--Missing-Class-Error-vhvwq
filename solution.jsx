```javascript
// solution.jsx
// Option 1: Use an existing color
<div className="bg-gray-200 p-4">
  <h2 className="text-xl font-bold">My Component</h2>
  <p>Some content here.</p>
</div>

// Option 2: Add color to tailwind.config.js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'gray-100': '#f7fafc', // Add this
      }
    }
  },
  plugins: [],
}
```