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
    description:
      "Sets the color of text content.",
  },
  {
    id: 2,
    title: "background-color",
    description:
      "Sets the background color of an element.",
  },
  {
    id: 3,
    title: "font-size",
    description:
      "Sets the size of the font.",
  },
  {
    id: 4,
    title: "font-weight",
    description:
      "Sets the weight (boldness) of the font.",
  },
  {
    id: 5,
    title: "text-align",
    description:
      "Sets the horizontal alignment of text content within an element.",
  },
  {
    id: 6,
    title: "padding",
    description:
      "Sets the padding (space) within an element.",
  },
  {
    id: 7,
    title: "margin",
    description:
      "Sets the margin (space) around an element.",
  },
  {
    id: 8,
    title: "border",
    description:
      "Sets the border around an element.",
  },
  {
    id: 9,
    title: "display",
    description:
      "Defines how an element is displayed (e.g. block, inline, etc.).",
  },
  {
    id: 10,
    title: "position",
    description:
      "Defines the position of an element in relation to its containing element.",
  },
  {
    id: 11,
    title: "float",
    description:
      "Specifies whether an element should float to the left, right, or none.",
  },
  {
    id: 12,
    title: "clear",
    description:
      "Specifies whether an element should be moved below (cleared) floating elements.",
  },
  {
    id: 13,
    title: "width",
    description:
      "Sets the width of an element.",
  },
  {
    id: 14,
    title: "height",
    description:
      "Sets the height of an element.",
  },
  {
    id: 15,
    title: "line-height",
    description:
      "Sets the height of a line of text.",
  },
  {
    id: 16,
    title: "text-decoration",
    description:
      "Specifies the decoration added to text.",
  },
  {
    id: 17,
    title: "text-transform",
    description:
      "Specifies how the text is transformed.",
  },
  {
    id: 18,
    title: "text-shadow",
    description:
      "Adds shadow to text.",
  },
  {
    id: 19,
    title: "text-overflow",
    description:
      "Specifies how overflowed content that is not displayed should be signaled to the user.",
  },
  {
    id: 20,
    title: "overflow",
    description:
      "Specifies what should happen when an element's content overflows its borders.",
  },
  {
    id: 21,
    title: "background-image",
    description:
      "Specifies the background image of an element.",
  },
  {
    id: 22,
    title: "background-repeat",
    description:
      "Specifies how a background image should be repeated.",
  },
  {
    id: 23,
    title: "background-position",
    description:
      "Specifies the starting position of a background image.",
  },
  {
    id: 24,
    title: "background-size",
    description:
    "Specifies the size of a background image.",
    },
    {
    id: 25,
    title: "background-attachment",
    description:
    "Specifies whether a background image is fixed or scrolls with the rest of the page.",
    },
    {
    id: 26,
    title: "background-origin",
    description:
    "Specifies the positioning area of the background image.",
    },
    {
    id: 27,
    title: "background-clip",
    description:
    "Specifies the painting area of the background.",
    },
    {
    id: 28,
    title: "box-shadow",
    description:
    "Adds a shadow to an element.",
    },
    {
    id: 29,
    title: "text-align-last",
    description:
    "Specifies how the last line of a block or a line, right before a forced line break, should be aligned.",
    },
    {
    id: 30,
    title: "word-wrap",
    description:
    "Allows long words to be able to be broken and wrap onto the next line.",
    },
    {
    id: 31,
    title: "word-break",
    description:
    "Specifies how to break lines within words.",
    },
    {
    id: 32,
    title: "letter-spacing",
    description:
    "Specifies the space between characters in a text.",
    },
    {
    id: 33,
    title: "text-indent",
    description:
    "Specifies the indentation of the first line in a text block.",
    },
    {
    id: 34,
    title: "vertical-align",
    description:
    "Sets the vertical alignment of an element.",
    },
    {
    id: 35,
    title: "z-index",
    description:
    "Sets the stack order of a positioned element.",
    },
    {
    id: 36,
    title: "opacity",
    description:
    "Sets the opacity level for an element.",
    },
    {
    id: 37,
    title: "transform",
    description:
    "Applies a 2D or 3D transformation to an element.",
    },
    {
    id: 38,
    title: "transition",
    description:
    "Specifies a transition effect for an element.",
    },
    {
    id: 39,
    title: "cursor",
    description:
    "Specifies the type of cursor to be displayed.",
    },
    {
    id: 40,
    title: "user-select",
    description:
    "Specifies whether the text of an element can be selected.",
    },
    {
    id: 41,
    title: "pointer-events",
    description:
    "Specifies whether an element can be the target for mouse events.",
    },
    {
    id: 42,
    title: "resize",
    description:
    "Specifies whether or not an element is resizable by the user.",
    },
    {
    id: 43,
    title: "outline",
    description:
    "Sets an outline around an element.",
    },
    {
    id: 44,
    title: "outline-offset",
    description:
    "Offsets an outline, and draws it beyond the border edge.",
    },

    {
    id: 46,
    title: "outline-style",
    description:
    "Sets the style of an outline.",
    },
    {
    id: 47,
    title: "outline-width",
    description:
    "Sets the width of an outline.",
    },
    {
    id: 48,
    title: "border-radius",
    description:
    "Sets the rounding of the corners of an element's border"
    }
  ,
  {
    id: 47,
    title: "display",
    description:
      "The display property determines how an element should be displayed on the page. It can take on values such as block, inline, inline-block, and none.",
  },
  {
    id: 48,
    title: "float",
    description:
      "The float property allows you to float an element to the left or right of its container. This is commonly used for creating multi-column layouts.",
  },
  {
    id: 49,
    title: "clear",
    description:
      "The clear property is used to control the behavior of elements after a floated element. It can take on values such as left, right, both, or none.",
  },
  {
    id: 50,
    title: "visibility",
    description:
      "The visibility property determines whether an element should be visible on the page. It can take on values such as visible, hidden, and collapse.",
  },
  {
    id: 51,
    title: "opacity",
    description:
      "The opacity property controls the transparency of an element. It takes a value between 0 (completely transparent) and 1 (completely opaque).",
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
  id:94,
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
      id: 120,
      title: "clear",
      description:
        "The clear property controls whether an element should be moved below (cleared) any floating elements that precede it. It can take on values such as left, right, both, or none.",
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
      {
      id: 138,title: "display",
      description:
      "The display property specifies the type of box used for an element. It can take on values such as block, inline, or none.",
      },
      {
      id: 139,
      title: "filter",
      description:
      "The filter property applies visual effects to an element. It can take on values such as blur(), brightness(), or grayscale().",
      },
      {
      id: 140,
      title: "flex",
      description:
      "The flex property is a shorthand property that sets the flex-grow, flex-shrink, and flex-basis properties. It can take on values such as flex-grow flex-shrink flex-basis.",
      },
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
      "The gap property is a shorthand property that sets the row-gap and column-gap properties. Itsets the spacing between grid items in a grid container. It can take on values such as length or percentage."
      }]
  
const View = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{marginTop:"80px"}}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CSS Reference
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          {cssElements.map((element) => (
            <Grid item xs={12} sm={4} md={3} key={element.id} >
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {element.title}
                  </Typography>
                  <Typography variant="body2" component="p" style={{height:"400px",maxHeight:"400px",overflow:"auto"}}>
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
