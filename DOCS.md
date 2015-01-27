Note on CSS
-----------------------
I am a huge fan of modularization, and normally would seperate stylesheets by type (typography, elements, layout, etc.). Since this project is a demo, yet still has relatively complex structure, I have opted to group styles by page, taking advantage of the cascade to reduce class chaos.I did make a color stylesheet for quick reference. Normally my workflow includes Gulp to automate css minification and prefixing. 

Responsive design: the landing page is responsive, and so is the error page. The challenges page needs more float magic.

Note on HTML
-----------------------
An optimization that I would make would be to create a structure, with corresponding styles, that uses handlebars templating more fully. I know that there is some redundancies in my layout to accommodate floats, and will continue learning about handlebars to see if I can address that problem more smartly the next time around.

Note on Javascript
-----------------------
I noticed that the runtime of my API calls for the challenges page is less than ideal. Perhaps this can be optimized with spawn processes or through seperation of concerns with a controller-view partial model. I'm most comfortable with an MVC approach, so it was new to me to rely on routes alone. One way I would improve this is to create a controller directory, with each controller combined with their respective layout and view partials. Normally my workflow includes Gulp and Browserify to automate concatenation, uglification, and bundling. 

Note on Content
-----------------------
Water fascinates me. This weekend I went to Sutro Baths and watched the bright surf crash through the darkness of the passageway inside the cave; that made me very happy.