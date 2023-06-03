parser grammar SCSSParser;

options { tokenVocab=SCSSLexer; }

stylesheet
    : block* EOF
    ;

block
    : WhiteSpace* selector WhiteSpace* BlockStart ((WhiteSpace? declaration WhiteSpace?) | (WhiteSpace? nestedBlock WhiteSpace?))* (WhiteSpace)* BlockEnd
    ;

nestedBlock
    : WhiteSpace* selector  WhiteSpace* BlockStart ((WhiteSpace? declaration WhiteSpace?) | (WhiteSpace? nestedBlock WhiteSpace?))* (WhiteSpace)* BlockEnd
    ;

selector
    : (idSelector | classSelector | tagSelector)+ (pseudoClass | pseudoElement)*
    ;

pseudoClass
    : Colon Hover
    | Colon Active
    | Colon Focus
    | Colon Visited
    | Colon First Minus Child
    | Colon Last Minus Child
    | Colon Nth Minus Child Lparen Digit Rparen
    | Colon Not Lparen Rparen
    | Colon Disabled
    | Colon Checked
    | Colon Required
    | Colon Empty
    ;

pseudoElement
    : doubleColon After
    | doubleColon Before
    | doubleColon First Minus Letter
    | doubleColon First Minus Line
    | doubleColon Selection
    | doubleColon Placeholder
    ;

doubleColon
    : Colon
    ;

idSelector
    : Hash identifier
    ;

classSelector
    : Dot identifier
    ;

tagSelector
    : A 
    | Abbr 
    | Acronym 
    | Address 
    | Applet 
    | Area 
    | B 
    | Base 
    | Basefont 
    | Bdo 
    | Big 
    | Blockquote 
    | Body 
    | Br 
    | Button 
    | Caption 
    | Center 
    | Cite 
    | Code 
    | Col 
    | Colgroup 
    | Dd 
    | Del 
    | Dfn 
    | Dir 
    | Div 
    | Dl 
    | Dt 
    | Em 
    | Fieldset 
    | Font 
    | Form 
    | Frame 
    | Frameset 
    | H1 
    | H2 
    | H3 
    | H4 
    | H5 
    | H6 
    | Head 
    | Hr 
    | Html 
    | I 
    | Iframe 
    | Img 
    | Input 
    | Ins 
    | Kbd 
    | Label 
    | Legend 
    | Li 
    | Map 
    | Mark 
    | Menu 
    | Meta 
    | Noframes 
    | Noscript 
    | Object 
    | Ol 
    | Optgroup 
    | Option 
    | P 
    | Param 
    | Pre 
    | Q 
    | S 
    | Samp 
    | Script 
    | Select 
    | Small 
    | Span 
    | Strike 
    | Strong 
    | Style 
    | Sub 
    | Sup 
    | Table 
    | Tbody 
    | Td 
    | Template 
    | Textarea 
    | Tfoot 
    | Th 
    | Thead 
    | Title 
    | Tr 
    | Tt 
    | U 
    | Ul 
    | Var 
    | Article 
    | Aside 
    | Audio 
    | Bdi 
    | Canvas 
    | Command 
    | Datalist 
    | Details 
    | Embed 
    | Figcaption 
    | Figure 
    | Footer 
    | Header 
    | Hgroup 
    | Keygen 
    | Main 
    | Mark 
    | Meter 
    | Nav 
    | Output 
    | Progress 
    | Progress_bar_stripes 
    | Rp 
    | Rt 
    | Ruby 
    | Section 
    | Source 
    | Summary 
    | Svg 
    | Time 
    | Track 
    | Video 
    | Wbr
    ;

identifier
    : (Char | Digit | Minus | Underscore)+
    ;

declaration
    : property (WhiteSpace)* Colon (WhiteSpace)* propertyValue (WhiteSpace)* Semi;

propertyValue
    : numValue
    ;

numValue
    : fourNumValue
    | threeNumValue
    | twoNumValue
    | oneNumValue
    ;

fourNumValue
    : absLengthValue whiteSpaceWithSpaceChar absLengthValue whiteSpaceWithSpaceChar absLengthValue whiteSpaceWithSpaceChar absLengthValue
    | fontRelativeValue whiteSpaceWithSpaceChar fontRelativeValue whiteSpaceWithSpaceChar fontRelativeValue whiteSpaceWithSpaceChar fontRelativeValue
    | viewportRelativeValue whiteSpaceWithSpaceChar viewportRelativeValue whiteSpaceWithSpaceChar viewportRelativeValue whiteSpaceWithSpaceChar viewportRelativeValue
    | angleValue whiteSpaceWithSpaceChar angleValue whiteSpaceWithSpaceChar angleValue whiteSpaceWithSpaceChar angleValue
    | resolutionValue whiteSpaceWithSpaceChar resolutionValue whiteSpaceWithSpaceChar resolutionValue whiteSpaceWithSpaceChar resolutionValue
    | freqValue whiteSpaceWithSpaceChar freqValue whiteSpaceWithSpaceChar freqValue whiteSpaceWithSpaceChar freqValue
    | timeValue whiteSpaceWithSpaceChar timeValue whiteSpaceWithSpaceChar timeValue whiteSpaceWithSpaceChar timeValue
    | percentageValue whiteSpaceWithSpaceChar percentageValue whiteSpaceWithSpaceChar percentageValue whiteSpaceWithSpaceChar percentageValue
    ;

threeNumValue
    : absLengthValue whiteSpaceWithSpaceChar absLengthValue whiteSpaceWithSpaceChar absLengthValue
    | fontRelativeValue whiteSpaceWithSpaceChar fontRelativeValue whiteSpaceWithSpaceChar fontRelativeValue
    | viewportRelativeValue whiteSpaceWithSpaceChar viewportRelativeValue whiteSpaceWithSpaceChar viewportRelativeValue
    | angleValue whiteSpaceWithSpaceChar angleValue whiteSpaceWithSpaceChar angleValue
    | resolutionValue whiteSpaceWithSpaceChar resolutionValue whiteSpaceWithSpaceChar resolutionValue
    | freqValue whiteSpaceWithSpaceChar freqValue whiteSpaceWithSpaceChar freqValue
    | timeValue whiteSpaceWithSpaceChar timeValue whiteSpaceWithSpaceChar timeValue
    | percentageValue whiteSpaceWithSpaceChar percentageValue whiteSpaceWithSpaceChar percentageValue
    ;


twoNumValue
    : absLengthValue whiteSpaceWithSpaceChar absLengthValue
    | fontRelativeValue whiteSpaceWithSpaceChar fontRelativeValue
    | viewportRelativeValue whiteSpaceWithSpaceChar viewportRelativeValue
    | angleValue whiteSpaceWithSpaceChar angleValue
    | resolutionValue whiteSpaceWithSpaceChar resolutionValue
    | freqValue whiteSpaceWithSpaceChar freqValue
    | timeValue whiteSpaceWithSpaceChar timeValue
    | percentageValue whiteSpaceWithSpaceChar percentageValue
    ;    

oneNumValue
    : absLengthValue
    | fontRelativeValue
    | viewportRelativeValue
    | angleValue
    | resolutionValue
    | freqValue
    | timeValue
    | percentageValue
    ;

whiteSpaceWithSpaceChar
    : SpaceChar
    ;

absLengthValue
    : NumberReg AbsLength
    ;

fontRelativeValue
    : NumberReg FontRelative
    ;

viewportRelativeValue:
    NumberReg ViewportRelative
    ;

angleValue
    : NumberReg Angle
    ;

resolutionValue
    : NumberReg Resolution
    ;

freqValue
    : NumberReg Freq
    ;

timeValue
    : NumberReg Time
    ;

percentageValue
    : NumberReg Percentage
    ;

property
    : Appearance 
	| Azimuth 
	| Bottom 
	| Clear 
	| Clip 
	| Columns 
	| Content 
	| Crop 
	| Cursor 
	| Direction 
	| Display 
	| Elevation 
	| Height 
	| Hyphens 
	| Icon 
	| Left 
	| Marks 
	| Monochrome 
	| Opacity 
	| Orientation 
	| Orphans 
	| Phonemes 
	| Position 
	| Quotes 
	| Resize 
	| Resolution 
	| Richness 
	| Right 
	| Scan 
	| Size 
	| Stress 
	| Top 
	| Visibility
	| Volume 
	| Widows 
	| Baseline Minus Shift
	| Aspect Minus Ratio
	| Backface Minus Visibility
	| Caption Minus Side
	| Dominant Minus Baseline
	| Empty Minus Cells
	| Letter Minus Spacing
	| Move Minus To
	| Play Minus During
	| Perspective Minus Origin
	| Punctuation Minus Trim
	| Rendering Minus Intent
	| Speech Minus Rate
	| String Minus Set
	| Unicode Minus Bidi
	| Vertical Minus Align
    | Inline Minus Box Minus Align
    | Background (backgroundOptions)?
    | Alignment (alignmentOptions)?
    | Animation (animationOptions)?
    | Bookmark (bookmarkOptions)?
    | Border (borderOptions)?
    | Box (boxOptions)?
    | Caption (captionOptions)?
    | Color (colorOptions)?
    | Column (columnOptions)?
    | Counter (counterOptions)?
    | Cue (cueOptions)?
    | Font (fontOptions)?
    | Float (floatOptions)?
    | Grid (gridOptions)?
    | Hyphenate (hyphenateOptions)?
    | Image (imageOptions)?
    | List (listOptions)?
    | Margin (marginOptions)?
    | Marks (markOptions)?
    | Marquee (marqueeOptions)?
    | Min (minMaxOptions)?
    | Max (minMaxOptions)?
    | Nav (navOptions)?
    | Device (deviceOptions)?
    | Drop (dropOptions)?
    | Fit (fitOptions)?
    | Outline (outlineOptions)?
    | Overflow (overflowOptions)?
    | Padding (paddingOptions)?
    | Page (pageOptions)?
    | Pause (pauseOptions)?
    | Rest (restOptions)?
    | Ruby (rubyOptions)?
    | Speak (speakOptions)?
    | Target (targetOptions)?
    | Transform (transformOptions)?
    | Transition (transitionOptions)?
    | Text (textOptions)?
    | Voice (voiceOptions)?
    | Word (wordOptions)?
    ;

backgroundOptions
    :
    Minus ( Attachment | Color | Image | Position | Repeat | Clip | Origin | Size )
    ;


alignmentOptions
    : Minus
    ( Adjust | Baseline )
    ;

animationOptions
    : Minus
    ( Delay | Direction | Duration  | Name  | Iteration Minus Count | Play Minus State | Timing Minus Function)
    ;


bookmarkOptions
    :
    Minus
    (Label | Level | Target)
    ;

borderOptions
    :
    Minus
    (Collapse | Color | Spacing | Style | Width | Radius |
    Top borderBottomTopOptions | Right borderRightLeftOptions | Bottom borderBottomTopOptions | Left borderRightLeftOptions | Image borderImageOptions)
    ;

borderBottomTopOptions
    :  Minus ( Color | Style | Width | Left Minus Radius | Right Minus Radius) ?
    ;

borderRightLeftOptions
    :  Minus ( Color | Style | Width) ?
    ;

borderImageOptions
    :  Minus ( Outset | Repeat | Slice | Source | Width ) ?
    ;

boxOptions
    :
    Minus ( Align | Decoration Minus Break | Direction | Flex (Minus Group)? | Lines | Ordinal Minus Group | Orient | Pack | Shadow | Sizing )
    ;

captionOptions
    :
    Minus (Side)
    ;

colorOptions
    :
    Minus ( Profile | Index )
    ;

columnOptions
    :
    Minus ( Count | Fill | Gap | columnRuleOptions | Span | Width )
    ;

columnRuleOptions
    :
    Minus ( Color | Style | Width )
    ;

counterOptions
    :
    Minus ( Increment | Reset )
    ;

cueOptions
    :
    Minus ( After | Before )
    ;

fontOptions
    :
    Minus ( Family | Size | Skretch | Style | Variant | Weight )
    ;

floatOptions
    :
    Minus ( Offset )
    ;

gridOptions
    :
    Minus ( Columns | Rows )
    ;

hyphenateOptions
    :
    Minus ( After | Before | Character | Lines | Resource )
    ;

imageOptions
    :
    Minus ( Orientation | Resolution )
    ;

listOptions
    :
    Minus ( Style Minus ( Image | Position | Type ) )
    ;

marginOptions
    :
    Minus ( Bottom | Left | Right | Top)
    ;

markOptions
    :
    Minus ( After | Before )
    ;

marqueeOptions
    :
    Minus ( Direction | Speed | Style | Play Minus Count )
    ;

minMaxOptions
    :
    Minus ( Color ( Minus Index )? | Height | Monochrome | Resolution | Width | Aspect Minus Ratio | Device minMaxDeviceOptions )
    ;

minMaxDeviceOptions
    :
    Minus ( Height | Width | Aspect )
    ;

navOptions
    :
    Minus ( Down | Index | Left | Right | Up )
    ;

deviceOptions
    :
    Minus ( Width | Height | Aspect Minus Ratio)
    ;

dropOptions
    :
    Minus Initial ( Before dropOptionsBeforeAfter | After dropOptionsBeforeAfter | Size | Value )
    ;

dropOptionsBeforeAfter
    :
    Minus (Adjust | Align )
    ;

fitOptions
    :
    Minus ( Position )
    ;



outlineOptions
    :
    Minus ( Color | Offset | Style | Width )
    ;

overflowOptions
    :
    Minus ( Style | X | Y )
    ;

paddingOptions
    :
    Minus ( Left | Top | Right | Bottom )
    ;

pageOptions
    :
    Minus ( Policy | pageBreakOptions )
    ;

pageBreakOptions
    :
    Minus ( After | Before | Inside )
    ;

pauseOptions
    :
    Minus ( After | Before )
    ;

restOptions
    :
    Minus ( After | Before )
    ;

rubyOptions
    :
    Minus ( Align | Overhang | Position | Span )
    ;

speakOptions
    :
    Minus ( Header | Numeral | Punctuation )
    ;

targetOptions
    :
    Minus ( Name | New | Position )
    ;

textOptions
    :
    Minus ( Align | Decoration | Height | Indent | Justify | Outline | Overflow | Shadow | Transform )
    ;

transformOptions
    :
    Minus ( Origin | Style )
    ;

transitionOptions
    :
    Minus ( Delay | Duration | Property | Timing Minus Function )
    ;

voiceOptions
    :
    Minus ( Family | Balance | Duration | Pitch (voicePitchOptions)? | Rate | Stress | Volume )?
    ;

voicePitchOptions
    :
    Minus Range
    ;

wordOptions
    :
    Minus ( Spacing | Break | Wrap )?
    ;
