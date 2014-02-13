#--------------------------------------------------#
#    Title: Default Page Content Setup
#--------------------------------------------------#
#    File name:  page.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tssetup, page
#    Project: [Projectname]
#
#    Author: Janik von Rotz
#    Author E-Mail: contact@janikvonrotz.ch
#
#    Create Date: 22.05.2012
#    Last Edit Date: 22.05.2012
#    Version: 1.0.0
#
#    License:
#    This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/3.0/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

page = PAGE
page{
  typeNum = 0 
  #--------------------------------------------------#
  #    Shortcut Icon
  #--------------------------------------------------# 
  shortcutIcon = {$fileadmin_root}/layout/{$mainpage_name}/img/favicon.ico   
  #--------------------------------------------------#
  #    Meta
  #--------------------------------------------------#   
  meta.keywords.data = DB:pages:{$rootpage_id}:keywords
  meta.keywords.override.field = keywordsmeta
  meta.description.data = DB:pages:{$rootpage_id}:description
  meta.description.override.field = description
  meta.abstract.data = DB:pages:{$rootpage_id}:abstract
  meta.abstract.override.field = abstract
  meta.author.data = DB:pages:{$rootpage_id}:author
  meta.author.override.field = author
}
#--------------------------------------------------#
#    Template
#--------------------------------------------------#
page.10 = TEMPLATE
page.10{

	template = FILE
	template.file = {$fileadmin_root}/layout/{$mainpage_name}/TemplateDefault.html    
	#--------------------------------------------------#
	#    Subparts
	#--------------------------------------------------# 
	workOnSubpart = SUBPART_BODY
	subparts{

		HEADER = TEXT
		HEADER{
			field = title      
		}
		HEADER.wrap = <H1>|</H1>		

		LOGO = IMAGE
		LOGO{
			file = {$fileadmin_root}/layout/page/{$mainpage_name}/res/ow_logo.gif
			altText = 
			titleText = 
			linkWrap = <a href="{$base_url}">|</a>
		}		

		CONTENT < styles.content.get
		SIDEBAR < styles.content.getBorder
		TEASER < styles.content.getRight		

		NAVIGATION = HMENU
		NAVIGATION{
			entryLevel = {$entryLevel}
			wrap = <ul>|</ul>
			1 = TMENU
			1.NO.linkWrap = <li>|</li>

			1.CUR = 1
			1.CUR.linkWrap = <li class="active"><a href="#">|</a></li>
			1.CUR.doNotLinkIt = 1	
		}		
		
		LANGUAGE = COA	
		
		FOOTER = COA
	
	}
}