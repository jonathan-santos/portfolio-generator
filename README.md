# Portfolio generator

A project that generates a portfolio site for you! All generated from a single json file. Created using [Eleventy](https://www.11ty.dev/).

## Table of contents

- [Portfolios built with it](#portfolios-built-with-it)
- [How to use it](#how-to-use-it)
- [Portfolio.json](#portfoliojson)
  - [Colors](#Colors)
  - [Styles](#Styles)
  - [i18n](#i18n)
  - [Categories](#Categories)
  - [Tags](#Tags)
  - [Projects](#Projects)
  - [Images](#Images)
  - [Links](#Links)
  - [Videos](#Videos)
  - [Projects](#Projects)

## Portfolios built with it

- [Example portfolio](https://jhow.io/portfolio-generator) (The default one created by this portfolio)

- [Jonathan Santos](https://portfolio.jhow.io)

## How to use it

0. Have [`node.js`](https://nodejs.org) installed in your computer (Preferably version 12 or higher)

1. Fork and `git clone` the repository

2. Run the command `npm install` to install the `npm` dependencies in the project

3. Edit the `portfolio.json` inside the `src/data` folder with information about your projects and yourself

4. Define if you want to have multiple languages in your portfolio:

    4.1. If you don't want multiple languages, delete `src/data/pt-BR.json`, `src/data/es-MX.json`, `src/templates/pt-BR/` and `src/templates/es-MX`

    4.2. If you want multiple languages, create (or modify current) language versions of your `portfolio.json` in `src/data` (for example the `pt-BR.json` or `es-MX`) and update the folders in `src/templates` (for example, you want a french version? Duplicate the `pt-BR/` folder, rename it to `fr-FR` and edit their contents)

5. See the resulting website running the command `npm start`, access the resulting website in [`localhost:3000`](http://localhost:3000)

6. Liked the result? Then you have two options for deploying the website:

    6.1. [`Github Pages(Easy)`] Deploy the repository in a github repository ([like this](https://github.com/jonathan-santos/portfolio)), Change the `src/data/portfolio.json` property `root` to `portfolio` ([like this](https://github.com/jonathan-santos/portfolio/raw???)), and then in your computer run the command `npm run deploy`

    6.2. [Deploy yourself] Run the command `npm run build`, it will build all the static website files in the folder `public`, you can then copy the folder content and deploy it to different places to deploy your portfolio (many free by the way):
      - [Netifly](https://www.netlify.com/)
      - [Github pages - Manually](https://pages.github.com/)
      - [Amazon S3](https://aws.amazon.com/free/webapps/?trk=ps_a134p000006gXwDAAU)
      - [Your own dev server](https://kutt.it/7nbVKz)

7. And for the most important step, share your published portfolio, do it in [linkedin](https://linkedin.com), in your github profile, in your [twitter](https://twitter.com) or any other place you like. But please share it with me, I'd like to see it and, if you would like it, to add in this `README`, I'll be happy to do it 👍

## Portfolio.json

The file `src/data/portfolio.json` is the file used to configure how the resulting website will be, from colors and styles, to categories and projects, all is in this file (and the different languages like `pt-BR.json` or `es-MX.json`).

Here is the reference for the properties and values it accepts:

| Property               | Value   | What it does                                                                                                  | Example                                            |
|:-----------------------|:--------|:--------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| name                   | Text    | Name that appears at the top of the home page and title of the resulting website                              | Jonathan                                           |
| description            | Text    | Text that appears bellow the name of home page and description of the resulting website                       | Hello there! This is my portfolio                  |
| showFooter             | Boolean | If the default footer should appear                                                                           | true                                               |
| filters                | Boolean | If the categories and tags filtering system should be activated                                               | true                                               |
| root                   | Text    | The relative link to the site, used if your portfolio site is not in the root of server, like in github pages | /portfolio                                         |
| colors                 | Object  | Object that contains the colors used in the website                                                           | See bellow the [`colors`](#colors) section         |
| styles                 | Object  | Object that contains some styles configuration used in the website                                            | See bellow the [`styles`](#styles) section         |
| i18n                   | Object  | Object that contains internationalization configuration                                                       | See bellow the [`i18n`](#i18n) section             |
| categories             | List    | The categories that projects can use for identification and filtering                                         | See bellow the [`categories`](#categories) section |
| tags                   | List    | The tags that projects can use for identification and filtering                                               | See bellow the [`tags`](#tags) section             |
| projects               | List    | The projects of the portfolio                                                                                 | See bellow the [`projects`](#projects) section     |

### Colors

Object containg the different colors used in the resulting website, each color is a CSS color, so you can use `Hex`, `RGB` or `HSL`.

| Property         | Value  | What it does                                        | Example            |
|:-----------------|:-------|:----------------------------------------------------|:-------------------|
| primary          | Color  | The accent color used in various website locations  | #0074D9            |
| text-light       | Color  | The color used by text in dark backgrounds          | rgb(255, 255, 255) |
| text-dark        | Color  | The color used by text in light backgrounds         | hsl(0, 0, 20)      |
| background-light | Color  | The color used in light backgrounds                 | #FFFFFF            |
| background-dark  | Color  | TThe color used in dark backgrounds                 | rgb(26, 42, 58)    |

Example:

``` json
"colors": {
  "primary": "#0074D9",
  "text-light": "#FFFFFF",
  "text-dark": "#333333",
  "background-light": "#FFFFFF",
  "background-dark": "#1A2A3A"
},
```




### Styles
### i18n
### Categories
### Tags

The properties for each tag:

| Property | Value  | What it does               | Example |
|:---------|:-------|:---------------------------|:--------|
| id       | Number | The identifier of the tag  | Web     |
| name     | Text   | The name of the tag        | Web     |
| color    | Color  | The color of the tag       | #0074D9 |

### Projects
#### Images
#### Links
#### Videos
### Projects
The properties possible for each project:

| Property    | Value   | What it does                                                                                                 | Example                                                                                  |
|:------------|:--------|:-------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| name        | Text    | The name of the project                                                                                      | My Awesome project                                                                       |
| icon        | Image   | The image that appears in the preview of the project and in the title of the dedicated page of the project   | https://www.veggieprezi.com/wp-content/uploads/2017/09/20170731_214129-555x688.jpg       |
| tag         | Text    | The name of the tag of the project                                                                           | web                                                                                      |
| permalink   | Text    | The final link of the project                                                                                | my-awesome-project                                                                       |
| description | Text    | The description of the project                                                                               | This is my project about a thing I did in my free time                                   |
| links       | List    | The list of links that appears on the dedicated page of the project                                          | See the [Links](#links) section                                                        |
| images      | List    | The list of images that appears on the dedicated page of the project, each image is a direct link to a image | [ "https://www.veggieprezi.com/wp-content/uploads/2017/09/20170731_214129-555x688.jpg" ] |
| video       | Text    | The link to a video about the project                                                                        | https://kutt.it/7nbVKz                                                                   |
| youtube     | Text    | The link to a embed youtube video about the project                                                           |https://www.youtube.com/embed/dQw4w9WgXcQ                                                |

### Links
The properties for each possible link:

| Property | Value | What it does                          | Example                |
|:---------|:------|:--------------------------------------|:-----------------------|
| name     | Text  | The text that appears before the link | Project running        |
| url      | Text  | The URL the link points to            | https://kutt.it/7nbVKz |
