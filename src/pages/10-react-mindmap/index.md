---
path: '/10-react-mindmap'
title: '10 React Mindmap'
draft: false
---

# React Mindmap

23 September 2017

<iframe width="840" height="590" src="https://www.youtube.com/embed/videoseries?list=PLTY2nW4jwtG8kAM9GvppsRODGFPit6GPO" frameborder="0" allowfullscreen></iframe>

[React Mindmap](https://github.com/learn-anything/react-mindmap) adalah komponen React untuk membuat mindmap. Library React Mindmap ini dibuat oleh tim dibelakang aplikasi mindmap keren [MindNode](https://mindnode.com/) dan [Learn Anything](https://learn-anything.xyz/). Contoh hasil dari penggunaan React Mindmap misalnya [seperti](https://learn-anything.xyz/web-development/javascript-libraries/react).

**Download video**: [mp4]()

**GitHub Repo**: [RandCast-MindMapper](https://github.com/rizafahmi/randcast-mindmapper)

## Instalasi

`yarn add react-mindmap`

## Cara Penggunaan

```javascript
import { Component } from 'react'
import { render } from 'react-dom'
import MindMap from 'react-mindmap'
import { nodes, connections } from './my-map.json'

class Example extends Component {
  render() {
    return (
      <MindMap
        nodes={this.props.nodes}
        connections={this.props.connections}
      />
    )
  }
}

render(
  <Example nodes={nodes} connections={connections} />,
  document.getElementById('target')
)
```

