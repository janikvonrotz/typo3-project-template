#--------------------------------------------------#
#    Title: Custom Menu based on tt_content
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
#    Content Menu Layout
#--------------------------------------------------# 
tt_content.menu.wrap = <div class="article menu">|</div>
tt_content.menu.20.default.special = directory
tt_content.menu.20.default.wrap = <div class="tiles">|</div>
tt_content.menu.20.default.1 >
tt_content.menu.20.default.1 = TMENU
tt_content.menu.20.default.1 {
     noBlur = 1
     expAll = 0
     NO = 1     
     NO {

          doNotLinkIt = 1
          stdWrap.cObject = COA
          stdWrap.cObject{

               10 = TEXT

               10.typolink.ATagBeforeWrap = 1
               10.typolink.parameter.field = uid

               10.cObject = COA
               10.cObject{

                    10 = TEXT
                    10.wrap = <div class="tile tile|">
                    10.field = layout

                    20 = TEXT
                    20.wrap = <div class="title"><p>|</p></div>
                    20.field = title

                    30 = TEXT
                    30.wrap = <div class = "subtitle"><p>|</p></div>
                    30.field = subtitle    

                    100 = TEXT
                    100.value = </div>
               }
          }
     }
}      
tt_content.menu.20.1 < .tt_content.menu.20.default