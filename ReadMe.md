# jquery-materialize-named-dropdown

This plugin provides a [jQuery](https://jquery.com/) extension that wraps the
dropdown in [Materialize](http://materializecss.com/) and keeps the trigger of
the dropdown updated with the currently selected value. This makes the dropdown
act like a `select` while keeping a consistent look and feel.

## Usage

[Demo](https://c-w.github.io/jquery-materialize-named-dropdown/)

```html
<html>
  <head>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
    <script type='text/javascript' src='https://cdn.rawgit.com/c-w/jquery-materialize-named-dropdown/master/jquery-materialize-named-dropdown.min.js'></script>

    <link type='text/css' rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
  </head>

  <body>
    <ul class='dropdown-content' id='my-content'>
      <li class='dropdown-item'><a>One</a></li>
      <li class='dropdown-item active'><a>Two</a></li>
      <li class='dropdown-item'><a>Three</a></li>
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
        $('.dropdown-button').named_dropdown();
      });
    </script>
  </body>
</html>
```
