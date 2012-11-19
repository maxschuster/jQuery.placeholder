# jQuery.placeholder
Counterfeit support for placeholder<br /><br />
<b>License:</b> Apache License, Version 2.0<br />
<b>Demo:</b> http://dev.maxschuster.eu/jQuery.placeholder/<br />

# Table of contents

* <a href="#methods">Methods</a>
* <a href="#settings">Settings</a>
* <a href="#style_classes">Style Classes</a>

# Methods

## init
Initializes the plugin on a jQuery object

### Usage:
```JavaScript
$('selector').placeholder(options);
```

### Parameter:
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Comment</th>
</tr>
<tr>
<td>options</td>
<td>Object</td>
<td>{}</td>
<td>Plugin options to override predefined settings. (See Settings)</td>
</tr>
</table>

### Returns:
<b>jQuery Object</b> <i>To provide chainability.</i>

## init
Removes the plugin from a jQuery object

### Usage:
```JavaScript
$('selector').placeholder('destroy');
```

### Parameter:
none

### Returns:
<b>jQuery Object</b> <i>To provide chainability.</i>

# Settings

## force
Force the plugin to be applied even if placeholders are supported.<br/>
<b>Type:</b> Boolean<br/>
<b>Default:</b> false

## borrowClasses
Tells the plugin to borrow classes from the original input for the fake input.<br/>
<b>Type:</b> Boolean<br/>
<b>Default:</b> true

## borrowSize
Tells the plugin to synchronize height and width between original and fake input.<br/>
<b>Type:</b> Boolean<br/>
<b>Default:</b> false

## borrowPadding
Tells the plugin to synchronize padding between original and fake input.<br/>
<b>Type:</b> Boolean<br/>
<b>Default:</b> false

## borrowMargin
Tells the plugin to synchronize margin between original and fake input.<br/>
<b>Type:</b> Boolean<br/>
<b>Default:</b> false

## color
Color for the placeholder text. If === false it will not be applied.<br/>
<b>Type:</b> String | Boolean<br/>
<b>Default:</b> '#ccc'

# Style Classes

## placeholder
Applied to all original input fields

## placeholder-fake
Applied to all fake input fields