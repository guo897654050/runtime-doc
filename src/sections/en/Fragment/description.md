# Fragment

When rendering HTML structures with jsx/tsx, many scene root nodes are not necessary. Moreover, the shadowRoot interface of web components itself is the root node of a DOM subtree, which is rendered separately from the main DOM tree of the document. Omi framework can render multiple nodes without root nodes through fragment.

```tsx
<Fragment>
  <h1>Test</h1>
  <p>Test</p>
</Fragment>
```

Congratulations on learning to use fragment!