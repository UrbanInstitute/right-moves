# right-moves

## adding a slide to the index.html (currently in /assets/package/)

- inside the new SLIDENAME.html find copy the div that cointains the class name `div-container`
- paste this into index.html beneath the next lowest `div-container`. (It should be a direct child of the `body` element) 
- give this `div-container` a unique id following this `slideXX` where XX is the number slide it is, starting with 01. 
- whatever `<a>` or button items exist (find the `<a>` with a `.html` href) , remove their `href` and instead give them a `class=move-button` and a value of `next="{{ include.next1 }}"` where the `next1` is whatever page id you want it to go to. Note that next1, next2, next3 are the options, as defined in the `index.html` include declarations.


## to do

- with jekyll, on load, each of the individual pages "onload" transitions fires... Make it so that it doesn't do this. 
- troubleshoot styles
- circulate to John, Maya, et al.
- uncomment google tag/analytics/etc
- get metas and shares from Nicole
- Publish