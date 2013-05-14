#--------------------------------------------------#
#    Title: [File-Title]
#--------------------------------------------------#
#    File-Type: [File-Type]
#    Description: [Description]
#    Project: [Projectname]
# 
#    Author: Janik von Rotz
#    Author E-Mail: contact@janikvonrotz.ch
#
#    Create Date: dd.mm.yyyy hh.mm
#    Last Edit Date: dd.mm.yyyy hh.mm
#    Version: 0.0.0
#--------------------------------------------------#

#--------------------------------------------------#
#    Header config
#--------------------------------------------------#

page{
	includeCSS{
		file1 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/reset.css
		file2 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/font.css
		file3 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/layout_master.css
		file4 = {$fileadmin_root}/layout/ext/rte/template.css
	}
	
	# includeJS {
		# file1 = {$fileadmin_root}/lib/javascript/[filename]
		# file2 = {$fileadmin_root}/lib/javascript/[filename]
	# }
	
	# headerData {
		# 10 = TEXT
		# 10.value = <meta name="[name]" content="[content]"/>
    # }
}
	#Browser conditions
# [browser = msie]
# page.includeCSS{
	# file4 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/[filename]
# }
# [global] 

#--------------------------------------------------#
#    Template selection
#--------------------------------------------------#

	#Layout HTML and CSS
[globalVar = TSFE:page|layout = 1]
	page.10.template.file = {$fileadmin_root}/layout/page/{$mainpage_name}/template_layout1.html
	page.includeCSS.file4= {$fileadmin_root}/layout/page/{$mainpage_name}/css/layout1.css
[global]
 
	#Layout HTML and CSS
[globalVar = TSFE:page|layout = 2]
	page.10.template.file = {$fileadmin_root}/layoutlayout/page/{$mainpage_name}/template_layout2.html
	page.includeCSS.file4= {$fileadmin_root}/layout/page/{$mainpage_name}/css/layout2.css
[global]