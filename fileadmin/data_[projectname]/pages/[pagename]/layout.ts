#--------------------------------------------------#
# Title: Root Page Layout Setup
#--------------------------------------------------#
# File name: Layout.ts
# Description: 
# Tags: typo3, typoscript, setup, page
# Project: 
#
# Author: Janik von Rotz
# Author Contact: www.janikvonrotz.ch
#
# Create Date: 2012-05-22
# Last Edit Date: 2013-05-14
# Version: 2.0.0
#
# License: 
# This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Switzerland License.
# To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ch/ or 
# send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

#--------------------------------------------------#
# header
#--------------------------------------------------#

page{

	headerData{
		10 = TEXT
		10.value = <meta http-equiv="X-UA-Compatible" content="IE=8" />
		20 = TEXT
		20.value = <meta name="robots" content="Index,Follow">
		30 = TEXT
		30.value =  <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		110 = TEXT
		110.value = <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">    
    }
 
	includeCSS{
		file1 = {$fileadmin_root}/layout/{$mainpage_name}/css/style.css
	}

	includeJS{
		file4 = {$fileadmin_root}/layout/{$mainpage_name}/js/script.js
	}

}

#--------------------------------------------------#
# browser conditions
#--------------------------------------------------#

[browser = msie]
page.includeCSS{
	file2 = {$fileadmin_root}/layout/{$mainpage_name}/css/style_ie.css
}
[global]

#--------------------------------------------------#
# template selection
#--------------------------------------------------#

[globalVar = TSFE:page|layout = 1]
	  page.10.template.file = {$fileadmin_root}/layout/{$mainpage_name}/TemplateLayout1.html
	  page.includeCSS.file3 = {$fileadmin_root}/layout/{$mainpage_name}/css/style1.css
[global]

[globalVar = TSFE:page|layout = 2]
	  page.10.template.file = {$fileadmin_root}/layout/{$mainpage_name}/TemplateLayout2.html
	  page.includeCSS.file3 = {$fileadmin_root}/layout/{$mainpage_name}/css/style2.css
[global]
