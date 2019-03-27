+++
date = "2019-03-26T00:00:00-07:00"
title = "Sweet Vue one-liner for inline SVGs in a component"

+++
I came across this nice technique for keeping your markup in a [Vue]( "https://vuejs.org/") app nice and clean, but still inlining the SVGs at compile-time with webpack. Because SVGs are xml, you can treat them like any other piece of markup with `html-loader` and as a result, you get nicely integrated SVG content.

    <div :key="type"  v-html="require(`!html-loader!@/assets/${type}-line.svg`)"></div>

Works super well and has the added benefit of side-stepping any preloading of SVGs you might need to do.