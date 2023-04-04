import React from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#333",
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(4),
  },
  card: {
    backgroundColor: "#f7f7f7",
    margin: theme.spacing(2),
  },
}));

const cssElements = [
  {
    id: 1,
    title: "color",
    description: `
      Colors are displayed combining RED, GREEN, and BLUE light.

      With CSS, colors can be specified in different ways:

By color names
As RGB values
As hexadecimal values
As HSL values (CSS3)
As HWB values (CSS4)
With the currentcolor keyword

RGB color values are supported in all browsers.

An RGB color value is specified with: rgb( RED , GREEN , BLUE ).

Each parameter defines the intensity of the color as an integer between 0 and 255.

For example, rgb(0,0,255) is rendered as blue, because the blue parameter is set to its highest value (255) and the others are set to 0.

Shades of gray are often defined using equal values for all the 3 light sources:

Hexadecimal color values are also supported in all browsers.

A hexadecimal color is specified with: #RRGGBB.

RR (red), GG (green) and BB (blue) are hexadecimal integers between 00 and FF specifying the intensity of the color.

For example, #0000FF is displayed as blue, because the blue component is set to its highest value (FF) and the others are set to 00.
      `,
  },
  {
    id: 2,
    title: "background-color",
    description: `
    The background-color property sets the background color of an element.
    The background of an element is the total size of the element, including padding and border (but not the margin).
    Specify the background color with a HEX value:
body {background-color: #92a8d1;}

Specify the background color with an RGB value:
body {background-color: rgb(201, 76, 76);}

    Specify the background color with an RGBA value:
body {background-color: rgba(201, 76, 76, 0.3);}

Specify the background color with a HSL value:
body {background-color: hsl(89, 43%, 51%);}

Specify the background color with a HSLA value:

body {background-color: hsla(89, 43%, 51%, 0.3);}
    `,
  },
  {
    id: 3,
    title: "font-size",
    description: `
    The font-size property sets the size of the text.

    Absolute size:

Sets the text to a specified size
Does not allow a user to change the text size in all browsers (bad for accessibility reasons)
Absolute size is useful when the physical size of the output is known
Relative size:

Sets the size relative to surrounding elements
Allows a user to change the text size in browser

Example
h1 {
  font-size: 40px;
}
    `,
  },
  {
    id: 4,
    title: "font-weight",
    description: `
    The font-weight property sets how thick or thin characters in text should be displayed

    Example 
    p.thicker {
  font-weight: 900;
}
p.normal {
  font-weight: normal;
}

p.thick {
  font-weight: bold;
}
    
    `,
  },
  {
    id: 5,
    title: "text-align",
    description: `
      The text-align property specifies the horizontal alignment of text in an element

      Example
Another text-align example:

h1 {
    text-align: center;
}

p.date {
    text-align: right;
}

p.main {
    text-align: justify;
}
      `,
  },
  {
    id: 6,
    title: "padding",
    description: `
    Padding is used to create space around an element's content, inside of any defined borders

    The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

CSS has properties for specifying the padding for each side of an element:

padding-top
padding-right
padding-bottom
padding-left
All the padding properties can have the following values:

length - specifies a padding in px, pt, cm, etc.
% - specifies a padding in % of the width of the containing element
inherit - specifies that the padding should be inherited from the parent element

Example
Set different padding for all four sides of a <div> element:  

div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}

Example 
div {
  padding: 25px 50px 75px 100px;
}
    `,
  },
  {
    id: 7,
    title: "margin",
    description: `
    The CSS margin properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left)

CSS has properties for specifying the margin for each side of an element:

margin-top
margin-right
margin-bottom
margin-left
All the margin properties can have the following values:

auto - the browser calculates the margin
length - specifies a margin in px, pt, cm, etc.
% - specifies a margin in % of the width of the containing element
inherit - specifies that the margin should be inherited from the parent element

Example
Set different margins for all four sides of a <p> element:

p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}

Example
Use the margin shorthand property with four values:

p {
  margin: 25px 50px 75px 100px;


    `,
  },
  {
    id: 8,
    title: "border",
    description: `
    The CSS border properties allow you to specify the style, width, and color of an element's border.

    The border-style property specifies what kind of border to display.

The following values are allowed:

dotted - Defines a dotted border
dashed - Defines a dashed border
solid - Defines a solid border
double - Defines a double border
groove - Defines a 3D grooved border. The effect depends on the border-color value
ridge - Defines a 3D ridged border. The effect depends on the border-color value
inset - Defines a 3D inset border. The effect depends on the border-color value
outset - Defines a 3D outset border. The effect depends on the border-color value
none - Defines no border
hidden - Defines a hidden border
The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).

    `,
  },
  {
    id: 9,
    title: "display",
    description: `
      The display property specifies the display behavior (the type of rendering box) of an element

      Value	Description	Play it
inline	Displays an element as an inline element (like <span>). Any height and width properties will have no effect	
block	Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width	
contents	Makes the container disappear, making the child elements children of the element the next level up in the DOM	
flex	Displays an element as a block-level flex container	
grid	Displays an element as a block-level grid container	
inline-block	Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values	
inline-flex	Displays an element as an inline-level flex container	
inline-grid	Displays an element as an inline-level grid container	
inline-table	The element is displayed as an inline-level table	
list-item	Let the element behave like a <li> element	
run-in	Displays an element as either block or inline, depending on context	
table	Let the element behave like a <table> element	
table-caption	Let the element behave like a <caption> element	
table-column-group	Let the element behave like a <colgroup> element	
table-header-group	Let the element behave like a <thead> element	
table-footer-group	Let the element behave like a <tfoot> element	
table-row-group	Let the element behave like a <tbody> element	
table-cell	Let the element behave like a <td> element	
table-column	Let the element behave like a <col> element	
table-row	Let the element behave like a <tr> element	
none	The element is completely removed	
initial	Sets this property to its default value. Read about initial
      `,
  },
  {
    id: 10,
    title: "position",
    description: `
      The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

      The position property specifies the type of positioning method used for an element.

There are five different position values:

static
relative
fixed
absolute
sticky
Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.

HTML elements are positioned static by default.

Static positioned elements are not affected by the top, bottom, left, and right properties.

An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page

An element with position: relative; is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

An element with position: sticky; is positioned based on the user's scroll position.

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed)
      `,
  },
  {
    id: 11,
    title: "float",
    description: `
    The float property specifies whether an element should float to the left, right, or not at all.

Note: Absolutely positioned elements ignore the float property!

none	The element does not float, (will be displayed just where it occurs in the text). This is default	
left	The element floats to the left of its container	
right	The element floats the right of its container	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

Example
Let an image float to the left:

img  {
  float: left;
}
    `,
  },

  {
    id: 13,
    title: "width",
    description: `
    The width property sets the width of an element.

The width of an element does not include padding, borders, or margins!

Note: The min-width and max-width properties override the width property.


Value	Description	Demo
auto	Default value. The browser calculates the width	
length	Defines the width in px, cm, etc. Read about length units	
%	Defines the width in percent of the containing block	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

Set the width of three <div> elements:

div.a {
  width: auto;
  border: 1px solid black;
}

div.b {
  width: 150px;
  border: 1px solid black;
}

div.c {
  width: 50%;
  border: 1px solid black;
}
    `,
  },
  {
    id: 14,
    title: "height",
    description: `
    The height property sets the height of an element.

The height of an element does not include padding, borders, or margins!

If height: auto; the element will automatically adjust its height to allow its content to be displayed correctly.

If height is set to a numeric value (like pixels, (r)em, percentages) then if the content does not fit within the specified height, it will overflow. How the container will handle the overflowing content is defined by the overflow property.

Note: The min-height and max-height properties override the height property.


Value	Description	Demo
auto	The browser calculates the height. This is default	
length	Defines the height in px, cm, etc. Read about length units	
%	Defines the height in percent of the containing block	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

Set the height of an element to 50% of the height of the parent element:

#parent {
  height: 100px;
}

#child {
  height: 50%;
}
div.a {
  height: auto;
  border: 1px solid black;
}
    `,
  },
  {
    id: 15,
    title: "line-height",
    description: `
    The line-height property specifies the height of a line.

Note: Negative values are not allowed.

normal	A normal line height. This is default	
number	A number that will be multiplied with the current font-size to set the line height	
length	A fixed line height in px, pt, cm, etc.	
%	A line height in percent of the current font size	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

Example
Set the line height in pixels and centimeters for different <div> elements:

div.a {
  line-height: 10px;
}
div.a {
  line-height: 0.5;
}

    `,
  },
  {
    id: 16,
    title: "text-decoration",
    description: `
      The text-decoration property specifies the decoration added to text, and is a shorthand property for:

text-decoration-line (required)
text-decoration-color
text-decoration-style
text-decoration-thickness

Value	Description
text-decoration-line	Sets the kind of text decoration to use (like underline, overline, line-through)	
text-decoration-color	Sets the color of the text decoration	
text-decoration-style	Sets the style of the text decoration (like solid, wavy, dotted, dashed, double)	
text-decoration-thickness	Sets the thickness of the decoration line	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

Example
Add more text decoration:

h1 {
  text-decoration: underline overline dotted red;
}

h2 {
  text-decoration: underline wavy blue 5px;
}
h4 {
  text-decoration: underline overline;
}

    `,
  },
  {
    id: 17,
    title: "text-transform",
    description: `
The text-transform property controls the capitalization of text.

none	No capitalization. The text renders as it is. This is default	
capitalize	Transforms the first character of each word to uppercase	
uppercase	Transforms all characters to uppercase	
lowercase	Transforms all characters to lowercase	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

    Example
Transform text in different <div> elements:

div.a {
  text-transform: uppercase;
}

div.b {
  text-transform: lowercase;
}

div.c {
  text-transform: capitalize;
}
    `,
  },
  {
    id: 18,
    title: "text-shadow",
    description: `
    The text-shadow property adds shadow to text.

This property accepts a comma-separated list of shadows to be applied to the text.


h-shadow	Required. The position of the horizontal shadow. Negative values are allowed	
v-shadow	Required. The position of the vertical shadow. Negative values are allowed	
blur-radius	Optional. The blur radius. Default value is 0	
color	Optional. The color of the shadow. Look at CSS Color Values for a complete list of possible color values	
none	Default value. No shadow	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

Text-shadow with a blur effect:

h1 {
  text-shadow: 2px 2px 8px #FF0000;
}

Text-shadow with a red and blue neon glow:

h1 {
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
}

    Example
Basic text-shadow:

h1 {
  text-shadow: 2px 2px #ff0000;
}
    `,
  },
  {
    id: 19,
    title: "text-overflow",
    description: `

    The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string.

Both of the following properties are required for text-overflow:

white-space: nowrap;
overflow: hidden;

clip	Default value. The text is clipped and not accessible	
ellipsis	Render an ellipsis ("...") to represent the clipped text	
string	Render the given string to represent the clipped text	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

     Use of the text-overflow property:

div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
Text-overflow with a hover effect (show entire text on hover):

div.a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

div.a:hover {
  overflow: visible;
}
     `,
  },
  {
    id: 20,
    title: "overflow",
    description: `
    The CSS overflow property controls what happens to content that is too big to fit into an area.
    
    The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

visible - Default. The overflow is not clipped. The content renders outside the element's box
hidden - The overflow is clipped, and the rest of the content will be invisible
scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
auto - Similar to scroll, but it adds scrollbars only when necessary
Note: The overflow property only works for block elements with a specified height.

By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:

With the hidden value, the overflow is clipped, and the rest of the content is hidden:

Setting the value to scroll, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):  

The auto value is similar to scroll, but it adds scrollbars only when necessary:

The overflow-x and overflow-y properties specifies whether to change the overflow of content just horizontally or vertically (or both):

overflow-x specifies what to do with the left/right edges of the content.
overflow-y specifies what to do with the top/bottom edges of the content.


Property	Description
overflow	Specifies what happens if content overflows an element's box
overflow-wrap	Specifies whether or not the browser can break lines with long words, if they overflow its container
overflow-x	Specifies what to do with the left/right edges of the content if it overflows the element's content area
overflow-y	Specifies what to do with the top/bottom edges of the content if it overflows the element's content area
    `,
  },
  {
    id: 21,
    title: "background-image",
    description: `
    The background-image property sets one or more background images for an element.

By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.

Tip: The background of an element is the total size of the element, including padding and border (but not the margin).

Tip: Always set a background-color to be used if the image is unavailable.

url('URL')	The URL to the image. To specify more than one image, separate the URLs with a comma	
none	No background image will be displayed. This is default	
conic-gradient()	Sets a conic gradient as the background image. Define at least two colors	
linear-gradient()	Sets a linear gradient as the background image. Define at least two colors (top to bottom)	
radial-gradient()	Sets a radial gradient as the background image. Define at least two colors (center to edges)	
repeating-conic-gradient()	Repeats a conic gradient	
repeating-linear-gradient()	Repeats a linear gradient	
repeating-radial-gradient()	Repeats a radial gradient	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

The repeating-radial-gradient() function is used to repeat radial gradients:

Sets a radial-gradient (three colors) as a background image for a <div> element:

Sets a radial-gradient (two colors) as a background image for a <div> element:
    `,
  },
  {
    id: 22,
    title: "background-repeat",
    description: `
    The background-repeat property sets if/how a background image will be repeated.

By default, a background-image is repeated both vertically and horizontally.

Tip: The background image is placed according to the background-position property. If no background-position is specified, the image is always placed at the element's top left corner.

repeat	The background image is repeated both vertically and horizontally.  The last image will be clipped if it does not fit. This is default	
repeat-x	The background image is repeated only horizontally	
repeat-y	The background image is repeated only vertically	
no-repeat	The background-image is not repeated. The image will only be shown once	
space	The background-image is repeated as much as possible without clipping. The first and last image is pinned to either side of the element, and whitespace is distributed evenly between the images	
round	The background-image is repeated and squished or stretched to fill the space (no gaps)	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit
    `,
  },
  {
    id: 23,
    title: "background-position",
    description: `
    The background-position property sets the starting position of a background image.

Tip: By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
left top
left center
left bottom
right top
right center
right bottom
center top
center center
center bottom	If you only specify one keyword, the other value will be "center"	
x% y%	The first value is the horizontal position and the second value is the vertical. The top left corner is 0% 0%. The right bottom corner is 100% 100%. If you only specify one value, the other value will be 50%. Default value is: 0% 0%	
xpos ypos	The first value is the horizontal position and the second value is the vertical. The top left corner is 0 0. Units can be pixels (0px 0px) or any other CSS units. If you only specify one value, the other value will be 50%. You can mix % and positions	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit
    `,
  },
  {
    id: 24,
    title: "background-size",
    description: `
    The background-size property specifies the size of the background images.

There are four different syntaxes you can use with this property: the keyword syntax ("auto", "cover" and "contain"), the one-value syntax (sets the width of the image (height becomes "auto"), the two-value syntax (first value: width of the image, second value: height), and the multiple background syntax (separated with comma).

auto	Default value. The background image is displayed in its original size	
length	Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto". Read about length units	
percentage	Sets the width and height of the background image in percent of the parent element. The first value sets the width, the second value sets the height. If only one value is given, the second is set to "auto"	
cover	Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges	
contain	Resize the background image to make sure the image is fully visible	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

Here we have two background images. We specify the size of the first background image with "contain", and the second background-image with "cover":

    `,
  },
  {
    id: 25,
    title: "background-attachment",
    description: `
     The background-attachment property is specified as one of the keyword values from the list below.
The background-attachment property sets whether a background image scrolls with the rest of the page, or is fixed.
Values
fixed
The background is fixed relative to the viewport. Even if an element has a scrolling mechanism, the background doesn't move with the element. (This is not compatible with background-clip: text.)

local
The background is fixed relative to the element's contents. If the element has a scrolling mechanism, the background scrolls with the element's contents, and the background painting area and background positioning area are relative to the scrollable area of the element rather than to the border framing them.

scroll
The background is fixed relative to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)

Value	Description
scroll	The background image will scroll with the page. This is default
fixed	The background image will not scroll with the page
local	The background image will scroll with the element's contents
initial	Sets this property to its default value. Read about initial
inherit	Inherits this property from its parent element. Read about inherit
     `,
  },
  {
    id: 26,
    title: "background-origin",
    description: `
    The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding. 
    
    The background-origin property specifies the origin position (the background positioning area) of a background image.

Note: This property has no effect if background-attachment is "fixed".

padding-box	Default value. The background image starts from the upper left corner of the padding edge	
border-box	The background image starts from the upper left corner of the border	
content-box	The background image starts from the upper left corner of the content	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

border-box
The background is positioned relative to the border box.

padding-box
The background is positioned relative to the padding box.

content-box
The background is positioned relative to the content box.
    
    `,
  },
  {
    id: 27,
    title: "background-clip",
    description: `
    
    The background-clip property defines how far the background (color or image) should extend within an element

    The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

    border-box	Default value. The background extends behind the border	
padding-box	The background extends to the inside edge of the border	
content-box	The background extends to the edge of the content box	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

If the element has no background-image or background-color, this property will only have a visual effect when the border has transparent regions or partially opaque regions (due to border-style or border-image); otherwise, the border masks the difference.
border-box
The background extends to the outside edge of the border (but underneath the border in z-ordering).

padding-box
The background extends to the outside edge of the padding. No background is drawn beneath the border.

content-box
The background is painted within (clipped to) the content box.

text
The background is painted within (clipped to) the foreground text.
    `,
  },
  {
    id: 28,
    title: "box-shadow",
    description: `
    The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

    The box-shadow property attaches one or more shadows to an element.

    The box-shadow property enables you to cast a drop shadow from the frame of almost any element. If a border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top).

Box-shadow generator is an interactive tool allowing you to generate a box-shadow.

Two, three, or four <length> values.
If only two values are given, they are interpreted as <offset-x> and <offset-y> values.
If a third value is given, it is interpreted as a <blur-radius>.
If a fourth value is given, it is interpreted as a <spread-radius>.
Optionally, the inset keyword.
Optionally, a <color> value.
To specify multiple shadows, provide a comma-separated list of shadows.

inset
If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content). The presence of the inset keyword changes the shadow to one inside the frame (as if the content was debossed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.

<offset-x>
The <length> value specifies the horizontal distance. Negative values place the shadow to the left of the element.

<offset-y>
The <length> values specifies the vertical distance. Negative values place the shadow above the element.

If both <offset-x> and <offset-y> are set to 0, the shadow is placed behind the element (and may generate a blur effect if <blur-radius> and/or <spread-radius> is set).

<blur-radius>
This is a third <length> value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp). The specification does not include an exact algorithm for how the blur radius should be calculated, however, it does elaborate as follows:

…for a long, straight shadow edge, this should create a color transition the length of the blur distance that is perpendicular to and centered on the shadow's edge, and that ranges from the full shadow color at the radius endpoint inside the shadow to fully transparent at the endpoint outside it.

<spread-radius>
This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element).

<color>
See <color> values for possible keywords and notations. If not specified, it defaults to currentcolor.

Interpolation
    `,
  },
  {
    id: 29,
    title: "text-align-last",
    description: `
      The text-align-last CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

      auto
The affected line is aligned per the value of text-align, unless text-align is justify, in which case the effect is the same as setting text-align-last to start.

start
The same as left if direction is left-to-right and right if direction is right-to-left.

end
The same as right if direction is left-to-right and left if direction is right-to-left.

left
The inline contents are aligned to the left edge of the line box.

right
The inline contents are aligned to the right edge of the line box.

center
The inline contents are centered within the line box.

justify
The text is justified. Text should line up their left and right edges to the left and right content edges of the paragraph.
The text-align-last property specifies how to align the last line of a text.

Notice that the text-align-last property sets the alignment for all last lines within the selected element. So, if you have a <div> with three paragraphs in it, text-align-last will apply to the last line of EACH of the paragraphs. To use text-align-last on only the last paragraph in the container, you can use :last child, see example below.

Note: In Edge prior 79, the text-align-last property only works on text that has "text-align: justify".
      `,
  },
  {
    id: 30,
    title: "word-wrap",
    description: `
     
    The word-wrap property allows long words to be able to be broken and wrap onto the next line.

    normal	Break words only at allowed break points. This is default	
break-word	Allows unbreakable words to be broken	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit

The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

normal
Use the default line break rule.

break-all
To prevent overflow, word breaks should be inserted between any two characters (excluding Chinese/Japanese/Korean text).

keep-all
Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal.

break-word Deprecated
Has the same effect as word-break: normal and overflow-wrap: anywhere, regardless of the actual value of the overflow-wrap property.
     `,
  },
  {
    id: 31,
    title: "word-break",
    description: `
    normal
Use the default line break rule.

break-all
To prevent overflow, word breaks should be inserted between any two characters (excluding Chinese/Japanese/Korean text).

keep-all
Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal.

break-word Deprecated
Has the same effect as word-break: normal and overflow-wrap: anywhere, regardless of the actual value of the overflow-wrap property.

The word-break property specifies how words should break when reaching the end of a line.

normal	Default value. Uses default line break rules	
break-all	To prevent overflow, word may be broken at any character	
keep-all 	Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as value "normal"	
break-word	To prevent overflow, word may be broken at arbitrary points	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit


    `,
  },
  {
    id: 32,
    title: "letter-spacing",
    description: `
    The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together.

    The letter-spacing property increases or decreases the space between characters in a text.

    
Value	Description	Demo
normal	Defines normal space between characters. This is default	
length	Defines a length that is used as the space between characters (negative values are also allowed). Read about length units	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit
    `,
  },
  {
    id: 33,
    title: "text-indent",
    description: `
    The text-indent CSS property sets the length of empty space (indentation) that is put before lines of text in a block.

    <length>
Indentation is specified as an absolute <length>. Negative values are allowed. See <length> values for possible units.

<percentage>
Indentation is a <percentage> of the containing block's width.

each-line
Indentation affects the first line of the block container as well as each line after a forced line break, but does not affect lines after a soft wrap break.

hanging
Inverts which lines are indented. All lines except the first line will be indented.

A common typographic practice when paragraph indentation is present is to skip the indentation for the first paragraph. As the The Chicago Manual of Style puts it, "the first line of text following a subhead may begin flush left or be indented by the usual paragraph indention."

The text-indent property specifies the indentation of the first line in a text-block.

Note: Negative values are allowed. The first line will be indented to the left if the value is negative.

length	Defines a fixed indentation in px, pt, cm, em, etc. Default value is 0. Read about length units	
%	Defines the indentation in % of the width of the parent element	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit
    `,
  },
  {
    id: 34,
    title: "vertical-align",
    description: `
    The vertical-align property sets the vertical alignment of an element.

baseline	The element is aligned with the baseline of the parent. This is default	
length	Raises or lower an element by the specified length. Negative values are allowed. Read about length units	
%	Raises or lower an element by a percent of the "line-height" property. Negative values are allowed	
sub	The element is aligned with the subscript baseline of the parent	
super	The element is aligned with the superscript baseline of the parent	
top	The element is aligned with the top of the tallest element on the line	
text-top	The element is aligned with the top of the parent element's font	
middle	The element is placed in the middle of the parent element	
bottom	The element is aligned with the lowest element on the line	
text-bottom	The element is aligned with the bottom of the parent element's font	
initial	Sets this property to its default value. Read about initial	
inherit	Inherits this property from its parent element. Read about inherit
    `,
  },
  {
    id: 35,
    title: "z-index",
    description: `
    The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.

    For a positioned box (that is, one with any position other than static), the z-index property specifies:

The stack level of the box in the current stacking context.
Whether the box establishes a local stacking context.

auto
The box does not establish a new local stacking context. The stack level of the generated box in the current stacking context is 0.

<integer>
This <integer> is the stack level of the generated box in the current stacking context. The box also establishes a local stacking context. This means that the z-indexes of descendants are not compared to the z-indexes of elements outside this element.
    `,
  },
  {
    id: 36,
    title: "opacity",
    description: `
    The opacity property specifies the opacity/transparency of an element.

    The opacity property can take a value from 0.0 - 1.0. The lower the value, the more transparent:  

    The opacity property is often used together with the :hover selector to change the opacity on mouse-over:

    The first CSS block is similar to the code in Example 1. In addition, we have added what should happen when a user hovers over one of the images. In this case we want the image to NOT be transparent when the user hovers over it. The CSS for this is opacity:1;.

When the mouse pointer moves away from the image, the image will be transparent again.

An example of reversed hover effect:

When using the opacity property to add transparency to the background of an element, all of its child elements inherit the same transparency. This can make the text inside a fully transparent element hard to read:

If you do not want to apply opacity to child elements, like in our example above, use RGBA color values. The following example sets the opacity for the background color and not the text:


    `,
  },
  {
    id: 37,
    title: "transform",
    description: `
    The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

    If the property has a value different than none, a stacking context will be created. In that case, the element will act as a containing block for any position: fixed; or position: absolute; elements that it contains.

    The transform property may be specified as either the keyword value none or as one or more <transform-function> values.

If perspective() is one of multiple function values, it must be listed first.

Values
<transform-function>
One or more of the CSS transform functions to be applied. The transform functions are multiplied in order from left to right, meaning that composite transforms are effectively applied in order from right to left.

none
Specifies that no transform should be applied.

Scaling/zooming animations are problematic for accessibility, as they are a common trigger for certain types of migraine. If you need to include such animations on your website, you should provide a control to allow users to turn off animations, preferably site-wide.

Also, consider making use of the prefers-reduced-motion media feature — use it to write a media query that will turn off animations if the user has reduced animation specified in their system preferences.
    `,
  },
  {
    id: 38,
    title: "transition",
    description: `
    CSS transitions allows you to change property values smoothly, over a given duration

    In this chapter you will learn about the following properties:

transition
transition-delay
transition-duration
transition-property
transition-timing-function

To create a transition effect, you must specify two things:

the CSS property you want to add an effect to
the duration of the effect
Note: If the duration part is not specified, the transition will have no effect, because the default value is 0.

The following example shows a 100px * 100px red <div> element. The <div> element has also specified a transition effect for the width property, with a duration of 2 seconds:

The following example adds a transition effect for both the width and height property, with a duration of 2 seconds for the width and 4 seconds for the height:

The transition-timing-function property specifies the speed curve of the transition effect.

The transition-timing-function property can have the following values:

ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
linear - specifies a transition effect with the same speed from start to end
ease-in - specifies a transition effect with a slow start
ease-out - specifies a transition effect with a slow end
ease-in-out - specifies a transition effect with a slow start and end
cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function
The following example shows some of the different speed curves that can be used:
    `,
  },
  {
    id: 39,
    title: "cursor",
    description: `
    The cursor CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.

The cursor setting should inform users of the mouse operations that can be performed at the current location, including: text selection, activating help or context menus, copying content, resizing tables, and so on. You can specify either the type of cursor using a keyword, or load a specific icon to use (with optional fallback images and mandatory keyword as a final fallback)

The cursor property is specified as zero or more <url> values, separated by commas, followed by a single mandatory keyword value. Each <url> should point to an image file. The browser will try to load the first image specified, falling back to the next if it can't, and falling back to the keyword value if no images could be loaded (or if none were specified).

Each <url> may be optionally followed by a pair of space-separated numbers, which set the <x> and <y> coordinates of the cursor's hotspot relative to the top-left corner of the image.

Values
<url> Optional
A url() or a comma separated list url(), url(), …, pointing to an image file. More than one url() may be provided as fallbacks, in case some cursor image types are not supported. A non-URL fallback (one or more of the keyword values) must be at the end of the fallback list.

<x>, <y> Optional
Optional x- and y-coordinates indicating the cursor hotspot; the precise position within the cursor that is being pointed to.

The numbers are in units of image pixels. They are relative to the top left corner of the image, which corresponds to "0 0", and are clamped within the boundaries of the cursor image. If these values are not specified, they may be read from the file itself, and will otherwise default to the top-left corner of the image.

keyword
A keyword value must be specified, indicating either the type of cursor to use, or the fallback cursor to use if all specified icons fail to load.

The available keywords are listed in the table below. Other than none, which means no cursor, there is an image showing how the cursors used to be rendered. You can hover your mouse over the table rows to see the effect of the different cursor keyword values on your browser today.
    `,
  },
  {
    id: 40,
    title: "user-select",
    description: `
    The user-select property specifies whether the text of an element can be selected.

In web browsers, if you double-click on some text it will be selected/highlighted. This property can be used to prevent this.

auto	Default. Text can be selected if the browser allows it	
none	Prevent text selection	
text	The text can be selected by the user	
all	Text selection is made with one click instead of a double-click


    `,
  },
  {
    id: 41,
    title: "pointer-events",
    description: `
     The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.

     The pointer-events property is specified as a single keyword chosen from the list of values below.

     auto
The element behaves as it would if the pointer-events property were not specified. In SVG content, this value and the value visiblePainted have the same effect.

none
The element is never the target of pointer events; however, pointer events may target its descendant elements if those descendants have pointer-events set to some other value. In these circumstances, pointer events will trigger event listeners on this parent element as appropriate on their way to/from the descendant during the event capture/bubble phases.
visiblePainted
SVG only (experimental for HTML). The element can only be the target of a pointer event when the visibility property is set to visible and e.g. when a mouse cursor is over the interior (i.e., 'fill') of the element and the fill property is set to a value other than none, or when a mouse cursor is over the perimeter (i.e., 'stroke') of the element and the stroke property is set to a value other than none.

visibleFill
SVG only. The element can only be the target of a pointer event when the visibility property is set to visible and when e.g. a mouse cursor is over the interior (i.e., fill) of the element. The value of the fill property does not affect event processing.

visibleStroke
SVG only. The element can only be the target of a pointer event when the visibility property is set to visible and e.g. when the mouse cursor is over the perimeter (i.e., stroke) of the element. The value of the stroke property does not affect event processing.

visible
SVG only (experimental for HTML). The element can be the target of a pointer event when the visibility property is set to visible and e.g. the mouse cursor is over either the interior (i.e., fill) or the perimeter (i.e., stroke) of the element. The values of the fill and stroke do not affect event processing.

painted
SVG only (experimental for HTML). The element can only be the target of a pointer event when e.g. the mouse cursor is over the interior (i.e., 'fill') of the element and the fill property is set to a value other than none, or when the mouse cursor is over the perimeter (i.e., 'stroke') of the element and the stroke property is set to a value other than none. The value of the visibility property does not affect event processing.

fill
SVG only. The element can only be the target of a pointer event when the pointer is over the interior (i.e., fill) of the element. The values of the fill and visibility properties do not affect event processing.

stroke
SVG only. The element can only be the target of a pointer event when the pointer is over the perimeter (i.e., stroke) of the element. The values of the stroke and visibility properties do not affect event processing.

all
SVG only (experimental for HTML). The element can only be the target of a pointer event when the pointer is over the interior (i.e., fill) or the perimeter (i.e., stroke) of the element. The values of the fill, stroke, and visibility properties do not affect event processing.
     `,
  },
  {
    id: 42,
    title: "resize",
    description: `
      The resize CSS property sets whether an element is resizable, and if so, in which directions.

      resize does not apply to the following:

Inline elements
Block elements for which the overflow property is set to visible
The resize property is specified as a single keyword value from the list below.

Values
none
The element offers no user-controllable method for resizing it.

both
The element displays a mechanism for allowing the user to resize it, which may be resized both horizontally and vertically.

horizontal
The element displays a mechanism for allowing the user to resize it in the horizontal direction.

vertical
The element displays a mechanism for allowing the user to resize it in the vertical direction.

block Experimental
The element displays a mechanism for allowing the user to resize it in the block direction (either horizontally or vertically, depending on the writing-mode and direction value).

inline Experimental
The element displays a mechanism for allowing the user to resize it in the inline direction (either horizontally or vertically, depending on the writing-mode and direction value).


      `,
  },
  {
    id: 43,
    title: "outline",
    description: `
    The outline CSS shorthand property sets most of the outline properties in a single declaration.

    This property is a shorthand for the following CSS properties:

outline-color
outline-style
outline-width


The outline property may be specified using one, two, or three of the values listed below. The order of the values does not matter. As with all shorthand properties, any omitted sub-values will be set to their initial value.

<'outline-color'>
Sets the color of the outline. Defaults to invert for browsers supporting it, currentcolor for the others. See outline-color.

<'outline-style'>
Sets the style of the outline. Defaults to none if absent. See outline-style.

<'outline-width'>
Sets the thickness of the outline. Defaults to medium if absent. See outline-width.

Outline is a line outside of the element's border. Unlike other areas of the box, outlines don't take up space, so they don't affect the layout of the document in any way.

There are a few properties that affect an outline's appearance. It is possible to change the style, color, and width using the outline property, the distance from the border using the outline-offset property, and corner angles using the border-radius property.

An outline is not required to be rectangular: While dealing with multiline text, some browsers will draw an outline for each line box separately, while others will wrap the whole text with a single outline.
    `,
  },
  {
    id: 44,
    title: "outline-offset",
    description: `
    The outline-offset CSS property sets the amount of space between an outline and the edge or border of an element.

    <length>
The width of the space between the element and its outline. A negative value places the outline inside the element. A value of 0 places the outline so that there is no space between it and the element.

Description
An outline is a line that is drawn around an element, outside the border edge. The space between an element and its outline is transparent. In other words, it is the same as the parent element's background.


    `,
  },

  {
    id: 46,
    title: "outline-style",
    description: `
    The outline-style CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the border.

    It is often more convenient to use the shorthand property outline when defining the appearance of an outline.



    The outline-style property is specified as any one of the values listed below.

Values
auto
Permits the user agent to render a custom outline style.

none
No outline is used. The outline-width is 0.

dotted
The outline is a series of dots.

dashed
The outline is a series of short line segments.

solid
The outline is a single line.

double
The outline is two single lines. The outline-width is the sum of the two lines and the space between them.

groove
The outline looks as though it were carved into the page.

ridge
The opposite of groove: the outline looks as though it were extruded from the page.

inset
The outline makes the box look as though it were embedded in the page.

outset
The opposite of inset: the outline makes the box look as though it were coming out of the page.

Formal definition
Initial value	none
Applies to	all elements
Inherited	no
Computed value	as specified
Animation type	discrete

    `,
  },
  {
    id: 47,
    title: "outline-width",
    description: `
    The CSS outline-width property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the border.

    It is often more convenient to use the shorthand property outline when defining the appearance of an outline.
    The outline-width property is specified as any one of the values listed below.

Values
<length>
The width of the outline specified as a <length>.

thin
Depends on the user agent. Typically equivalent to 1px in desktop browsers (including Firefox).

medium
Depends on the user agent. Typically equivalent to 3px in desktop browsers (including Firefox).

thick
Depends on the user agent. Typically equivalent to 5px in desktop browsers (including Firefox).


    `,
  },
  {
    id: 48,
    title: "border-radius",
    description: `
    The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

    The radius applies to the whole background, even if the element has no border; the exact position of the clipping is defined by the background-clip property.

    The border-radius property defines the radius of the element's corners.

Tip: This property allows you to add rounded corners to elements! 

This property can have from one to four values. Here are the rules:

Four values - border-radius: 15px 50px 30px 5px; (first value applies to top-left corner, second value applies to top-right corner, third value applies to bottom-right corner, and fourth value applies to bottom-left corner):

Three values - border-radius: 15px 50px 30px; (first value applies to top-left corner, second value applies to top-right and bottom-left corners, and third value applies to bottom-right corner):


Two values - border-radius: 15px 50px; (first value applies to top-left and bottom-right corners, and the second value applies to top-right and bottom-left corners):

One value - border-radius: 15px; (the value applies to all four corners, which are rounded equally:
    `,
  },
  ,
  {
    id: 48,
    title: "float",
    description: `
    The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

    The float property is specified as a single keyword, chosen from the list of values below.

Values
left
The element must float on the left side of its containing block.

right
The element must float on the right side of its containing block.

none
The element must not float.

inline-start
The element must float on the start side of its containing block. That is the left side with ltr scripts, and the right side with rtl scripts.

inline-end
The element must float on the end side of its containing block. That is the right side with ltr scripts, and the left side with rtl scripts.

The float property specifies whether an element should float to the left, right, or not at all.

Note: Absolutely positioned elements ignore the float property!

Note: Elements next to a floating element will flow around it. To avoid this, use the clear property or the clearfix hack (see example at the bottom of this page)
    `,
  },

  {
    id: 50,
    title: "visibility",
    description: `
    
    The visibility property specifies whether or not an element is visible.

Tip: Hidden elements take up space on the page. Use the display property to both hide and remove an element from the document layout!

The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>

To both hide an element and remove it from the document layout, set the display property to none instead of using visibility.

Syntax
/* Keyword values */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Global values */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
Copy to Clipboard
The visibility property is specified as one of the keyword values listed below.

visible
The element box is visible.

hidden
The element box is invisible (not drawn), but still affects layout as normal. Descendants of the element will be visible if they have visibility set to visible. The element cannot receive focus (such as when navigating through tab indexes).

collapse
The collapse keyword has different effects for different elements:

For <table> rows, columns, column groups, and row groups, the row(s) or column(s) are hidden and the space they would have occupied is removed (as if display: none were applied to the column/row of the table). However, the size of other rows and columns is still calculated as though the cells in the collapsed row(s) or column(s) are present. This value allows for the fast removal of a row or column from a table without forcing the recalculation of widths and heights for the entire table.
Collapsed flex items and ruby annotations are hidden, and the space they would have occupied is removed.
For other elements, collapse is treated the same as hidden.
Accessibility concerns
Using a visibility value of hidden on an element will remove it from the accessibility tree. This will cause the element and all its descendant elements to no longer be announced by screen reading technology.

Interpolation
When animated, visibility values are interpolated between visible and not-visible. One of the start or ending values must therefore be visible or no interpolation can happen. The value is interpolated as a discrete step, where values of the timing function between 0 and 1 map to visible and other values of the timing function (which occur only at the start/end of the transition or as a result of cubic-bezier() functions with y values outside of [0, 1]) map to the closer endpoint.

Notes
Support for visibility: collapse is missing or partially incorrect in some modern browsers. It may not be correctly treated like visibility: hidden on elements other than table rows and columns.
visibility: collapse may change the layout of a table if the table has nested tables within the cells that are collapsed, unless visibility: visible is specified explicitly on nested tables.
`,
  },

  {
    id: 52,
    title: "z-index",
    description:
      "The z-index property controls the stacking order of elements on the page. Elements with a higher z-index will appear on top of elements with a lower z-index.",
  },
  {
    id: 53,
    title: "overflow",
    description:
      "The overflow property controls what happens when content overflows the bounds of an element. It can take on values such as visible, hidden, scroll, and auto.",
  },
  {
    id: 54,
    title: "text-align",
    description:
      "The text-align property controls the horizontal alignment of text within an element. It can take on values such as left, right, center, and justify.",
  },
  {
    id: 55,
    title: "vertical-align",
    description:
      "The vertical-align property controls the vertical alignment of inline and table-cell elements. It can take on values such as top, middle, and bottom.",
  },
  {
    id: 56,
    title: "line-height",
    description:
      "The line-height property controls the height of each line of text within an element. It can take on values such as normal, a number, or a length.",
  },
  {
    id: 57,
    title: "letter-spacing",
    description:
      "The letter-spacing property controls the amount of space between individual characters within an element. It can take on values such as normal, a number, or a length.",
  },
  {
    id: 58,
    title: "word-spacing",
    description:
      "The word-spacing property controls the amount of space between words within an element. It can take on values such as normal, a number, or a length.",
  },
  {
    id: 59,
    title: "text-indent",
    description:
      "The text-indent property controls the amount of space at the beginning of the first line of text within an element. It can take on values such as a length, a percentage, or a keyword.",
  },
  {
    id: 60,
    title: "text-decoration",
    description:
      "The text-decoration property controls the decoration of text within an element. It can take on values such as none, underline, overline, and line-through.",
  },
  {
    id: 61,
    title: "text-transform",
    description:
      "The text-transform property controls the capitalization of text within an element. It can take on values such as uppercase,lowercase, and capitalize.",
  },
  {
    id: 62,
    title: "text-shadow",
    description:
      "The text-shadow property adds a shadow effect to text. It can take on values such as a color, an x-offset, a y-offset, and a blur radius.",
  },
  {
    id: 63,
    title: "box-sizing",
    description:
      "The box-sizing property controls how the width and height of an element are calculated. It can take on values such as content-box and border-box.",
  },
  {
    id: 64,
    title: "margin",
    description:
      "The margin property controls the amount of space around the outside of an element. It can take on values such as a length or a percentage.",
  },
  {
    id: 65,
    title: "padding",
    description:
      "The padding property controls the amount of space between the content of an element and its border. It can take on values such as a length or a percentage.",
  },
  {
    id: 66,
    title: "border",
    description:
      "The border property controls the appearance of an element's border. It can take on values such as a border-style, a border-width, and a border-color.",
  },
  {
    id: 67,
    title: "border-radius",
    description:
      "The border-radius property controls the curvature of an element's corners. It can take on values such as a length or a percentage.",
  },
  {
    id: 68,
    title: "background-color",
    description:
      "The background-color property sets the color of an element's background. It can take on values such as a color keyword, a hex code, or an RGB value.",
  },
  {
    id: 69,
    title: "background-image",
    description:
      "The background-image property sets the image used as an element's background. It can take on values such as a URL or the name of an image in the document.",
  },
  {
    id: 70,
    title: "background-repeat",
    description:
      "The background-repeat property controls how an element's background image is repeated. It can take on values such as repeat, repeat-x, repeat-y, and no-repeat.",
  },
  {
    id: 71,
    title: "background-position",
    description:
      "The background-position property controls where an element's background image is positioned. It can take on values such as top left, center, and bottom right.",
  },
  {
    id: 72,
    title: "background-size",
    description:
      "The background-size property controls the size of an element's background image. It can take on values such as auto, cover, and contain.",
  },
  {
    id: 73,
    title: "box-shadow",
    description:
      "The box-shadow property adds a shadow effect to an element's box. It can take on values such as a color, an x-offset, a y-offset, a blur radius, and a spread radius.",
  },
  {
    id: 74,
    title: "cursor",
    description:
      "The cursor property controls the appearance of the mouse cursor when it is over an element. It can take on values such as pointer, grab, and text.",
  },
  {
    id: 75,
    title: "user-select",
    description:
      "The user-select property controls whether an element's text can be selected by the user. It can take on values such as auto, none, and text.",
  },
  {
    id: 76,
    title: "resize",
    description:
      "The resize property controls whether an element can be resized by the user. It can take on values such as none, both, horizontal, and vertical.",
  },
  {
    id: 77,
    title: "overflow",
    description:
      "The overflow property controls what happens when an element's content is too big to fit inside its box. It can take on values such as auto, hidden, scroll, and visible.",
  },
  {
    id: 78,
    title: "text-align",
    description:
      "The text-align property controls the horizontal alignment of text within an element. It can take on values such as left, right, center, and justify.",
  },
  {
    id: 79,
    title: "text-decoration",
    description:
      "The text-decoration property controls the appearance of text decorations such as underline, overline, and line-through. It can also be used to remove decorations.",
  },
  {
    id: 80,
    title: "text-transform",
    description:
      "The text-transform property controls the capitalization of text within an element. It can take on values such as uppercase, lowercase, and capitalize.",
  },
  {
    id: 81,
    title: "letter-spacing",
    description:
      "The letter-spacing property controls the amount of space between characters in text. It can take on values such as a length or a percentage.",
  },
  {
    id: 82,
    title: "word-spacing",
    description:
      "The word-spacing property controls the amount of space between words in text. It can take on values such as a length or a percentage.",
  },
  {
    id: 83,
    title: "line-height",
    description:
      "The line-height property controls the height of a line of text. It can take on values such as a number, a length, or a percentage.",
  },
  {
    id: 84,
    title: "text-indent",
    description:
      "The text-indent property controls the indentation of the first line of text within an element. It can take on values such as a length or a percentage.",
  },
  {
    id: 85,
    title: "vertical-align",
    description:
      "The vertical-align property controls the vertical alignment of inline elements within a line. It can take on values such as top, middle, and bottom.",
  },
  {
    id: 86,
    title: "list-style-type",
    description:
      "The list-style-type property controls the appearance of the bullet or number used in a list. It can take on values such as disc, decimal, and square.",
  },
  {
    id: 87,
    title: "list-style-position",
    description:
      "The list-style-position property controls the position of the bullet or number in a list. It can take on values such as inside and outside.",
  },
  {
    id: 88,
    title: "list-style-image",
    description:
      "The list-style-image property sets an image as the bullet or number in a list. It can take on values such as a URL or the name of an image in the document.",
  },
  {
    id: 89,
    title: "table-layout",
    description:
      "The table-layout property controls how a table's layout algorithm works. It can take on values such as auto, fixed, and inherit.",
  },
  {
    id: 90,
    title: "border-collapse",
    description:
      "The border-collapse property controls whether adjacent table borders should be collapsed into a single border or not. It can take on values such as collapse and separate.",
  },
  {
    id: 91,
    title: "border-spacing",
    description:
      "The border-spacing property controls the amount of space between adjacent table borders. It can take on values such as a length or a percentage.",
  },
  {
    id: 92,
    title: "caption-side",
    description:
      "The caption-side property controls the placement of a table caption. It can take on values such as top, bottom, and inherit.",
  },
  {
    id: 93,
    title: "empty-cells",
    description:
      "The empty-cells property controls how empty table cells are displayed. It can take on values such as show, hide, and inherit.",
  },
  {
    id: 94,
    title: "font-family",
    description:
      "The font-family property sets the font to be used for text within an element. It can take on multiple font names as fallback options, separated by commas.",
  },
  {
    id: 95,
    title: "font-size",
    description:
      "The font-size property sets the size of the font used for text within an element. It can take on values such as a length, a percentage, or keywords such as small, medium, and large.",
  },
  {
    id: 96,
    title: "font-style",
    description:
      "The font-style property controls whether text within an element is italic or not. It can take on values such as normal, italic, and oblique.",
  },
  {
    id: 97,
    title: "font-weight",
    description:
      "The font-weight property controls the weight (or thickness) of the font used for text within an element. It can take on values such as normal, bold, and lighter.",
  },
  {
    id: 98,
    title: "color",
    description:
      "The color property sets the color of text within an element. It can take on values such as color names, RGB values, or hexadecimal values.",
  },
  {
    id: 99,
    title: "background-color",
    description:
      "The background-color property sets the background color of an element. It can take on values such as color names, RGB values, or hexadecimal values.",
  },
  {
    id: 100,
    title: "background-image",
    description:
      "The background-image property sets an image as the background of an element. It can take on values such as a URL or the name of an image in the document.",
  },
  {
    id: 101,
    title: "background-repeat",
    description:
      "The background-repeat property controls how a background image is repeated within an element. It can take on values such as repeat, no-repeat, and repeat-x.",
  },
  {
    id: 102,
    title: "background-position",
    description:
      "The background-position property controls the position of a background image within an element. It can take on values such as top, center, and bottom.",
  },
  {
    id: 103,
    title: "background-size",
    description:
      "The background-size property controls the size of a background image within an element. It can take on values such as auto, cover, and contain.",
  },
  {
    id: 104,
    title: "opacity",
    description:
      "The opacity property controls the transparency of an element. It can take on values between 0 (fully transparent) and 1 (fully opaque).",
  },
  {
    id: 105,
    title: "z-index",
    description:
      "The z-index property controls the stacking order of positioned elements within a document. Elements with a higher z-index value will appear on top of elements with a lower z-index value.",
  },
  {
    id: 106,
    title: "box-shadow",
    description:
      "The box-shadow property adds a shadow effect to an element. It can take on values such as a color, the position of the shadow, and the amount of blur applied to the shadow.",
  },
  {
    id: 107,
    title: "text-shadow",
    description:
      "The text-shadow property adds a shadow effect to text within an element. It can take on values such as a color, the position of the shadow, and the amount of blur applied to the shadow.",
  },
  {
    id: 108,
    title: "border-radius",
    description:
      "The border-radius property adds rounded corners to an element's border. It can take on values such as a length or a percentage.",
  },
  {
    id: 109,
    title: "transition",
    description:
      "The transition property adds a transition effect to an element when its properties change. It can take on values such as the duration of the transition and the CSS properties being transitioned.",
  },
  {
    id: 110,
    title: "animation",
    description:
      "The animation property allows for the creation of animations in CSS. It can take on values such as the duration, timing function, delay, and keyframes for the animation.",
  },
  {
    id: 111,
    title: "backface-visibility",
    description:
      "The backface-visibility property controls whether or not the back face of an element is visible when it is facing the viewer. It can take on values such as visible or hidden.",
  },
  {
    id: 112,
    title: "border",
    description:
      "The border property sets the width, style, and color of an element's border. It can take on values such as the width, style, color, and radius of the border.",
  },
  {
    id: 113,
    title: "border-collapse",
    description:
      "The border-collapse property controls whether the borders of table cells should be collapsed into a single border or separated. It can take on values such as collapse or separate.",
  },
  {
    id: 114,
    title: "border-spacing",
    description:
      "The border-spacing property sets the distance between the borders of adjacent table cells. It can take on values such as length or percentage.",
  },
  {
    id: 115,
    title: "bottom",
    description:
      "The bottom property sets the bottom position of a positioned element. It can take on values such as length, percentage, or auto.",
  },
  {
    id: 116,
    title: "box-decoration-break",
    description:
      "The box-decoration-break property specifies how an element's box decorations (such as borders, padding, and backgrounds) are rendered when they overlap multiple lines, columns, or pages. It can take on values such as slice or clone.",
  },
  {
    id: 117,
    title: "box-sizing",
    description:
      "The box-sizing property controls how an element's width and height are calculated, including any padding and border added to the element. It can take on values such as content-box or border-box.",
  },
  {
    id: 118,
    title: "caption-side",
    description:
      "The caption-side property sets the placement of a table caption. It can take on values such as top or bottom.",
  },
  {
    id: 119,
    title: "caret-color",
    description:
      "The caret-color property sets the color of the text input caret (the blinking vertical line in text input fields) when the element is in focus.",
  },

  {
    id: 121,
    title: "clip",
    description:
      "The clip property clips an absolutely positioned element to a specified rectangular region. It can take on values such as rectangle() or auto.",
  },
  {
    id: 122,
    title: "clip-path",
    description:
      "The clip-path property applies a clipping mask to an element to restrict the visibility of parts of the element. It can take on values such as the URL of an SVG clipPath element or a shape value such as polygon().",
  },
  {
    id: 123,
    title: "column-count",
    description:
      "The column-count propertysets the number of columns an element should be divided into. It can take on values such as an integer or auto.",
  },
  {
    id: 124,
    title: "column-fill",
    description:
      "The column-fill property controls how content is distributed between columns when the content doesn't fill all available space. It can take on values such as auto or balance.",
  },
  {
    id: 125,
    title: "column-gap",
    description:
      "The column-gap property sets the size of the gap between columns in an element. It can take on values such as length or percentage.",
  },
  {
    id: 126,
    title: "column-rule",
    description:
      "The column-rule property sets the width, style, and color of the rule between columns in an element. It can take on values such as the width, style, and color of the rule.",
  },
  {
    id: 127,
    title: "column-rule-color",
    description:
      "The column-rule-color property sets the color of the rule between columns in an element.",
  },
  {
    id: 128,
    title: "column-rule-style",
    description:
      "The column-rule-style property sets the style of the rule between columns in an element. It can take on values such as solid, dotted, or dashed.",
  },
  {
    id: 129,
    title: "column-rule-width",
    description:
      "The column-rule-width property sets the width of the rule between columns in an element. It can take on values such as length or thin/medium/thick.",
  },
  {
    id: 130,
    title: "column-span",
    description:
      "The column-span property specifies how an element should span across columns in an element. It can take on values such as all or none.",
  },
  {
    id: 131,
    title: "column-width",
    description:
      "The column-width property sets the width of the columns in an element. It can take on values such as length or auto.",
  },
  {
    id: 132,
    title: "columns",
    description:
      "The columns property combines the column-width and column-count properties into a single shorthand property. It can take on values such as column-width column-count.",
  },
  {
    id: 133,
    title: "content",
    description:
      "The content property sets the content that should be inserted into a ::before or ::after pseudo-element. It can take on values such as text, an image URL, or counters.",
  },
  {
    id: 134,
    title: "counter-increment",
    description:
      "The counter-increment property increases or decreases the value of a CSS counter by a specified amount. It can take on values such as an identifier and an integer.",
  },
  {
    id: 135,
    title: "counter-reset",
    description:
      "The counter-reset property resets the value of a CSS counter to a specified value. It can take on values such as an identifier and an integer.",
  },
  {
    id: 136,
    title: "cursor",
    description:
      "The cursor property sets the type of cursor to be displayed when the mouse pointer is over an element. It can take on values such as pointer, crosshair, or default.",
  },
  {
    id: 137,
    title: "direction",
    description:
      "The direction property sets the text direction of an element. It can take on values such as rtl (right-to-left) or ltr (left-to-right).",
  },
  ,
  {
    id: 139,
    title: "filter",
    description:
      "The filter property applies visual effects to an element. It can take on values such as blur(), brightness(), or grayscale().",
  },
  ,
  {
    id: 141,
    title: "flex-basis",
    description:
      "The flex-basis property sets the initial main size of a flex item before any free space is distributed. It can take on values such as length, percentage, or auto.",
  },
  {
    id: 142,
    title: "flex-direction",
    description:
      "The flex-direction property sets the direction of the main axis of a flex container. It can take on values such as row, column, or row-reverse.",
  },
  {
    id: 143,
    title: "flex-flow",
    description:
      "The flex-flow property is a shorthand property that sets the flex-direction and flex-wrap properties. It can take on values such as flex-direction flex-wrap.",
  },
  {
    id: 144,
    title: "flex-grow",
    description:
      "The flex-grow property sets the flex grow factor of a flex item. It can take on values such as an integer or a number with a unit.",
  },
  {
    id: 145,
    title: "flex-shrink",
    description:
      "The flex-shrink property sets the flex shrink factor of a flex item. It can take on values such as an integer or a number with a unit.",
  },
  {
    id: 146,
    title: "flex-wrap",
    description:
      "The flex-wrap property sets whether flex items are forced onto one line or can wrap onto multiple lines. It can take on values such as nowrap or wrap.",
  },
  {
    id: 147,
    title: "float",
    description:
      "The float property specifies whether an element should float to the left, right, or not at all. It can take on values such as left, right, or none.",
  },
  {
    id: 148,
    title: "font",
    description:
      "The font property is a shorthand property that sets various font properties. It can take on values such as font-style font-variant font-weight font-size/line-height font-family.",
  },
  {
    id: 149,
    title: "font-family",
    description:
      "The font-family property sets the font family for text content. It can take on values such as a font family name or a comma-separated list of font family names.",
  },
  {
    id: 150,
    title: "font-size",
    description:
      "The font-size property sets the size of the font for text content. It can take on values such as length or percentage.",
  },
  {
    id: 151,
    title: "font-style",
    description:
      "The font-style property sets the style of the font for text content. It can take on values such as normal, italic, or oblique.",
  },
  {
    id: 152,
    title: "font-variant",
    description:
      "The font-variant property sets the variant of the font for text content. It can take on values such as normal or small-caps.",
  },
  {
    id: 153,
    title: "font-weight",
    description:
      "The font-weight property sets the weight of the font for text content. It can take on values such as normal, bold, or a number from 100 to 900 in increments of 100.",
  },
  {
    id: 154,
    title: "gap",
    description:
      "The gap property is a shorthand property that sets the row-gap and column-gap properties. Itsets the spacing between grid items in a grid container. It can take on values such as length or percentage.",
  },
];
const newCss = cssElements.map((data, index) => {
  return {
    id: index,
    ...data,
  };
});

const View = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ marginTop: "80px" }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CSS Reference
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          {newCss.map((element) => (
            <Grid item xs={12} sm={4} md={3} key={element.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {element.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{
                      height: "400px",
                      maxHeight: "400px",
                      overflow: "auto",
                    }}
                  >
                    {element.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default View;
