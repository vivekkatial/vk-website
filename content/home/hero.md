+++
# Hero widget.
widget = "hero"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
weight = 10  # Order that this section will appear.

title = "Vivek Katial"

# Hero image (optional). Enter filename of an image in the `static/media/` folder.
# hero_media = "hero-academic.png"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "#4bb4e3"
  # gradient_end = "#2b94c3"
  
  # Background image.
  image = "aoraki.png"  # Name of image in `static/media/`.
  image_darken = 0.1  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  image_position = "center"  # Options include `left`, `center` (default), or `right`.
  # image_parallax = true  # Use a fun parallax-like fixed background effect? true/false
  
  # Text color (true=light or false=dark).
  text_color_light = true

# Call to action links (optional).
#   Display link(s) by specifying a URL and label below. Icon is optional for `[cta]`.
#   Remove a link/note by deleting a cta/note block.
# [cta]
#   url = "https://sourcethemes.com/academic/docs/install/"
#   label = "Get Started"
#   icon_pack = "fas"
#   icon = "download"
  
# [cta_alt]
#   url = "https://sourcethemes.com/academic/"
#   label = "View Documentation"

# Note. An optional note to show underneath the links.
# [cta_note]
#   label = '<a class="js-github-release" href="https://sourcethemes.com/academic/updates" data-repo="gcushen/hugo-academic">Latest release<!-- V --></a>'
+++

PhD Candidate, University of Melbourne

# <style> 
# .wrap,
# .circle {
#   -webkit-transition: -webkit-transform 500ms linear;
#   -webkit-transform-style: preserve-3d;
#   -moz-transition: -moz-transform 500ms linear;
#   -moz-transform-style: preserve-3d;
#   width: 250px;
#   height: 250px;
#   margin: auto;
#   margin-top: 50px;
#   position: absolute;
# }
# .circle {
#   position: absolute;
#   border: 3px solid #aaaaaa;
#   border-radius: 250px;
#   margin: auto;
# }
# .circle.c2,
# .circle.center {
#   border: 2px solid #666666;
#   width: 140px;
#   height: 140px;
#   top: 55px;
#   left: 55px;
# }
# .circle.center {
#   background: #ffffff;
#   width: 30px;
#   height: 30px;
#   top: 110px;
#   left: 110px;
#   box-shadow: 0 0 5px #fff;
# }
# .wrap-electron {
#   border: 0px solid  #fff;
#   position: absolute;
#   width: 100%;
#   height: 100%;
#   -webkit-animation: electron 3s linear infinite;
#   -moz-animation: electron 3s linear infinite;
# }
# .electron {
#   width: 12px;
#   height: 12px;
#   background: #aaaaaa;
#   left: 50%;
#   margin-left: -8px;
#   border: none;
#   top: -7px;
#   -webkit-transform-origin: 50% 50%;
# }
# .c2 .wrap-electron {
#   -webkit-animation: electron 2s linear infinite;
#   -moz-animation: electron 2s linear infinite;
# }
# .c2 .electron {
#   top: -6px;
# }
# .wrap {
#   border: 0px solid #aaaaaa;
#   -webkit-animation: lateral 15s ease-in-out infinite;
#   -moz-animation: lateral 15s ease-in-out infinite;
# }
# .wrap.r {
#   -webkit-animation: lateralRevert 8s linear infinite;
#   -moz-animation: lateralRevert 8s linear infinite;
# }
# .vertical {
#   -webkit-animation: vertical 8s linear infinite;
#   -moz-animation: vertical 8s linear infinite;
# }
# .horizontal {
#   -webkit-animation: horizontalRevert 6s linear infinite;
#   -moz-animation: horizontalRevert 6s linear infinite;
# }
# .vertical.c2 {
#   -webkit-animation: vertical 4s linear infinite;
#   -moz-animation: vertical 4s linear infinite;
# }
# .horizontal.c2 {
#   -webkit-animation: horizontalRevert 3s linear infinite;
#   -moz-animation: horizontalRevert 3s linear infinite;
# }
# @-webkit-keyframes electron {
#   from {
#     -webkit-transform: rotateZ(0deg);
#   }
#   to {
#     -webkit-transform: rotateZ(360deg);
#   }
# }
# @-webkit-keyframes horizontal {
#   from {
#     -webkit-transform: rotateY(0deg);
#   }
#   to {
#     -webkit-transform: rotateY(360deg);
#   }
# }
# @-webkit-keyframes horizontalRevert {
#   from {
#     -webkit-transform: rotateY(360deg);
#   }
#   to {
#     -webkit-transform: rotateY(0deg);
#   }
# }
# @-webkit-keyframes vertical {
#   from {
#     -webkit-transform: rotateX(0deg);
#   }
#   to {
#     -webkit-transform: rotateX(360deg);
#   }
# }
# @-webkit-keyframes verticalRevert {
#   from {
#     -webkit-transform: rotateX(360deg);
#   }
#   to {
#     -webkit-transform: rotateX(0deg);
#   }
# }
# @-webkit-keyframes lateral {
#   from {
#     -webkit-transform: rotateZ(0deg);
#   }
#   to {
#     -webkit-transform: rotateZ(360deg);
#   }
# }
# @-webkit-keyframes lateralRevert {
#   from {
#     -webkit-transform: rotateZ(360deg);
#   }
#   to {
#     -webkit-transform: rotateZ(0deg);
#   }
# }
# @-moz-keyframes electron {
#   from {
#     -moz-transform: rotateZ(0deg);
#   }
#   to {
#     -moz-transform: rotateZ(360deg);
#   }
# }
# @-moz-keyframes horizontal {
#   from {
#     -moz-transform: rotateY(0deg);
#   }
#   to {
#     -moz-transform: rotateY(360deg);
#   }
# }
# @-moz-keyframes horizontalRevert {
#   from {
#     -moz-transform: rotateY(360deg);
#   }
#   to {
#     -moz-transform: rotateY(0deg);
#   }
# }
# @-moz-keyframes vertical {
#   from {
#     -moz-transform: rotateX(0deg);
#   }
#   to {
#     -moz-transform: rotateX(360deg);
#   }
# }
# @-moz-keyframes verticalRevert {
#   from {
#     -moz-transform: rotateX(360deg);
#   }
#   to {
#     -moz-transform: rotateX(0deg);
#   }
# }
# @-moz-keyframes lateral {
#   from {
#     -moz-transform: rotateZ(0deg);
#   }
#   to {
#     -moz-transform: rotateZ(360deg);
#   }
# }
# @-moz-keyframes lateralRevert {
#   from {
#     -moz-transform: rotateZ(360deg);
#   }
#   to {
#     -moz-transform: rotateZ(0deg);
#   }
# }
# </style>
# 
# <div class="container">
#   <div class="wrap">
#     <div class="circle horizontal c1">
#       <div class="wrap-electron">
#         <div class="circle electron"></div>
#       </div>
#     </div>
#     <div class="circle vertical c1">
#       <div class="wrap-electron">
#         <div class="circle electron"></div>
#       </div>
#     </div>
#   </div>
#   <div class="wrap r">
#     <div class="circle horizontal c2">
#       <div class="wrap-electron">
#         <div class="circle electron"></div>
#       </div>
#     </div>
#     <div class="circle vertical c2">
#       <div class="wrap-electron">
#         <div class="circle electron"></div>
#       </div>
#     </div>
#     <div class="circle center"></div>
#   </div>
# </div>


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

