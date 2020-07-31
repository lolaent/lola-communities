# Description

A `nextJS` & `netlify CMS` app with the purpose of having a fast developed easy to manage lola communities website.

## Installation & Startup

_You'll need an up-to-date node version (ideally managed with [nvm](https://github.com/nvm-sh/nvm)) and Git >= 2.20.0 and you'll need yarn installed in your node instance (`npm i -g yarn`)_

- clone the project: `git clone git@github.com:lolaent/lola-communities.git`
- use the required node version for the project `nvm use`
- install the needed dependencies: `yarn`
- start the project using `yarn dev`
- run the cms locally (only use if the csm interface is needed) using `yarn run localcms`

## Committing

There will be both dev commits as well as commits from Netlify on behalf of users who edit content from the cms.

Netlify's way of updating content is through commits since the content as well as the content model lives inside the project (see more below).

## Build & Deploy

`Vercel` is wired up to the repo and automatically deploys to production any changes done to `master`.

Vercel will also deploy & serve from a commit/branch.

## Using the CMS

In order to use the CMS currently you'll need to have a git account that has write acess to the repo.
This might change in the future perhaps by adding google auth.

The CMS can be used in one of two ways:

- login locally via `http://localhost:8080/admin/index.html` after running `yarn dev` _Changes you publish via the CMS in this mode will be written to your filesystem, and it is up to you to commit them and make a pull request._

- login in production via `https://lola-communities.vercel.app/admin/#/` _Changes you make via the CMS in this mode will result in commits against the `master` branch in the github repo._

Note that to modify the content the CMS is not necessarily needed as `.md` files storing pages data can be found inside the `/content` folder.

## Architecture

The app has the nextJS structure + the Netlify integration which works in the following way:

- there is a `config.yml` in which stores the configuration for Netlify, there you'll find endpoints and settings for Netlify as well as the collection model for each page
- for each page the data is stored in markdown files `.md` and the data has to correspond to the declared model from config.yml
- the pages are created using simple react components and consume the data stored in the `.md` files
- for styling there is a generic `normalize.css` file which contains normalizing css for most browser inconsistencies & the styling in the app is done using `styled components`

### Dev things to keep in mind

This setup is in no way set in stone, currently it's just an initial setup so feel free to add/ modify things.

- need to fix the # at the end of the admin URLS
- add perhaps grid system
- dig more into how the pages should be structured
- need to start implementing some common components for common elements found in the design once it exists
- add media storing service for images, can be done in many ways, `cloudinary` is one of them

````media_library:
   name: cloudinary
   config:
     cloud_name: ""
     api_key:""```
````
