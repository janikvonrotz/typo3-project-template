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
  shortcutIcon = {$fileadmin_root}/layout/page/{$mainpage_name}/res/favicon2.ico   
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
  template.file = {$fileadmin_root}/layout/page/{$mainpage_name}/template_master.html     
  #--------------------------------------------------#
  #    Subparts
  #--------------------------------------------------# 
  workOnSubpart = SUBPART_BODY
  subparts{
  }
}