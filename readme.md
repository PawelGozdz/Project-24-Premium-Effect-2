
Driving School Project for my friend.
===================
Recucing img size by changing its quality
convert picture.jpg -sampling-factor 4:2:0 -strip -quality 65 -interlace JPEG -colorspace sRGB picture-compressed.jpg

Reducing img size by changing its size
magick picture.png -resize 85% picture-small.png
===============

# 

#### <a id="routes">Routes/pages of the website</a>

* `/contact`: Page for contact



#### Dependencies

* NodeJS >= 6 https://nodejs.org
  * *In order to run the project in your local machine, you must install NodeJS. You can download the executable file for your Operating System from their website and install it.*

#
# 
# Guide to continue developing

#### Branches
* `master` main branch, used for production.

#### Process of development

###### Omit the Cloning step if you already have the code in your computer
##### Cloning  (new folder/computer)

1. Clone the `master` branch of the repository first `git clone https://github.com/PawelGozdz/Project-24-Premium-Effect-2.git`

##### Developing
1. Start the `development server` of the project with `npm run dev` (if you want to test the development server in your local network.
2. Check the available [routes](#routes) of your website.
3. Perform all the modifications you need


##### Compiling to production
app.js is a starting file. All files (escept node_modules) need to be deployed and installed on the server.


