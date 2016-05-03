# Meerkats - The Brand Leadership Company

> At Meerkats, our mission in life is to help make free enterprise work better by helping the good businesses win and the bad ones lose. Because we believe passionately that when good businesses grow, people’s lives improve.

This project requires `node >= 4.2.x` and uses the following:
  * Jade
  * Sass
  * Foundation
  * Modernizr
  * Express
  * React
  * Babel (ES2015, react, stage-1)
  * Webpack

## Useful Atom plugins

  * [`linter`](https://atom.io/packages/linter), [`linter-eslint`](https://atom.io/packages/linter-eslint), [`linter-scss-lint`](https://atom.io/packages/linter-scss-lint), [`jsonlint`](https://atom.io/packages/jsonlint)
  * [`language-babel`](https://atom.io/packages/language-babel)
  * [`turbo-javascript`](https://atom.io/packages/turbo-javascript)
  * [`react-es6-snippets`](https://atom.io/packages/react-es6-snippets)
  * [`emmet`](https://atom.io/packages/emmet) (Convenient, but not essential)
  * [`sort-lines`](https://atom.io/packages/sort-lines) (Convenient, but not essential)
  * [`markdown-preview-plus`](https://atom.io/packages/markdown-preview-plus)
  * _Will add `mocha` and `chai` packages once this project includes tests_

## Getting started

### Clone repos

```bash
$ git clone https://github.com/programbo/wonderbase.com.au.git
```

### Install dependencies

```bash
$ npm i
```

### Project structure

```
|-- meerkats.com.au
    |-- app
    |   |-- App.js
    |   |-- components
    |   |   |-- CaseStudies.js
    |   |   |-- ExampleCaseStudy.js
    |   |   |-- Home.js
    |   |   |-- Main.js
    |   |   |-- SiteFooter.js
    |   |   |-- SiteHeader.js
    |   |   |-- Slide.js
    |   |   |-- SlideNav.js
    |   |   |-- Slides.js
    |   |   |-- Tile.js
    |   |-- config
    |   |   |-- openweathermap.js
    |   |   |-- routes.js
    |   |-- data
    |   |   |-- colors.js
    |   |   |-- slides.js
    |   |   |-- tiles.js
    |   |-- images
    |   |   |-- [project images]
    |   |-- styles
    |   |   |-- styles.scss
    |   |   |-- components
    |   |   |   |-- [project styles]
    |   |   |-- html
    |   |   |   |-- reset.scss
    |   |   |-- mixins
    |   |   |   |-- breakpoints.scss
    |   |   |   |-- buttons.scss
    |   |   |   |-- colors.scss
    |   |   |   |-- fixes.scss
    |   |   |   |-- fonts.scss
    |   |   |   |-- layout.scss
    |   |   |   |-- navigation.scss
    |   |   |   |-- typography.scss
    |   |   |-- settings
    |   |       |-- colors.scss
    |   |       |-- custom-foundatation-settings.scss
    |   |       |-- fonts.scss
    |   |-- utils
    |       |-- helpers.js
    |-- bin
    |   |-- www
    |-- routes
    |   |-- index.js
    |-- views
    |   |-- error.jade
    |   |-- index.jade
    |   |-- layout.jade
    |-- .babelrc
    |-- .eslintignore
    |-- .eslintrc
    |-- .gitignore
    |-- .scss-lint.yml
    |-- LICENSE
    |-- README.md
    |-- Requirements.md
    |-- app.js
    |-- modernizr.config.js
    |-- package.json
    |-- webpack.config.js
```

## Adding to the project

### Components

Add new components to `/app/components`. **All components should be in ES2015 class format.**

_e.g. `/app/components/MyComponent.js`_

```js
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { AnotherComponent, OptionalComponent, RepeatedComponent } from './Components';

export default class MyComponent extends React.Component {
  // Functionally equivalent to the "componentWillMount" method
  constructor(props, context) {
    // The constructor MUST begin with "super(props)"
    super(props);
    ...
  }
  // Shorthand for "this.setState({...})"
  state = {
    someStateVariable: this.props.someProperty,
    backgroundStyle: {
      backgroundImage:`url(${this.getImageData(this.props.backgroundImage)})`
    }
  }
  getComponentHeight() {
    // By placing a `refs` attribute on a component, the DOM element
    // becomes available in `this`.
    return this.myComponentRef.getBoundingClientRect().height;
  }
  // Use arrow functions for methods that access "this". Typically
  // event handlers.
  handleSomeEvent = (e) => {
    this.setState({ someStateVariable: true });
  }
  render() {
    // Use the classnames module to manipulate multiple classes
    const myComponentClasses = classNames(this.props.baseClassName, {
      [`${this.props.baseClassName}--active`]: this.state.someStateVariable
    });
    return (
      <div
        className={myComponentClasses}
        onClick={this.handleSomeEvent}
        ref={(c) => this.myComponentRef = c}
        style={this.state.backgroundStyle}>
        {this.props.children}
        <AnotherComponent something={this.props.someProperty} />
        // Only includes OptionalComponent if someStateVariable is truthy
        {this.state.someStateVariable && <OptionalComponent />}
        // Use map to create repeaters
        <div className="items">
          {
            this.props.repeatingItems.map((item, index) => {
              return (
                <RepeatedComponent itemData={item} key={index} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

// Place static methods outside of the class declaration to reduce clutter.
MyComponent.defaultProps = {
  repeatingItems: [],
  someProperty: false
};

MyComponent.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  baseClassName: PropTypes.string.isRequired,
  repeatingItems: PropTypes.array,
  someOtherProperty: PropTypes.string.isRequired,
  someProperty: PropTypes.bool
};
```

### Styles

#### Foundation

Override Foundation presets in `/app/styles/settings/custom-foundatation-settings.scss`. See `node_modules/foundation-sites/scss/settings/_settings.scss` for all available options. By default, [foundation-global-styles](http://foundation.zurb.com/sites/docs/global.html) and [foundation-grid](http://foundation.zurb.com/sites/docs/grid.html) are enabled. See the [Foundation Sites](http://foundation.zurb.com/sites/docs/) docs for additional modules and add them as required.

#### Fonts

  1. Add the required fonts, variants, and weights to [meerkats.com.au](http://www.fonts.com/web-fonts/projects).
  2. Update font groups in `/app/styles/settings/fonts.scss`.
  3. Use the font mixins - `font($name, $weight:normal, $fonts-map:$fonts)` and `font-size($size, $line-height:null)`.

#### Colors

Add the project fonts to `/app/styles/settings/colors.scss`.

#### Components

Each React component can have a corresponding style in `/app/styles/components/`. *Add the <component.scss> file to `/app/styles/styles.scss`*.

#### Modernizr

Add Modernizr [configs and features](https://raw.githubusercontent.com/Modernizr/Modernizr/master/lib/config-all.json) to `/modernizr.config.js`.

### Routes (with `react-router`)

This app is a universal (isomorphic) app. It uses the same routing config for both client and server-side rendering. New routes can be added to `/app/config/routes`. In the routing config below, the following routes are valid:

  * /
  * /case-studies
  * /case-studies/example

```js
<Route component={Main} path="/">
  <IndexRoute component={Home} />
  <Route component={CaseStudies} path="case-studies">
    <Route component={ExampleCaseStudy} path="example" />
  </Route>
</Route>
```

### Views

Views are generated from components so they can be rendered dynamically by the client or compiled on the server. In the routing config above, rendering the `/case-studies/example` route would pass `ExampleCaseStudy` into the `CaseStudies` component in `this.props.children`. Likewise, `CaseStudies` would be passed into the `Home` component in the same manner.

#### Organising components in the project structure

*TODO*

## Development builds

`$ npm run dev`
  * Live reload
  * Inlined images
  * Source maps

## Backend development builds

`$ npm run backend-dev`
  * Same as `npm run dev`
  * Uses `nodemon` for restarting the server on save

## Production builds

`$ npm run build`
  * One-off build
  * Inlined images under 100kb
  * Compression

## Testing production builds

`$ npm start`
  * Same as `npm run build`
  * Also starts an Express server
