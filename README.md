Finishing this guide you'll get:

* A running Typo3 installation
* A simple page with a configured backend layout, fronted layouts and permissions
* Configured indexed search extension
* Nice urls with RealUrl
* Google sitemap for your site
* Rss feed for your news and pages
* A simple Backend Editor customization
* Everything to set this installation in a maintenance mode

Specification of latest running installation:

* Date: 13.02.2013
* OS: ?
* Provider: Hoststar
* Browser: Google Chrome - 31.0.1650.63  
* Typo3: 6.1
* PHP: ?

# [Install Typo3](http://typo3.org/download/)

# Install Packages

if possible install these tools

## [npm](https://www.npmjs.org/)

This is a recommended package manager, it's not required to run this project.

	$ sudo apt-get install npm

## [poppler-utils](https://packages.debian.org/sid/poppler-utils)

contains the required binary `pdftotext`

	$ sudo apt-get install poppler-utils

If not possible to install ask your provider for the path to the binary.
	
# Typo3 Install Tool Configuration

When setting up the Typo3 installation update these configurations:

* `TYPO3_CONF_VARS['GFX']['TTFdpi'] = '96'`
* `$TYPO3_CONF_VARS['SYS']['sitename'] = 'Your Typo3 Instance Name'`
* `$TYPO3_CONF_VARS['SYS']['setMemoryLimit'] = '64'`

# Typo3 Site Setup

Copy the files inside the fileadmin folder to the fileadmin directory of you Typo3 installation.

Update the name for your project `data_[projectname]`

* [pagename] > navigation1]
		* [navigation1] > site1
			* site1
				* subsite1
				* subsite2
				* subsite3
			* site2
				* subsite1
				* subsite2
				* subsite3			

# Configure Default Template

Create template on `[pagename]`

Add contstants to `[pagename]`

	# cat=website settings; type=string; label= the path to the project fileadmin root
	fileadmin_root = fileadmin/[...]/data_[projectname]
	# cat=website settings; type=string; label= foldername of the mainpage
	mainpage_name = [pagename]
	# cat=website settings; type=string; label= the URL to your homepage
	base_url = http://.../
	# cat=website settings; type=int+; label= root page id (point where the navigation starts)
	rootpage_id = id_number
	# cat=website settings; type=int+; label= sitemap page id (point where the sitemap starts)
	sitemap_page_id = id_number
	# cat=website settings; type=int+; label= search page id (point where the results should be displayed)
	search_page_id = id_number
	# cat=website settings; type=int+; label= set the entry level nummber
	entryLevel = entryLevel_number
	# cat=website language; type=int+; label= set id for English language
	language_english_id = id_number
	# cat=website language; type=int+; label= set id for French language
	language_french_id = id_number
	# cat=website language; type=int+; label= set id for Spanish language
	language_spanish_id = id_number
	# cat=website language; type=int+; label= set id for Dutch language
	language_dutch_id = id_number
	# cat=website language; type=int+; label= set id for Portugese language
	language_portugese_id = id_number
	# cat=website language; type=int+; label= set id for German language
	language_german_id = id_number
	# cat=website language; type=int+; label= set id for default language
	language_default_id = id_number
	# cat=rss settings; type=int+; label= rss page id (contains the content element)
	rss_page_id = id_number
	# cat=rss settings; type=int+; label= rss content id (content element contains rss pages)
	rss_content_id = id_number
	# cat=rss settings; type=string; label= rss copyright text
	rss_copyright = string

Copy & rename `data_schnuitz/pages/[pagename]`

Add setup to `[pagename]`

	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/pages/[pagename]/config.ts">
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/pages/[pagename]/page.ts">
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/pages/[pagename]/content.ts">
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/pages/[pagename]/layout.ts">
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/lang/setup_[language].ts">

Copy & rename `data_schnuitz/layout/[mainpage name]`

Update constant values

Add language

Add Page TSConfig in `[pagename]`

	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/pages/[pagename]/tsconfig.ts">
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/pages/[pagename]/tcemain.ts">
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/pages/[pagename]/tceform.ts">
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/pages/[pagename]/be_editor_custom.ts">

Add backend layout

	backend_layout {
		colCount = 2
		rowCount = 2
		rows {
			1 {
				columns {
					1 {
						name = TEASER
						colspan = 2
						colPos = 2
					}
				}
			}
			2 {
				columns {
					1 {
						name = CONTENT
						colPos = 0
					}
					2 {
						name = SIDEBAR
						colPos = 3
					}
				}
			}
		}
	}

Add css styled content

# Permissions

Add group administrators with member admin

Add user editor

Add group editors with member editor

Copy & rename `fileadmin/data_schnuitz/groups/[groupname]` foreach group

Add tsconfig for each group

	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/groups/[groupname]/tsconfig.ts">

Set site permissions

# Real Url

Install extension RealURL

Update htaccess

	RewriteEngine On
	RewriteRule ^/typo3$ - [L]
	RewriteRule ^/typo3/.*$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteCond %{REQUEST_FILENAME} !-l
		
		
Remove sites from speaking URL
		
# Backend Editor


# Indexed Search

Install extension IndexedSeach

Update extension config

* Path to PDF parsers: `/user/bin`
* PDF parsing mode: `1`
* Max external files to index: `50`

Add search plugin on search site

Add setup for search box to the root

	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/ext/[extensionname]/setup.ts">

update constants

# Rss Feed

Creates a xml site for rss feeds

## Constants

	# cat=rss settings; type=int+; label= rss page id (contains the content element)
	rss_page_id = [id_number]

	# cat=rss settings; type=int+; label= rss content id (content element contains rss pages)
	rss_content_id = [id_number]

	# cat=rss settings; type=string; label= rss copyright text
	rss_copyright = [string]

## Setup

	# typoscript rss library
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/lib/rss.ts">
	
	# rss page setup
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/tssetup/page.ts">
	
	# rss page configurations
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/tssetup/config.ts">
	
# Google Sitemap

Page template to generate a google sitemap from your page tree and tt_news records (optional).

## Constants

	# cat=google sitemap settings; type=boolean; label= include not in menu websites (1=yes/0=no)
	gmap_include_not_in_menu = 0

	# cat=google sitemap settings; type=string; label= exclude pages by uid (comma seperated)[24,28,34]
	gmap_exclude_uid_list = [string]

	# cat=google sitemap settings; type=int+; label= page id that contains the tt_news records
	gmap_pid_tt_news_records = [int+]

	# cat=google sitemap settings; type=int+; label= page id that contains the tt_news detail view
	gmap_pid_tt_news_detail_view = [int+]

## Setup

	# Root Page Layout Setup
	<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/library/[GoogleSitemap.ts">

## Example

![Google Sitemap Picture 1](https://raw.github.com/janikvonrotz/Typo3-Project-Template/master/docs/Google%20Sitemap%201.png)


![Google Sitemap Picture 2](https://raw.github.com/janikvonrotz/Typo3-Project-Template/master/docs/Google%20Sitemap%202.png)

# Maintenance