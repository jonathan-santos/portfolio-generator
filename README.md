# Portfolio generator
Created using [Eleventy](https://www.11ty.dev/).

## How to use it
1. Edit the `portfolio.json` inside the `data` folder with information about your projects and yourself.
2. Run the command `npm start` to build the project and access `localhost:8080` to see how it turned out.
3. If it is good, just publish the `public` folder to any static site server, like [github pages](https://pages.github.com/) or [fast.io](https://fast.io).

## Portfolio.json
The different properties from it and it's values:

| Property               | Value   | What it does                                                                    | Example                                 |
|:-----------------------|:--------|:--------------------------------------------------------------------------------|:----------------------------------------|
| name                   | Text    | Name that appears at the top of the home page                                   | Jonathan                                |
| description            | Text    | Text that appears bellow the name of home page                                  | Hello there! This is my portfolio       |
| showFooter             | Boolean | If the default footer should appear                                             | true                                    |
| tagsFiltering          | Boolean | If the tags filtering option should appear at the homepage                      | true                                    |
| colors                 | Object  | Object that houses the properties that control the colors throught the site     | See the properties below                |
| colors/primary         | Color   | The color used in accents and backgrounds of important places throught the site | #bf1cff                                 |
| colors/textLight       | Color   | The color used in the light text throught the site                              | #eeeeee                                 |
| colors/textDark        | Color   | The color used in the dark text throught the site                               | #333333                                 |
| colors/backgroundLight | Color   | The color used in the light backgrounds throught the site                       | #eeeeee                                 |
| colors/backgroundDark  | Color   | The color used in the dark backgrounds throught the site                        | #1a2a3a                                 |
| tags                   | List    | The tags that projects can use for identification and filtering                 | See the [Tags](###tags) section         |
| projects               | List    | The projects of the portfolio                                                   | See the [Projects](###projects) section |

### Tags
The properties possible for each tag:

| Property | Value | What it does         | Example |
|:---------|:------|:---------------------|:--------|
| name     | Text  | The name of the tag  | Web     |
| color    | Color | The color of the tag | #43e0d3 |

### Projects
The properties possible for each project:

| Property    | Value   | What it does                                                                                                 | Example                                                                                  |
|:------------|:--------|:-------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| name        | Text    | The name of the project                                                                                      | My Awesome project                                                                       |
| icon        | Image   | The image that appears in the preview of the project and in the title of the dedicated page of the project   | https://www.veggieprezi.com/wp-content/uploads/2017/09/20170731_214129-555x688.jpg       |
| tag         | Text    | The name of the tag of the project                                                                           | web                                                                                      |
| permalink   | Text    | The final link of the project                                                                                | my-awesome-project                                                                       |
| description | Text    | The description of the project                                                                               | This is my project about a thing I did in my free time                                   |
| links       | List    | The list of links that appears on the dedicated page of the project                                          | See the [Links](###links) section                                                        |
| images      | List    | The list of images that appears on the dedicated page of the project, each image is a direct link to a image | [ "https://www.veggieprezi.com/wp-content/uploads/2017/09/20170731_214129-555x688.jpg" ] |
| video       | Text    | The link to a video about the project                                                                        | https://kutt.it/7nbVKz                                                                   |
| youtube     | Text    | The link to a embed youtube video about the project                                                           |https://www.youtube.com/embed/dQw4w9WgXcQ                                                |

### Links
THe properties for each possible link:

| Property | Value | What it does                          | Example                |
|:---------|:------|:--------------------------------------|:-----------------------|
| name     | Text  | The text that appears before the link | Project running        |
| url      | Text  | The URL the link points to            | https://kutt.it/7nbVKz |