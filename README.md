# jquery-materialize-labelled-dropdown

This plugin provides a [jQuery](https://jquery.com/) extension that wraps the
dropdown in [Materialize](http://materializecss.com/) and keeps the trigger of
the dropdown updated with the currently selected value. This makes the dropdown
act like a `select` while keeping a consistent look and feel.

## Usage

[Demo](https://c-w.github.io/jquery-materialize-labelled-dropdown/)

### Markup

```html
<html>
  <head>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
    <script type='text/javascript' src='https://cdn.rawgit.com/c-w/jquery-materialize-labelled-dropdown/a5d4acc/jquery-materialize-labelled-dropdown.min.js'></script>

    <link type='text/css' rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
  </head>

  <body>
    <ul class='dropdown-content' id='my-content'>
      <li class='dropdown-item'><a><span class='dropdown-label-text'>Label</span> (this text in parentheses won't show up in the label)</a></li>
      <li class='dropdown-item active'><a><span class='dropdown-label-text'>One</span></a></li>
      <li class='dropdown-item'><a><span class='dropdown-label-text'>Two</span></a></li>
    </ul>

    <div class='navbar-fixed'>
      <nav>
        <div class='nav-wrapper'>
          <ul>
            <li>
              <a class='dropdown-button' data-activates='my-content'>
                <span class='dropdown-label' data-format='Selected: {0}!'></span>
                <i class="mdi-navigation-arrow-drop-down right"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <script type='text/javascript'>
      $(document).ready(function() {
        $('.dropdown-button').labelledDropdown();
      });
    </script>
  </body>
</html>
```

### Step-by-step

- Create a [Materialize dropdown](http://materializecss.com/navbar.html#navbar-dropdown).
- Mark-up the elements in the dropdown with the class `dropdown-item`.
- Mark-up the dropdown label with the class `dropdown-label`.
- Mark-up the text in the dropdown-items that should be shown in the
  dropdown-label with the class `dropdown-label-text`.
- Add a `data-format` attribute to the dropdown-label. This format string is
  used to determine the text displayed in the label. The `{0}` placeholder
  will be dynamically replaced with the value selected in the dropdown.
- Mark-up onw of the dropdown elements with the `active` class. The value of
  this element will be used as the initial text on the dropdown label.
- Instead of using `dropdown` to initialize the dropdown, call `labelledDropdown`.
- That's all.
