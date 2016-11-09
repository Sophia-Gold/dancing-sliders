# dancing-sliders
This is a weird one...

Uses [React.createFactory](https://facebook.github.io/react/blog/2014/10/14/introducing-react-elements.html) to spawn numerous heavily styled [HTML5 input range sliders](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that modify themselves in parallel: greatly varying in number and in the process repositioning along a grid-like pattern with a slightly randomized offset, appearing as if to dance down the screen like bytecode in an ansi terminal.

**[Example here](http://sretaeper.ucoz.com/dancing-sliders/index.html)**

**[Alternate diagonal version](http://sretaeper.ucoz.com/dancing-sliders/index_diagonal.html)**

UPDATE: Included a version ported to [Om](https://github.com/omcljs/om), a React framework for ClojureScript that simplifies the development of complex component systems, leverages a language based on immutability, and adds a client server architecture for easy backend integration (with or without Clojure) that uses React's diffing algorithm to swap queries without rerendering. The code is much shorter and, although it should appear nearly identical to the diagonal version, it even seems to run smoother. **[Take a look here.](http://sretaeper.ucoz.com/dancing-sliders/cljs/index.html)** 

*This is one in a series of experiments in using functional transformations to manipulate markup and other traditionally design based GUI elements to create decontextualized user experiences.*