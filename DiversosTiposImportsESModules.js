export function inline() {
  console.log('Export nomeado inline')
}

export default function () {
  console.log('Export default inline')
}

//

function group() {
  console.log('Export nomeado não-inline (agrupado)')
}

function a () {}
function b () {}
function c () {}
function d () {}

function exportDefault() {
  console.log('Export default não-inline')
}

export { group, a, b, c, d }

export default exportDefault

//

```jsx
import { inline } from "./inline.js"
import defaultInline from "./inline.js"
import exportDefault, { group, a, b, c, d } from "./non-inline.js"

inline()
defaultInline()

group()
exportDefault()
```
