#--------------------------------------------------#
#    Title: Default Page Layout Setup
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
#    Version: 1.0.1
#
#    License:
#    This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Switzerland License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ch/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

#--------------------------------------------------#
#    Header config
#--------------------------------------------------#

page{

  headerData {
    10 = TEXT
    10.value = <meta http-equiv="X-UA-Compatible" content="IE=8" />
    20 = TEXT
    20.value = <meta name="robots" content="Index,Follow">
    30 = TEXT
    30.value = <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/jquery-1.7.2.min.js"></script>
    40 = TEXT
    40.value = <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/jquery.mousewheel-3.0.6.pack.js"></script>
    50 = TEXT
    50.value =  <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/jquery-functions.js"></script>
    60 = TEXT
    60.value =  <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/jquery.fancybox.js?v=2.0.6"></script>
     70 = TEXT
    70.value =  <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/jquery.fancybox-buttons.js?v=1.0.2"></script>
     80 = TEXT
    80.value =  <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/jquery.fancybox-thumbs.js?v=1.0.2"></script>
     90 = TEXT
    90.value =  <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/jquery.fancybox-media.js?v=1.0.0"></script>
     100 = TEXT
     100.value = <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/css3-mediaqueries.js"></script>
     110 = TEXT
     110.value = <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
     200 = TEXT
    200.value =  <script src="{$fileadmin_root}/layout/page/{$mainpage_name}/js/script.js"></script>    

    }
 
  includeCSS{
    file1 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/reset.css
    file2 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/layout.css
    file3 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/font.css
     file4 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/style.css
     file5 =
    file6 = {$fileadmin_root}/layout/ext/rte/template.css
     file7 = {$fileadmin_root}/layout/ext/fancybox/jquery.fancybox.css
     file8 = {$fileadmin_root}/layout/ext/fancybox/jquery.fancybox.css
     file9 = {$fileadmin_root}/layout/ext/fancybox/jquery.fancybox-buttons.css
     file10 = {$fileadmin_root}/layout/ext/fancybox/jquery.fancybox-thumbs.css
  }
 
  includeJS {
    file4 = {$fileadmin_root}/layout/page/{$mainpage_name}/js/lib/jquery.js
    file5 = {$fileadmin_root}/layout/page/{$mainpage_name}/js/script.js
  }

}

#--------------------------------------------------#
#    Browser conditions
#--------------------------------------------------#

[browser = msie]
page.includeCSS{
  file5 = {$fileadmin_root}/layout/page/{$mainpage_name}/css/[filename]
}
[global]

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
