#--------------------------------------------------#
#    Title: Clean tt_content Upload Layout
#--------------------------------------------------#
#    File name: content.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tssetup
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

#--------------------------------------------------#
#    Content Upload Layout
#--------------------------------------------------#
tt_content.uploads.wrap = <div class="article filelist">|</div>
tt_content.uploads.20.outerWrap =
tt_content.uploads.20.stdWrap.wrap = <div class="tiles">|</div>
tt_content.uploads.20.itemRendering >
tt_content.uploads.20.itemRendering = COA
tt_content.uploads.20.itemRendering{    
     #Avalaible items with "reigster:": filename, path, description, fileSize, fileExtension, linkedLabel (link), linkedIcon (link)

     10 = TEXT
     10{
          data = register:path
          wrap = <a target="_blank" href="|
     }
    
     20 = TEXT
     20{
          data = register:filename
          wrap = |">
     }
    
     30 = TEXT
     30{
          field = layout
          wrap = <div class="tile tile|">
     }
    
     40 = TEXT
     40{
          data = register:description
          ifEmpty.data = register:filename
          wrap = <div class="title"><p>|</p></div>
     }
    
     50 = TEXT
     50{
          data = register:fileExtension
          wrap = <div class="icon"><img src="{$fileadmin_root}/layout/page/{$mainpage_name}/res/|.svg"></img></div>
     }
    
     100 = TEXT
     100.value = </div></a>
}