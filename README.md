# Title Balancer
Automatically splits a title into two visually balanced lines by inserting a `<br>` tag at the most even word boundary based on character count.

## Usage
Add an element with the selector (class="balanced-title") to your HTML.

Example:
```
<h1 class="balanced-title">This is a great title</h1>
```

## Notes
* This script modifies the innerHTML of the target element.
* Best used when loaded at the end of the `<body>`.
