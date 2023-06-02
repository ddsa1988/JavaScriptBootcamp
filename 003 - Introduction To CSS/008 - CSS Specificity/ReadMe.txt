***** Order of importance *****

4º Position: Top => bottom.

li {
    color: red;
    color: green; => this one overrides the upper one.
}

3º Specificity: id => attribute => class => selector.

li {color: blue;}
.firs-class {color: red;}
li[draggable] {color: purple;}
#first-id {color: orange;} => this one overrides the upper ones.

2º Type: inline => internal => external.

<link rel="stylesheet" href="./stylesheet.css"
<style> </style>
<h1> style=" ">Hello</h1> => this one overrides the upper ones.


1º Importance: !important => all other.

color: red;
color: green !important; => this one overrides the upper ones.