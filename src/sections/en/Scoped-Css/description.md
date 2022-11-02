# Scoped CSS

In this section, learn the style of adding local scopes to components.

## Define CSS 

```tsx
import style from './index.css'

@customElement({
  tag: 'hello-quark',
  style,
})
```

Change the code css properties by injecting the corresponding css styles.

## :host selector

The `:host` CSS pseudo class selects the root element of the shadow DOM that contains the CSS used internally. In other words, this allows you to select a custom element from its shadow dom. Because `hello-quark` is a standard custom element, so it can be selected through `:host` and set it's display to inline block, block, inline, etc.

```css
:host {
  display: inline-block;
}
```

## :host() selector

CSS pseudo class function `:host()` selects the shadow host containing the shadow DOM using this CSS (so that you can select the custom elements including it from the shadow DOM) - provided that the parameters of the function match the selected shadow host.

The simplest use is to place the class name only on some custom element instances, and then include the relevant class selector as a function parameter. It cannot be used with descendant selector expressions to select only instances of custom elements within a particular ancestor.


```css
/* Select the shadow root element only if it matches the selector parameter */
 :host(.special-custom-element) {
   font-weight: bold;
 }
 ```

The following is an example of omiu's o-button:

```css
:host {
  display: inline-block;
}

:host([block]) {
  display: block;
}
```

`:host([block])` can select the current element when `quark-button` has block attr:

```html
<quark-button block></quark-button>
```

Congratulations on learning to define local styles for components!









