lexer grammar SCSSLexer;

AbsLength        : 'px'  | 'cm'   | 'mm'   | 'pt' | 'pc' | Q;
FontRelative     :  Em   | 'ex'   | 'ch'   | 'rem';
ViewportRelative : 'vw'  | 'vh'   | 'vmin' | 'vmax';
Angle            : 'deg' | 'rad'  | 'grad' | 'turn';
Resolution       : 'dpi' | 'dpcm' | 'dppx';
Freq             : 'hz'  | 'khz'  | 'fr';
Time             : 'ms'  | S;
Percentage       : '%';

// Default    : '!default';
// Important  : '!important';

// Comment          : (LineComment | MultiLineComment) -> skip;
// MultiLineComment : '/*' ~'*'* '*'+ ( ~[/*] ~'*'* '*'+ )* '/';

Dot      : '.';
// Comma      : ',';
Colon      : ':';
Semi       : ';';
Lparen     : '(';
Rparen     : ')';
BlockStart : '{';
BlockEnd   : '}';
Underscore    : '_';

// Plus       : '+';
// Div        : '/';
Minus      : '-';
// Times      : '*';
// Eq         : '=';
// NotEq      : '!=';
// Greater    : '>';
// Less       : '<';

// True       : 'true';
// False      : 'false';
Not        : 'not';
// And        : 'and';
// Or         : 'or';

Hash       : '#';
// Rgba       : 'rgba(';
// Rgb        : 'rgb(';

// From       : 'from';
To         : 'to';

NumberReg     : [0-9]+ | [0-9]* '.' [0-9]+;
// StringReg: '"' ( ~["\r\n] | '\\"' )* '"';
Char: [a-zA-Z];
Digit: [0-9];
mode DEFAULT_MODE;

// Parser rule
WhiteSpace: [ \t\r\n]+ -> skip;
SpaceChar: ' ';
/////////////////////////////////////////////////
/////////////////// CSS2 ////////////////////////
/////////////////////////////////////////////////


Background       : 'background'; 
Border           : 'border'; 
List             : 'list';
Font             : 'font';
Margin           : 'margin';
Outline          : 'outline';
Padding          : 'padding';
Text             : 'text';
Page             : 'page';
Speak            : 'speak';
Break            : 'break';
Max              : 'max';
Min              : 'min';
Pause            : 'pause';
Height           : 'height';
Width            : 'width';
Left             : 'left';
Top              : 'top';
Right            : 'bottom';
Bottom           : 'right';
Color            : 'color';
Style            : 'style';
Content          : 'content';
Azimuth          : 'azimuth';
Attachment       : 'attachment';
Image            : 'image';
Position         : 'position';
After            : 'after';
Before           : 'before';
Overflow         : 'overflow';
Repeat           : 'repeat';
Collapse         : 'collapse';
Spacing          : 'spacing';
Caption          : 'caption';
Counter          : 'counter';
Side             : 'side';
Increment        : 'increment';
Clear            : 'clear';
Clip             : 'clip';
Reset            : 'reset';
Cue              : 'cue';
Cursor           : 'cursor';
Direction        : 'direction';
Display          : 'display';
Elevation        : 'elevation';
Empty            : 'empty';
Cells            : 'cells';
Float            : 'float';
Family           : 'family';
Size             : 'size';
Variant          : 'variant';
Inside           : 'inside';
Weight           : 'weight';
Letter           : 'letter';
Line             : 'line';
Type             : 'type';
Pitch            : 'pitch';
Orphans          : 'orphans';
Range            : 'range';
Play             : 'play';
During           : 'during';
Richness         : 'richness';
Header           : 'header';
Numeral          : 'numeral';
Punctuation      : 'punctuation';
Quotes           : 'quotes';
Speech           : 'speech';
Rate             : 'rate';
Stress           : 'stress';
Table            : 'table';
Layout           : 'layout';
Align            : 'align';
Decoration       : 'decoration';
Indent           : 'indent';
Transform        : 'transform';
Unicode          : 'unicode';
Bidi             : 'bidi';
Vertical         : 'vertical';
Visibility       : 'visibility';
Voice            : 'voice';
Volume           : 'volume';
White            : 'white';
Space            : 'space';
Widows           : 'widows';
Word             : 'word';
Z                : 'z';
Index            : 'index';

/////////////////////////////////////////////////
//////////////////// CSS3 ///////////////////////
/////////////////////////////////////////////////

Alignment : 'alignment';
Animation : 'animation';
Appearance : 'appearance';
Backface : 'backface';
Baseline : 'baseline';
Bookmark : 'bookmark';
Box : 'box';
Column : 'column';
Columns : 'columns';
Crop : 'crop';
Dominant : 'dominant';
Drop : 'drop';
Fit : 'fit';
Grid : 'grid';
Hanging : 'hanging';
Hyphenate : 'hyphenate';
Hyphens : 'hyphens';
Icon : 'icon';
Inline : 'inline';
Mark : 'mark';
Marks : 'marks';
Marquee : 'marquee';
Move : 'move';
Nav : 'nav';
Opacity : 'opacity';
Perspective : 'perspective';
Phonemes : 'phonemes';
Rendering : 'rendering';
Resize : 'resize';
Rest : 'rest';
Rotation : 'rotation';
Ruby : 'ruby';
String : 'string';
Target : 'target';
Adjust : 'adjust';
Delay : 'delay';
Duration : 'duration';
Name : 'name';
Origin : 'origin';
Shift : 'shift';
Label : 'label';
Level : 'level';
Radius : 'radius';
Flex : 'flex';
Lines : 'lines';
Orient : 'orient';
Pack : 'pack';
Shadow : 'shadow';
Sizing : 'sizing';
Profile : 'profile';
Count : 'count';
Fill : 'fill';
Gap : 'gap';
Rule : 'rule';
Span : 'span';
Offset : 'offset';
Stretch : 'stretch';
Rows : 'rows';
Character : 'character';
Resource : 'resource';
Orientation : 'orientation';
Stacking : 'stacking';
Speed : 'speed';
Down : 'down';
Up : 'up';
X : 'x';
Y : 'y';
Policy : 'policy';
Trim : 'trim';
Intent : 'intent';
Point : 'point';
Overhang : 'overhang';
Set : 'set';
New : 'new';
Justify : 'justify';
Wrap : 'wrap';
Property : 'property';
Balance : 'balance';
State : 'state';
Function : 'function';
Outset : 'outset';
Slice : 'slice';
Source : 'source';
Group : 'group';
Value : 'value';
Strategy : 'strategy';
Last : 'last';
Monochrome : 'monochrome';
Scan : 'scan';
Ratio : 'ratio';
Aspect : 'aspect';
/////////////////////////////////////////////////
Iteration : 'iteration';
Timing : 'timing';
Device : 'device';
Skretch : 'skretch';
Ordinal : 'ordinal';
Initial : 'initial';
Transition : 'transition';

/////////////////////////////////////////////////
/////////////// PSEUDO-ELEMENTS /////////////////
/////////////////////////////////////////////////

First : 'first';
Selection : 'selection';
Placeholder : 'placeholder';

/////////////////////////////////////////////////
//////////////// PSEUDO-CLASSES /////////////////
/////////////////////////////////////////////////

Hover : 'hover';
Active : 'active';
Focus : 'focus';
Visited : 'visited';
Child : 'child';
Nth : 'nth';
Disabled : 'disabled';
Checked : 'checked';
Required : 'required';

/////////////////////////////////////////////////
////////////////// HTML4 TAGS ///////////////////
/////////////////////////////////////////////////

A : 'a';
Abbr : 'abbr';
Acronym : 'acronym';
Address : 'address';
Applet : 'applet';
Area : 'area';
B : 'b';
Base : 'base';
Basefont : 'basefont';
Bdo : 'bdo';
Big : 'big';
Blockquote : 'blockquote';
Body : 'body';
Br : 'br';
Button : 'button';
Center : 'center';
Cite : 'cite';
Code : 'code';
Col : 'col';
Colgroup : 'colgroup';
Dd : 'dd';
Del : 'del';
Dfn : 'dfn';
Dir : 'dir';
Div : 'div';
Dl : 'dl';
Dt : 'dt';
Em : 'em';
Fieldset : 'fieldset';
Form : 'form';
Frame : 'frame';
Frameset : 'frameset';
H1 : 'h1';
H2 : 'h2';
H3 : 'h3';
H4 : 'h4';
H5 : 'h5';
H6 : 'h6';
Head : 'head';
Hr : 'hr';
Html : 'html';
I : 'i';
Iframe : 'iframe';
Img : 'img';
Input : 'input';
Ins : 'ins';
Kbd : 'kbd';
Legend : 'legend';
Li : 'li';
Map : 'map';
Menu : 'menu';
Meta : 'meta';
Noframes : 'noframes';
Noscript : 'noscript';
Object : 'object';
Ol : 'ol';
Optgroup : 'optgroup';
Option : 'option';
P : 'p';
Param : 'param';
Pre : 'pre';
Q : 'q';
S : 's';
Samp : 'samp';
Script : 'script';
Select : 'select';
Small : 'small';
Strike : 'strike';
Strong : 'strong';
Sub : 'sub';
Sup : 'sup';
Tbody : 'tbody';
Td : 'td';
Template : 'template';
Textarea : 'textarea';
Tfoot : 'tfoot';
Th : 'th';
Thead : 'thead';
Title : 'title';
Tr : 'tr';
Tt : 'tt';
U : 'u';
Ul : 'ul';
Var : 'var';

/////////////////////////////////////////////////
////////////////// HTML5 TAGS ///////////////////
/////////////////////////////////////////////////

Article : 'article';
Aside : 'aside';
Audio : 'audio';
Bdi : 'bdi';
Canvas : 'canvas';
Command : 'command';
Datalist : 'datalist';
Details : 'details';
Embed : 'embed';
Figcaption : 'figcaption';
Figure : 'figure';
Footer : 'footer';
Hgroup : 'hgroup';
Keygen : 'keygen';
Main : 'main';
Meter : 'meter';
Output : 'output';
Progress : 'progress';
Progress_bar_stripes : ' progress-bar-stripes';
Rp : 'rp';
Rt : 'rt';
Section : 'section';
Summary : 'summary';
Svg : 'svg';
Track : 'track';
Video : 'video';
Wbr : 'wbr';