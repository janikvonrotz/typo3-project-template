#--------------------------------------------------#
#    Title: Template selection
#--------------------------------------------------#
#    File name:  layout.ts
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
#    This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Switzerland License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ch/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
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