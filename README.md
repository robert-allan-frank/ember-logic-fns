ember-logic-fns
[![npm version](https://badge.fury.io/js/ember-logic-fns.svg)](https://badge.fury.io/js/ember-logic-fns)
[![Build Status](https://travis-ci.com/robert-allan-frank/ember-logic-fns.svg?branch=develop)](https://travis-ci.com/robert-allan-frank/ember-logic-fns)
[![codecov](https://codecov.io/gh/robert-allan-frank/ember-logic-fns/branch/develop/graph/badge.svg)](https://codecov.io/gh/robert-allan-frank/ember-logic-fns)
==============================================================================
This addon provides logical helpers for Ember templates and components.

To install:

```sh
ember install ember-logic-fns
```

Usage
------------------------------------------------------------------------------
* [`logic-and`](#logic-and)
* [`logic-equals`](#logic-equals)
* [`logic-is-empty`](#logic-is-empty)
* [`logic-is-present`](#logic-is-present)
* [`logic-not`](#logic-not)
* [`logic-not-equals`](#logic-not-equals)
* [`logic-or`](#logic-or)
* [`logic-xor`](#logic-xor)

#### `logic-and`
Performs and operation of two or more values.

```hbs
{{logic-and value1 value2 value3}}
```

#### `logic-equals`
Determine if two ore more values are logically equals.

```hbs
{{logic-equals value1 value2 value3}}
```

#### `logic-is-empty`
Determine if an value is empty. See [isEmpty()](https://api.emberjs.com/ember/release/functions/@ember%2Futils/isEmpty) for details on the isEmpty function.

```hbs
{{logic-is-empty value}}
```

#### `logic-is-present`
Determine if an value is present. See [isPresent()](https://api.emberjs.com/ember/release/functions/@ember%2Futils/isPresent) for details on the isPresent function.

```hbs
{{logic-is-present value}}
```

#### `logic-not`
Invert a boolean value

```hbs
{{logic-not value}}
```

#### `logic-not-equals`
Determine if two ore more values are logically not equals.

```hbs
{{logic-not-equals value1 value2 value3}}
```

#### `logic-or`
Performs or operation of two or more values.

```hbs
{{logic-or value1 value2 value3}}
```

#### `logic-xor`
Performs xor operation of two values.

```hbs
{{logic-xor value1 value2}}
```

Related Addons
------------------------------------------------------------------------------
* See [ember-array-fns](https://github.com/robert-allan-frank/ember-array-fns) for array based helpers.
* See [ember-datetime-fns](https://github.com/robert-allan-frank/ember-datetime-fns) for date and time based helpers.
* See [ember-intl-fns](https://github.com/robert-allan-frank/ember-intl-fns) for internationalization based helpers.
* See [ember-math-fns](https://github.com/robert-allan-frank/ember-math-fns) for math based helpers.
* See [ember-number-fns](https://github.com/robert-allan-frank/ember-number-fns) for number based helpers.
* See [ember-string-fns](https://github.com/robert-allan-frank/ember-string-fns) for string based helpers.

Compatibility
------------------------------------------------------------------------------
* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Contributing
------------------------------------------------------------------------------
See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------
This project is licensed under the [MIT License](LICENSE.md).
