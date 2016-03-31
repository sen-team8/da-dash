# Coding Conventions

# 1. Introduction
Coding conventions and standards are an integral part of any software engineering project. Various software developers working on different modules of the same software could lead to ambiguity in code and understanding of a particular function. Conventions form a sort of base and guideline to keep the project as uniform as possible even with multiple programmers. It brings structure to the code and makes it synchronous. It also makes it easier for one programmer to read another programmer’s code. They are a set of guidelines which cover various aspects of a programming language such as:
- Indentation
- Comments
- Variable names
- Declarations
- White space
- Naming conventions

Following coding conventions greatly reduces the cost of maintaining the software. It improves the readability of the software which allow a programmer/engineer to understand new code quickly. It also helps manage complexity of a project.

# 2. Standards and Guidelines in React and JSX

## 2.1 Basic Rules
- Only include one React component per file
- Use JSX syntax
- Do not use React.createElement() unless the app is being initialized from a non-JSX file.

## 2.2 Class vs. React.createClass vs. Stateless
- For internal states and refs prefer using class extends React.Component over React.createClass

  ```javascript
  // bad
  const Listing = React.createClass({
    // ...
    render() {
      return <div>{this.state.hello}</div>;
    }
  });

  // good
  class Listing extends React.Component {
    // ...
    render() {
      return <div>{this.state.hello}</div>;
    }
  }
  ```

- Use normal functions over classes if there are no states or refs

  ```javascript

  // bad
  class Listing extends React.Component {
    render() {
      return <div>{this.props.hello}</div>;
    }
  }

  // bad (since arrow functions do not have a "name" property)
  const Listing = ({ hello }) => (
    <div>{hello}</div>
  );

  // good
  function Listing({ hello }) {
    return <div>{hello}</div>;
  }
  ```

## 2.3 Naming
- Use .jsx extension for React components
- Use PascalCase for filenames. For example, `WidgetToDo.jsx`
- User PascalCase for React components and camelCase for their instances

  ```javascript
  // bad
  import todoItems from './todoItems';

  // good
  import TodoItems from './TodoItems';

  // bad
  const TodoItems = <TodoItems />;

  // good
  const todoItems = <todoItems />;
  ```

- To name components, use the filename itself as the name of the component. `WidgetToDo.jsx` should have a reference name of `WidgetToDo`.

- For root components of a directory, use `index.jsx` as the filename and use the directory name as the component name.

  ```javascript
  // bad
  import Footer from './TodoItems/TodoItems';

  // bad
  import Footer from './TodoItems/index';

  // good
  import Footer from './TodoItems';
  ```

## 2.4 Declaration
- Name components by reference and not through displayName.

  ```javascript
  // bad
  export default React.createClass({
    displayName: 'TodoItems',
    // stuff goes here
  });

  // good
  export default class TodoItems extends React.Component {
  }
  ```

## 2.5 Alignment
- Follow the alignment styles for JSX.

  ```javascript
  // bad
  <Foo superLongParam="one"
       anotherSuperLongParam="two" />

  // good
  <Foo
    superLongParam="one"
    anotherSuperLongParam="two"
  />

  // if props fit in one line then keep it on the same line
  <Foo bar="bar" />

  // children get indented normally
  <Foo
    superLongParam="one"
    anotherSuperLongParam="two"
  >
    <Quux />
  </Foo>
  ```

## 2.6 Quotes
- Must use double quotes (“) for JSX attributes but single quotes (‘) for all other JS.

  ```javascript
  // bad
  <Foo bar='bar' />

  // good
  <Foo bar="bar" />

  // bad
  <Foo style={{ left: "10px" }} />

  // good
  <Foo style={{ left: '10px' }} />
  ```

## 2.7 Spacing
- Include single space in a self-closing tag

  ```javascript
  // bad
  <Foo/>

  // very bad
  <Foo                 />

  // bad
  <Foo
   />

  // good
  <Foo />
  ```

## 2.8 Props
- Use camelCase for prop names
  ```javascript
  // bad
  <Foo
    UserName="John"
    phone_number={12345678}
  />

  // good
  <Foo
    userName="John"
    phoneNumber={12345678}
  />
  ```

- If the prop is true, remove the explicit mention.

  ```javascript
  // bad
  <Foo
    hidden={true}
  />

  // good
  <Foo
    hidden
  />
  ```

## 2.9 Parentheses
- If JSX tags span more than one line, wrap using parentheses.

  ```javascript
  // bad
  render() {
    return <MyComponent className="long bod" foo="bar">
             <MyChild />
           </MyComponent>;
  }

  // good
  render() {
    return (
      <MyComponent className="long body" foo="bar">
        <MyChild />
      </MyComponent>
    );
  }

  // good, when single line
  render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
  }
  ```

## 2.10 Tags
- Always self close tags that have no children.

  ```javascript
  // bad
  <Foo className="asset"></Foo>

  // good
  <Foo className="asset" />
  ```
- If the component is multi-line, close the tag on a new line.

  ```javascript
  // bad
  <Foo
    bar="bar"
    baz="baz" />

  // good
  <Foo
    bar="bar"
    baz="baz"
  />
  ```

## 2.11 Methods
- Use arrow functions to close instead local variables.

  ```javascript
  function ItemList(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <Item
            key={item.key}
            onClick={() => doSomethingWith(item.name, index)}
          />
        ))}
      </ul>
    );
  }
  ```
- Use event handlers for the render method in the constructor.

  ```javascript
  // bad
  class extends React.Component {
    onClickDiv() {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv.bind(this)} />
    }
  }

  // good
  class extends React.Component {
    constructor(props) {
      super(props);

      this.onClickDiv = this.onClickDiv.bind(this);
    }

    onClickDiv() {
      // do stuff
    }

    render() {
      return <div onClick={this.onClickDiv} />
    }
  }
  ```

- For internal methods of a React component, do not use the underscore prefix.

  ```javascript
  // bad
  React.createClass({
    _onClickSubmit() {
      // do stuff
    },

    // other stuff
  });

  // good
  class extends React.Component {
    onClickSubmit() {
      // do stuff
    }

    // other stuff
  }
  ```

## 2.12 Ordering

  - Ordering for `class extends React.Component`:

  1. optional `static` methods
  1. `constructor`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
  1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
  1. *Optional render methods* like `renderNavigation()` or `renderProfilePicture()`
  1. `render`

  - How to define `propTypes`, `defaultProps`, `contextTypes`, etc...

    ```javascript
    import React, { PropTypes } from 'react';

    const propTypes = {
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string,
    };

    const defaultProps = {
      text: 'Hello World',
    };

    class Link extends React.Component {
      static methodsAreOk() {
        return true;
      }

      render() {
        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
      }
    }

    Link.propTypes = propTypes;
    Link.defaultProps = defaultProps;

    export default Link;
    ```

  - Ordering for `React.createClass`: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

  1. `displayName`
  1. `propTypes`
  1. `contextTypes`
  1. `childContextTypes`
  1. `mixins`
  1. `statics`
  1. `defaultProps`
  1. `getDefaultProps`
  1. `getInitialState`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
  1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
  1. *Optional render methods* like `renderNavigation()` or `renderProfilePicture()`
  1. `render`

# 3. Standards and Guidelines in Javascript
## 3.1 Variable Names
- Use camelCase for variable and function names
- Begin all names with letters.
```javascript
firstName = "Barkha";
lastName = "Bhojak";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```

## 3.1 Space Around Operators
- Put a space around operators such as =,+,-,/,* and after commas
```javascript
var x = y + z;
var values = ["Hello", "World", "Smile"];
```

## 3.2 Statement Rules
- End simple statements with semicolons
```javascript
var values = ["Hello", "World", "Smile"];
var person = {
    firstName: "Barkha",
    lastName: "Bhojak",
    eyeColor: "brown"
};
```
- Put the opening bracket at the end of the first line
- A space is necessary before the opening bracket
- The closing bracket should be placed on a new line without leading space
```javascript
function summation(a,b) {
    return a + b;
}
```

## 3.3 Object Rules
- The opening bracket should be placed on the same line as the object name
- Each property should be defined with a colon and one space between the name and value.
- Do not use quotes around numeric values
- A closing bracket should be places on the next line without elading spaces
- End the object definition with a semicolon
- Objects that are short can be written in one line using spaces between properties.
```javascript
var person = {
    firstName: "Barkha",
    lastName: "Bhojak",
    eyeColor: "brown"
};
var person = {firstName:"Barkha", lastName:"Bhojak", eyeColor:"brown"};
```

## 3.4 Line Length
- Try to avoid lines greater than 120 characters
- If it does not fit in one line, break it.

# 4. Standards and Guidelines in HTML

## 4.1 Use the correct document type
- Declare the document type as the first line of the document always

        <!DOCTYPE html>

## 4.2 Use Lowere Case Name Elements
- Avoid mixing upper and lowercase names

        <section>
            <p>This is a paragraph.</p>
        </section>

## 4.3 Close all HTML elements
- Even though it is not required, ensure closure of all elements

        <section>
            <p>This is a paragraph.</p>
             <p>This is a paragraph.</p>
        </section>

- Also close all empty elements. The slash (/) is required in XML.

        <meta charset="utf-8" />

## 4.4 Quote Attribute Values
- Use quotes if the value contains spaces. It makes it easier to read.

        <table class="table striped">

# 5. References
Airbnb React/JSX Style Guide
