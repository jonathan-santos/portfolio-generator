# Portfolio generator

A project that generates a portfolio site for you! All generated from a single json file. Created using [Eleventy](https://www.11ty.dev/).

## Table of contents

- [Portfolios built with it](#portfolios-built-with-it)
- [How to use it](#how-to-use-it)
- [Portfolio.json](#portfoliojson)
  - [Colors](#Colors)
  - [i18n](#i18n)
  - [Category](#Category)
  - [Tag](#Tag)
  - [Project](#Project)
  - [Image](#Image)
  - [Link](#Link)
  - [Video](#Video)

## Portfolios built with it

- [Example portfolio](https://jhow.io/portfolio-generator)

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

| Property               | Value         | What it does                                                                                                  | Example                                            |
|:-----------------------|:--------------|:--------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| name                   | Text          | Name that appears at the top of the home page and title of the resulting website                              | Jonathan                                           |
| description            | Text          | Text that appears bellow the name of home page and description of the resulting website                       | Hello there! This is my portfolio                  |
| showFooter             | Boolean       | If the default footer should appear                                                                           | true                                               |
| filters                | Boolean       | If the categories and tags filtering system should be activated                                               | true                                               |
| root                   | Text          | The relative link to the site, used if your portfolio site is not in the root of server, like in github pages | /portfolio                                         |
| colors                 | Object        | Object that contains the colors used in the website                                                           | See bellow the [`colors`](#colors) section         |
| i18n                   | Object        | Object that contains internationalization configuration                                                       | See bellow the [`i18n`](#i18n) section             |
| categories             | List/Category | The categories that projects can use for identification and filtering                                         | See bellow the [`category`](#category) section     |
| tags                   | List/Tag      | The tags that projects can use for identification and filtering                                               | See bellow the [`tag`](#tag) section               |
| projects               | List/Project  | The projects of the portfolio                                                                                 | See bellow the [`project`](#project) section       |

### Colors

Object containg the different colors used in the resulting website, each color is a CSS color, so you can use `Hex`, `RGB` or `HSL`.

| Property         | Value  | What it does                                        | Example            |
|:-----------------|:-------|:----------------------------------------------------|:-------------------|
| primary          | Color  | The accent color used in various website locations  | #0074D9            |
| text-light       | Color  | The color used by text in dark backgrounds          | rgb(255, 255, 255) |
| text-dark        | Color  | The color used by text in light backgrounds         | hsl(0, 0, 20)      |
| background-light | Color  | The color used in light backgrounds                 | white              |
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

### i18n

Object containg the different styles used in the resulting website, each style affects a different aspect of the resulting website.

| NOTE: Each language should be represented by [`ISO 639-1`](https://www.andiamo.co.uk/resources/iso-language-codes) codes, with the second part being UPPERCASE

| Property | Value     | What it does                                                | Example                     |
|:---------|:----------|:------------------------------------------------------------|:----------------------------|
| langs    | List/Text | The different languages the resulting website should output | ['es-MX', 'pt-BR', 'en-US'] |
| default  | Text      | The language used in the root of the website                | en-US                       |

Example:

``` json
"i18n": {
  "langs": ["en-US", "pt-BR", "es-MX"],
  "default": "en-US"
},
```

### Category

Object representing a filter used by the projects. Each project can have only 1 category.

| Property | Value  | What it does                   | Example |
|:---------|:-------|:-------------------------------|:--------|
| id       | Number | The identifier of the category | 0       |
| name     | Text   | The name of the category       | Web     |
| color    | Color  | The color of the category      | #0074D9 |

Example:

``` json
{
  "id": 0,
  "name": "Dessert",
  "color": "#FF0000"
}
```

### Tag

Object representing a filter used by the projects. Each project can have as many tags as wanted.

| Property | Value  | What it does              | Example |
|:---------|:-------|:--------------------------|:--------|
| id       | Number | The identifier of the tag | 0       |
| name     | Text   | The name of the tag       | Food    |
| color    | Color  | The color of the tag      | #0074D9 |

Example:

``` json
{
  "id": 0,
  "name": "French",
  "color": "green"
}
```

### Project

Objects that defines how the project is displayed both in preview and in it's own page.

| Property    | Value       | What it does                                                     | Example                                        |
|:------------|:------------|:-----------------------------------------------------------------|:-----------------------------------------------|
| id          | Number      | The identifier of the project                                    | 0                                              |
| name        | Text        | The name of the project                                          | Video about cooking                            |
| description | Text        | The description of the project                                   | A video I made showing what is cooking         |
| category    | Number      | The Id of the category of the project                            | 0                                              |
| tags        | List/Number | The Ids of the tags of the project                               | [0, 2, 25, 3]                                  |
| icon        | Image       | The image used by the project review and in the top of it's page | See bellow the [`image`](#image) section       |
| links       | List/Link   | The links to be displayed at the the project page                | See bellow the [`link`](#link) section       |
| images      | List/Image  | The images to be displayed at the project page                   | See bellow the [`image`](#image) section       |
| videos      | List/Video  | The videos to be displayed at the project page                   | See bellow the [`video`](#video) section       |

Example:

``` json
{
  "id": 0,
  "name": "Example project 1",
  "description": "My project 1 is actually a Pudding",
  "category": 0,
  "tags": [0, 2, 5, 16],
  "icon": {
    "src": "pudding.jpg",
    "width": 373,
    "height": 280
  },
  "links": [
    {
      "text": "website",
      "url": "http://www.pudim.com.br"
    },
    {
      "text": "More images of pudding at google",
      "url": "https://www.google.com/search?tbm=isch&q=pudding&tbs=imgo:1"
    }
  ],
  "images": [
    {
      "src": "https://cookingwithdog.com/wp-content/uploads/2017/01/custard-pudding-00.jpg",
      "alt": "A Pudding",
      "width": 1280,
      "height": 720
    },
    {
      "src": "https://www.yummytummyaarthi.com/wp-content/uploads/2017/08/1-9.jpg"
    }
  ],
  "videos": [
    { "src": "https://kutt.it/7nbVKz" },
    { "youtube": "https://www.youtube.com/embed/CpGwrfOzCA0?start=21" }
  ]
},
```

#### Image

Objects containing properties used by images in projects.

| Note: The `src` property that doesn't contain a `http` link to a image, directly links to files contained in the folder `src/assets/img`

| Property | Value  | What it does                                          | Example                                                                                       |
|:---------|:-------|:------------------------------------------------------|:----------------------------------------------------------------------------------------------|
| src      | Text   | `http` link or file name of image                     | `pudding.png`, `https://cookingwithdog.com/wp-content/uploads/2017/01/custard-pudding-00.jpg` |
| alt      | Text   | The image description used by bots and screen readers | `A pudding`, `A photo of a pudding`, `The pudding I made`                                     |
| width    | Number | Width of the image                                    | `1280`, `1920`                                                                                |
| height   | Number | Height of the image                                   | `720`, `1080`                                                                                 |

``` json
{
  "src": "pudding.png"
}

// ...

{
  "src": "pudding.png",
  "alt": "A pudding photo"
}

// ...

{
  "src": "https://cookingwithdog.com/wp-content/uploads/2017/01/custard-pudding-00.jpg",
  "alt": "A Pudding I totally made",
  "width": 1280,
  "height": 720
}

```

#### Link

Link displayed in the project page

| Note: All links text have the first letter uppercased in the resulting website (ex: `website` will render as `Website`)

| Property | Value | What it does                          | Example                      |
|:---------|:------|:--------------------------------------|:-----------------------------|
| text     | Text  | The text displayed by the link        | `Website`, `Project running` |
| url      | Text  | The URL the link points to            | https://kutt.it/7nbVKz       |

``` json
{
  "text": "website",
  "url": "http://www.pudim.com.br"
}
```

#### Video

Objects containing properties used by videos in projects. The video must be provided by one of the properties, with the `youtube` one, resulting in a `iframe` to the video, [like this](https://jhow.io/portfolio-generator/projects/2)

| Note: The `src` property that doesn't contain a `http` link to a video, directly links to files contained in the folder `src/assets/video`

| Property | Value  | What it does                                          | Example                                |
|:---------|:-------|:------------------------------------------------------|:---------------------------------------|
| src      | Text   | `http` link or file name of video                     | `makeof.mp4`, `https://kutt.it/7nbVKz` |
| youtube  | Text   | Youtube video                                         | `https://youtu.be/1_q8txKyg4E`         |

``` json
{
  "src": "https://kutt.it/7nbVKz"
}

// ...

{
  "src": "https://kutt.it/7nbVKz"
}

// ...

{
  "youtube": "https://youtu.be/1_q8txKyg4E"
}
```
