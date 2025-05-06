# Accustoming yourself to JavaScript

**_Strict mode._** The syntax was designed to be backward compatible so that environment that do not implement the strict mode checks can still execute strict code. Strict mode is enabled in a program by adding a special string constant at the very beginning of the program:

```javascript
"use strict";
```

Similarly, you can enable strict mode in a function by placing the directive at the beginning of the function body:

```javascript
function f(x) {
  "use strict";
  // ...
}
```

>**Note** `"use strict"` is a feature that helps to write safer code and avoid common errors. It is enabled by adding the following line to the beginning of a script or function:
```javascript
"use strict"
```
**What is it for?**

1. **It prevent bad practices** : It prohibits the use undeclared variables (var, let and const)
1. **Improves performance**: Makes browsers optimize code better
1. **Prevents silent errors**: Makes JavaScript throw errors when it detects problems

**Example**
Without use strict (this does not give error, but it is a bad practice)

```javascript
name = "Lucy";
console.log(name);
```

With use strict( this will give error, because it forces you to do things right)

```javascript
"use strict"
name = "Lucy";
console.log(name);
```








