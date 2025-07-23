# Title Balancer
Automatically splits a title into two visually balanced lines by inserting a `<br>` tag at the most even word boundary based on character count.

## Usage
* Add an element with the selector (class="balanced-title") to your HTML.
* Set the minimum viewport width (in pixels) required to apply the balancing in line 16 (0 = apply always).

Example:
```
<h1 class="balanced-title">This is a great title</h1>
```

## Note
* Best used when loaded at the end of the `<body>`.
